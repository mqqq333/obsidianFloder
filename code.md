# Main.c
~~~c
/*
 * FileName: main.c
 * Author: LI Zheng, ZHENG Lan, YU Ketian
 * Version :V3.0
 * UpdateDate:2023.6.1
      _    __  __    _     ________ _   _  ____   __  __    _     __________   _______  ______  _     ___  ____  _____ ____
     / \  |  \/  |  / \   |__  /_ _| \ | |/ ___| |  \/  |  / \   |__  / ____| | ____\ \/ /  _ \| |   / _ \|  _ \| ____|  _ \
    / _ \ | |\/| | / _ \    / / | ||  \| | |  _  | |\/| | / _ \    / /|  _|   |  _|  \  /| |_) | |  | | | | |_) |  _| | |_) |
   / ___ \| |  | |/ ___ \  / /_ | || |\  | |_| | | |  | |/ ___ \  / /_| |___  | |___ /  \|  __/| |__| |_| |  _ <| |___|  _ <
  /_/   \_\_|  |_/_/   \_\/____|___|_| \_|\____| |_|  |_/_/   \_\/____|_____| |_____/_/\_\_|   |_____\___/|_| \_\_____|_| \_\

 */

#include <stdio.h>
#include <stdlib.h>
#include <stddef.h>
#include <windows.h>
#include <time.h>
#include <math.h>

#include "data.h"
#include "display.h"
#include "maze.h"

#include "../include/graphics.h"
#include "../include/genlib.h"
#include "../include/conio.h"
#include "../include/imgui.h"
#include "../include/extgraph.h"

void Main()
{

    SetWindowSize(MyWindowWidth, MyWindowHeight);
    SetWindowTitle("Amazing Maze Explorer");

    InitGraphics();

    registerKeyboardEvent(KeyboardEventProcess);
    registerMouseEvent(MouseEventProcess);

    pageFlag = 1;
    Display = displayIndex;                               
}


~~~


# Maze.c
```c
#include <stdio.h>
#include <stdlib.h>
#include <stddef.h>
#include <windows.h>
#include <time.h>
#include <math.h>

#include "data.h"
#include "display.h"
#include "maze.h"

#include "../include/graphics.h"
#include "../include/genlib.h"
#include "../include/conio.h"
#include "../include/imgui.h"
#include "../include/extgraph.h"

/****map files operations*****/
void saveMap()
{
	OPENFILENAME ofn;
	char szFile[MAX_PATH] = "";

	ZeroMemory(&ofn, sizeof(ofn));
	ofn.lStructSize = sizeof(ofn);
	ofn.hwndOwner = NULL;
	ofn.lpstrFilter = "Text Files (*.txt)\0*.txt\0All Files (*.*)\0*.*\0";
	ofn.lpstrFile = szFile;
	ofn.nMaxFile = MAX_PATH;
	ofn.Flags = OFN_EXPLORER | OFN_OVERWRITEPROMPT;

	if (GetSaveFileName(&ofn) == TRUE)
	{
		char filePath[MAX_PATH];
		strcpy(filePath, szFile);
		const char *fileExtension = ".txt";
		size_t extensionPos = strlen(filePath) - 4;
		if (extensionPos == 0 || strcmp(filePath + extensionPos, fileExtension) != 0)
		{
			strcat(filePath, fileExtension);
		}
		strcpy(szFile, filePath);
		FILE *file = fopen(szFile, "w");
		if (file != NULL)
		{
			for (int i = 0; i < mazeCountX; i++)
			{
				for (int j = 0; j < mazeCountY; j++)
				{
					fprintf(file, "%d,", mazeMap[i][j]);
				}
				fprintf(file, "\n");
			}
			fclose(file);
		}
	}
}

void openMap()
{
	OPENFILENAME ofn;
	char szFile[MAX_PATH] = "";

	ZeroMemory(&ofn, sizeof(ofn));
	ofn.lStructSize = sizeof(ofn);
	ofn.hwndOwner = NULL;
	ofn.lpstrFilter = "Text Files (*.txt)\0*.txt\0All Files (*.*)\0*.*\0";
	ofn.lpstrFile = szFile;
	ofn.nMaxFile = MAX_PATH;
	ofn.Flags = OFN_EXPLORER | OFN_FILEMUSTEXIST;

	if (GetOpenFileName(&ofn) == TRUE)
	{
		FILE *file = fopen(szFile, "r");
		if (file != NULL)
		{
			for (int i = 0; i < mazeCountX; i++)
			{
				for (int j = 0; j < mazeCountY; j++)
				{
					if (fscanf(file, "%d,", &mazeMap[i][j]) != 1)
					{
						fclose(file);
						return;
					}
				}
			}
			fclose(file);
		}
	}
}

void initMaze()
{
	autoSolve = 0;
	getKey = 0;
	openDoor = 0;
	gameOver = 0;

	for (int i = 0; i < mazeCountX; i++)
	{
		for (int j = 0; j < mazeCountY; j++)
		{
			if (mazeMap[i][j] == 2)
			{
				startX = i;
				startY = j;
				currentX = i;
				currentY = j;
				if (pageFlag == 3)
					mazeMap[i][j] = 7;
			}
			else if (mazeMap[i][j] == 3)
			{
				exitX = i;
				exitY = j;
			}
			else if (mazeMap[i][j] == 4)
			{
				keyX = i;
				keyY = j;
			}
			else if (mazeMap[i][j] == 5)
			{
				doorX = i;
				doorY = j;
			}
		}
	}
}

int calDis(int ax, int ay, int bx, int by)
{
	return abs(ax - bx) + abs(ay - by);
}

void updateMaze()
{

	for (int i = 0; i < mazeCountX; i++)
	{
		for (int j = 0; j < mazeCountY; j++)
		{
			if (mazeMap[i][j] == 2)
			{
				startX = i;
				startY = j;
				currentX = i;
				currentY = j;
				if (pageFlag == 3)
					mazeMap[i][j] = 7;
			}
			else if (mazeMap[i][j] == 3)
			{
				exitX = i;
				exitY = j;
			}
			else if (mazeMap[i][j] == 4)
			{
				keyX = i;
				keyY = j;
			}
			else if (mazeMap[i][j] == 5)
			{
				doorX = i;
				doorY = j;
			}
		}
	}
}

void createMaze()
{
	// clear first
	for (int i = 0; i < mazeCountX; i++)
	{
		for (int j = 0; j < mazeCountY; j++)
		{
			mazeMap[i][j] = 0;
		}
	}

	// create door
	srand(time(0));
	doorX = (rand() % (7 - 4 + 1)) + 4;
	doorY = (rand() % (8 - 5 + 1)) + 5;
	mazeMap[doorX][doorY] = 5;

	srand(time(0));
	int mapType = (rand() % (2 - 1 + 1)) + 1;

	// Type 1: wallX
	if (mapType == 1)
	{
		// createWall
		for (int i = 0; i < mazeCountX; i++)
		{
			if (i != doorX)
			{
				int j = doorY + (rand() % (1 - 0 + 1));
				if (i == doorX + 1 || i == doorX - 1)
					j = doorY;
				mazeMap[i][j] = 1;
			}
		}

		// create Entrance,key and exit
		if (doorY <= 6)
		{
			startY = rand() % (mazeCountY - 1 - (doorY + 4) + 1) + doorY + 4;
			startX = rand() % (mazeCountX - 1 - 0 + 1);
			do
			{
				keyY = rand() % (mazeCountY - 1 - (doorY + 2) + 1) + doorY + 2;
				keyX = rand() % (mazeCountX - 1 - 0 + 1);
			} while (keyX == startX || keyY == startY || abs(keyX - startX) <= 3);
			mazeMap[startX][startY] = 2;
			mazeMap[keyX][keyY] = 4;

			exitY = rand() % (doorY - 2);
			exitX = rand() % mazeCountX;
			mazeMap[exitX][exitY] = 3;
		}
		else
		{
			startY = rand() % (doorY - 2);
			startX = rand() % mazeCountX;
			do
			{
				keyY = rand() % (doorY - 2);
				keyX = rand() % mazeCountX;
			} while (keyX == startX || keyY == startY || abs(keyX - startX) <= 3);
			mazeMap[startX][startY] = 2;
			mazeMap[keyX][keyY] = 4;

			exitY = rand() % (mazeCountY - 1 - (doorY + 3) + 1) + doorY + 3;
			exitX = rand() % mazeCountX;
			mazeMap[exitX][exitY] = 3;
		}
	}
	// Type 2: wally
	if (mapType == 2)
	{
		// createWall
		for (int j = 0; j < mazeCountY; j++)
		{
			if (j != doorY)
			{
				int i = doorX + (rand() % (1 - 0 + 1));
				if (j == doorY + 1 || j == doorY - 1)
					i = doorX;
				mazeMap[i][j] = 1;
			}
		}

		// create Entrance,key and exit
		if (doorX <= 5)
		{
			startX = rand() % (mazeCountX - 1 - (doorX + 3) + 1) + doorX + 3;
			startY = rand() % (mazeCountY - 1 - 0 + 1);
			do
			{
				keyX = rand() % (mazeCountX - 1 - (doorX + 3) + 1) + doorX + 3;
				keyY = rand() % (mazeCountY - 1 - 0 + 1);
			} while (keyX == startX || keyY == startY || abs(keyY - startY) <= 2);
			mazeMap[startX][startY] = 2;
			mazeMap[keyX][keyY] = 4;

			exitX = rand() % (doorX - 2);
			exitY = rand() % mazeCountY;
			mazeMap[exitX][exitY] = 3;
		}
		else
		{
			startX = rand() % (doorX - 2);
			startY = rand() % mazeCountY;
			do
			{
				keyX = rand() % (doorX - 2);
				keyY = rand() % mazeCountY;
			} while (keyX == startX || keyY == startY || abs(keyY - startY) <= 2);
			mazeMap[startX][startY] = 2;
			mazeMap[keyX][keyY] = 4;

			exitX = rand() % (mazeCountX - 1 - (doorX + 4) + 1) + doorX + 4;
			exitY = rand() % (mazeCountY - 1 - 0 + 1);
			mazeMap[exitX][exitY] = 3;
		}
	}
	int tempmazeMap[mazeCountX][mazeCountY];
	for (int i = 0; i < mazeCountX; i++)
	{
		for (int j = 0; j < mazeCountY; j++)
		{
			tempmazeMap[i][j] = mazeMap[i][j];
		}
	}

	do
	{
		for (int i = 0; i < mazeCountX; i++)
		{
			for (int j = 0; j < mazeCountY; j++)
			{
				mazeMap[i][j] = tempmazeMap[i][j];
			}
		}
		for (int i = 0; i <= 105; i++)
		{
			int wallX = rand() % mazeCountX;
			int wallY = rand() % mazeCountY;
			if (mazeMap[wallX][wallY] == 0)
				mazeMap[wallX][wallY] = 1;
		}

	} while (findPath(startX, startY, keyX, keyY) == 0 || findPath(keyX, keyY, doorX, doorY) == 0 || findPath(doorX, doorY, exitX, exitY) == 0 ||
			 calDis(startX, startY, keyX, keyY) < 5 || calDis(startX, startY, keyX, keyY) < 5 || calDis(startX, startY, keyX, keyY) < 5);

	Display();
}

/*****jugde if maze can work*****/

int judgeMaze()
{
	int flag = 0;
	int countStart = 0;
	int countExit = 0;
	int countDoor = 0;
	int countKey = 0;
	for (int i = 0; i < mazeCountX; i++)
	{
		for (int j = 0; j < mazeCountY; j++)
		{
			if (mazeMap[i][j] == 2)
				countStart++;
			else if (mazeMap[i][j] == 3)
				countExit++;
			else if (mazeMap[i][j] == 4)
				countKey++;
			else if (mazeMap[i][j] == 5)
				countDoor++;
		}
	}
	if (countStart == 1 && countExit == 1 && countDoor == 1 && countKey == 1 && findPath(startX, startY, keyX, keyY) == 1 && findPath(keyX, keyY, doorX, doorY) == 1 && findPath(doorX, doorY, exitX, exitY) == 1)
		flag = 1;
	else if (countStart > 1)
	{
		SetPenColor("Red");
		MovePen(index_devInfoX + adjustSize * 4, index_devInfoY);
		DrawTextString("Too many ENTRANCE!");
		SetPenColor("Black");
	}
	else if (countExit > 1)
	{
		SetPenColor("Red");
		MovePen(index_devInfoX + adjustSize * 4, index_devInfoY);
		DrawTextString("Too many EXIT!");
		SetPenColor("Black");
	}
	else if (countDoor > 1)
	{
		SetPenColor("Red");
		MovePen(index_devInfoX + adjustSize * 4, index_devInfoY);
		DrawTextString("Too many DOOR!");
		SetPenColor("Black");
	}
	else if (countKey > 1)
	{
		SetPenColor("Red");
		MovePen(index_devInfoX + adjustSize * 4, index_devInfoY);
		DrawTextString("Too many KEY!");
		SetPenColor("Black");
	}
	else
	{
		SetPenColor("Red");
		MovePen(index_devInfoX + adjustSize * 4, index_devInfoY);
		DrawTextString("CAN'T FIND PATH!");
		SetPenColor("Black");
	}
	return flag;
}


/****path related***/

void initQueue(struct Queue* queue)
{
    queue->front = NULL;
    queue->rear = NULL;
}

bool isQueueEmpty(struct Queue* queue)
{
    return queue->front == NULL;
}

void enqueue(struct Queue* queue, int x, int y)
{
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->x = x;
    newNode->y = y;
    newNode->next = NULL;

    if (queue->rear == NULL) {
        queue->front = newNode;
        queue->rear = newNode;
    }
    else {
        queue->rear->next = newNode;
        queue->rear = newNode;
    }
}

struct Node* dequeue(struct Queue* queue)
{
    if (queue->front == NULL) {
        return NULL;
    }

    struct Node* node = queue->front;
    queue->front = queue->front->next;

    if (queue->front == NULL) {
        queue->rear = NULL;
    }

    return node;
}

bool isValid(int x, int y)
{
    return (x >= 0 && x < mazeCountX && y >= 0 && y < mazeCountY);
}

bool isPath(int x, int y)
{
    return ((mazeMap[x][y] != 1 && mazeMap[x][y] != 5) || (mazeMap[x][y] == 5 && getKey == 1));
}

int findPath(int pathStartX, int pathStartY, int pathEndX, int pathEndY)
{
    int recordStart = mazeMap[pathStartX][pathStartY];
    int recordEnd = mazeMap[pathEndX][pathEndY];

    mazeMap[pathStartX][pathStartY] = 0;
    mazeMap[pathEndX][pathEndY] = 0;

    struct Queue queue;
    initQueue(&queue);

    for (int i = 0; i < mazeCountX; i++)
    {
        for (int j = 0; j < mazeCountY; j++)
        {
            path[i][j] = -1;
        }
    }

    int dx[] = { -1, 1, 0, 0 };
    int dy[] = { 0, 0, -1, 1 };

    enqueue(&queue, pathStartX, pathStartY);
    path[pathStartX][pathStartY] = -2;

    while (!isQueueEmpty(&queue))
    {
        struct Node* currentNode = dequeue(&queue);
        int currentX = currentNode->x;
        int currentY = currentNode->y;
        free(currentNode);

        if (currentX == pathEndX && currentY == pathEndY)
        {
            mazeMap[pathStartX][pathStartY] = recordStart;
            mazeMap[pathEndX][pathEndY] = recordEnd;
            return 1;
        }

        for (int i = 0; i < 4; i++)
        {
            int newX = currentX + dx[i];
            int newY = currentY + dy[i];

            if (isValid(newX, newY) && isPath(newX, newY) && path[newX][newY] == -1)
            {
                enqueue(&queue, newX, newY);
                path[newX][newY] = i;
            }
        }
    }

    mazeMap[pathStartX][pathStartY] = recordStart;
    mazeMap[pathEndX][pathEndY] = recordEnd;
    return 0;
}

void printPath(int pathStartX, int pathStartY, int pathEndX, int pathEndY)
{
    if (autoSolve == 1)
    {
        for (int i = 0; i < mazeCountX; i++)
        {
            for (int j = 0; j < mazeCountY; j++)
            {
                if (mazeMap[i][j] == 6)
                    mazeMap[i][j] = 0;
            }
        }
    }

    int x = pathEndX;
    int y = pathEndY;
    int count = 0;
    int dx[] = { -1, 1, 0, 0 };
    int dy[] = { 0, 0, -1, 1 };

    while (x != pathStartX || y != pathStartY)
    {
        int direction = path[x][y];
        x -= dx[direction];
        y -= dy[direction];
        count++;
    }

    int pathLength = count + 1;
    struct Node** pathArray = (struct Node**)malloc(pathLength * sizeof(struct Node*));
    count = 0;
    x = pathEndX;
    y = pathEndY;

    while (x != pathStartX || y != pathStartY)
    {
        int direction = path[x][y];
        x -= dx[direction];
        y -= dy[direction];

        struct Node* node = (struct Node*)malloc(sizeof(struct Node));
        node->x = x;
        node->y = y;
        node->next = NULL;

        pathArray[count++] = node;
    }

    for (int i = pathLength - 3; i >= 0; i--)
    {
        if (mazeMap[pathArray[i]->x][pathArray[i]->y] == 0)
            mazeMap[pathArray[i]->x][pathArray[i]->y] = 6;
    }
    Display();

    for (int i = 0; i < pathLength - 1; i++) {
        free(pathArray[i]);
    }
    free(pathArray);
}

void printNextStep(int pathStartX, int pathStartY, int pathEndX, int pathEndY)
{
    for (int i = 0; i < mazeCountX; i++)
    {
        for (int j = 0; j < mazeCountY; j++)
        {
            if (mazeMap[i][j] == 6)
                mazeMap[i][j] = 0;
        }
    }
    int x = pathEndX;
    int y = pathEndY;
    int count = 0;
    int dx[] = { -1, 1, 0, 0 };
    int dy[] = { 0, 0, -1, 1 };

    while (x != pathStartX || y != pathStartY)
    {
        int direction = path[x][y];
        x -= dx[direction];
        y -= dy[direction];
        count++;
    }

    int pathLength = count + 1;
    struct Node** pathArray = (struct Node**)malloc(pathLength * sizeof(struct Node*));
    count = 0;
    x = pathEndX;
    y = pathEndY;

    while (x != pathStartX || y != pathStartY)
    {
        int direction = path[x][y];
        x -= dx[direction];
        y -= dy[direction];

        struct Node* node = (struct Node*)malloc(sizeof(struct Node));
        node->x = x;
        node->y = y;
        node->next = NULL;

        pathArray[count++] = node;
    }

    int i = pathLength - 3;
    if (i >= 0 && mazeMap[pathArray[i]->x][pathArray[i]->y] == 0)
        mazeMap[pathArray[i]->x][pathArray[i]->y] = 6;

    Display();

    for (int i = 0; i < pathLength - 1; i++) {
        free(pathArray[i]);
    }
    free(pathArray);
}


```

# maze.h
~~~c
#ifndef _H_MAZE
#define _H_MAZE

#include "../include/genlib.h"

int judgeMaze();

int findPath(int pathStartX, int pathStartY, int pathEndX, int pathEndY);
void showAllPath();
void printPath(int pathStartX, int pathStartY, int pathEndX, int pathEndY);
void printNextStep(int pathStartX, int pathStartY, int pathEndX, int pathEndY);

void openMap();
void saveMap();
int calDis(int ax,int ay,int bx, int by);

void initMaze();
void updateMaze();
void createMaze();
void createPath(int pathStartX, int pathStartY, int pathEndX, int pathEndY);

bool isValid(int x, int y);
bool isPath(int x, int y);

void initQueue(struct Queue* queue);
bool isQueueEmpty(struct Queue* queue);
void enqueue(struct Queue* queue, int x, int y);
struct Node* dequeue(struct Queue* queue);

#endif


~~~


# display.c
~~~c
#include <stdio.h>
#include <stdlib.h>
#include <stddef.h>
#include <windows.h>
#include <time.h>
#include <math.h>

#include "data.h"
#include "display.h"
#include "maze.h"

#include "../include/graphics.h"
#include "../include/genlib.h"
#include "../include/conio.h"
#include "../include/imgui.h"
#include "../include/extgraph.h"

/**** Displays ****/

void displayIndex(void)
{
	DisplayClear();
	drawIndexButtons();
}

void displayEdit(void)
{
	DisplayClear();
	drawEditButtons();
	drawMazeMap();
	drawMazeOutline();
}

void displayGame(void)
{
	DisplayClear();
	drawGameButtons();
	drawMazeMap();
	drawMazeOutline();
}

/**** Draw Buttons ****/

void drawIndexButtons()
{
	SetPenSize(1);
	MovePen(index_devInfoX + 1 * index_devInfoX / 10, index_devInfoY + 2.1 * MyWindowHeight / 10 - 0.3);
	DrawLine(0, -0.24);
	DrawLine(0.06, 0.04);
	DrawLine(0.04, -0.08);
	DrawLine(0.06, 0.03);
	DrawLine(-0.04, 0.08);
	DrawLine(0.06, 0.03);
	DrawLine(-0.18, 0.16);
	MovePen(index_devInfoX+1*index_devInfoX/10, index_devInfoY+2.1*MyWindowHeight/10-0.3);
	DrawLine(0,-0.24); 
	DrawLine(0.06,0.04); 
	DrawLine(0.04,-0.08); 
	DrawLine(0.06,0.03); 
	DrawLine(-0.04,0.08);
	DrawLine(0.06,0.03);
	DrawLine(-0.18,0.16);
	double startx,starty;
	SetPenColor("Red");
	startx=index_devInfoX-7*index_devInfoX/10;
    starty=index_devInfoY+9.3*MyWindowHeight/10;
    MovePen(startx + 0.3 * mazeSize, starty - mazeSize);
    DrawLine(0, 0.7 * mazeSize);
    DrawLine(0.4 * mazeSize, 0);
    DrawLine(0, -0.7 * mazeSize);
    DrawLine(-0.4 * mazeSize, 0);
	MovePen(startx + 0.6 * mazeSize, starty - 0.6 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
    SetPenColor("Green");
    startx=index_devInfoX-5*index_devInfoX/10;
    starty=index_devInfoY+8.3*MyWindowHeight/10;
    MovePen(startx + 0.45 * mazeSize, starty - 0.35 * mazeSize);
    DrawLine(0.1 * mazeSize, 0);
    DrawLine(0.05 * mazeSize, -0.05 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
    DrawLine(-0.05 * mazeSize, -0.05 * mazeSize);
    DrawLine(-0.1 * mazeSize, 0);
    DrawLine(-0.05 * mazeSize, 0.05 * mazeSize);
    DrawLine(0, 0.1 * mazeSize);
    DrawLine(0.05 * mazeSize, 0.05 * mazeSize);
    MovePen(startx + 0.53 * mazeSize, starty - 0.4 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
	SetPenColor("Yellow1");
	startx=index_devInfoX-3*index_devInfoX/10;
    starty=index_devInfoY+9.3*MyWindowHeight/10;
    MovePen(startx + 0.3 * mazeSize, starty - mazeSize);
    DrawLine(0, 0.7 * mazeSize);
    DrawLine(0.3 * mazeSize, 0.1 * mazeSize);
    DrawLine(0, -0.8 * mazeSize);
    MovePen(startx + 0.5 * mazeSize, starty - 0.55 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
	MovePen(startx + 0.6 * mazeSize, starty - 0.3 * mazeSize);
    DrawLine(0.1 * mazeSize, 0);
    DrawLine(0, -0.7 * mazeSize);
    DrawLine(-0.4 * mazeSize, 0);
	SetPenColor("Orange");
	startx=index_devInfoX-1*index_devInfoX/10;
    starty=index_devInfoY+8.75*MyWindowHeight/10;
	MovePen(startx + 0.3 * mazeSize, starty - 0.665 * mazeSize);
    DrawLine(0.2 * mazeSize, 0.2 * mazeSize);
    DrawLine(0.2 * mazeSize, -0.2 * mazeSize);
    DrawLine(-0.05 * mazeSize, -0.05 * mazeSize);
    DrawLine(0.17 * mazeSize, -0.17 * mazeSize);
    DrawLine(0, -0.12 * mazeSize);
    MovePen(startx + 0.3 * mazeSize, starty - 0.665 * mazeSize);
	DrawLine(0.2 * mazeSize, -0.2 * mazeSize);
    DrawLine(0.06 * mazeSize, 0.06 * mazeSize);
	DrawLine(0.08 * mazeSize, -0.08 * mazeSize);
    DrawLine(0.05 * mazeSize, 0);
    DrawLine(0, -0.05 * mazeSize);
    DrawLine(0.05 * mazeSize, 0);
    DrawLine(0, -0.05 * mazeSize);
    DrawLine(0.09 * mazeSize, 0);
    MovePen(startx + 0.45 * mazeSize, starty - 0.65 * mazeSize); 
    DrawLine(0.08 * mazeSize, -0.08 * mazeSize);
    DrawLine(0.04 * mazeSize, 0.04 * mazeSize);
    DrawLine(-0.06 * mazeSize, 0.06 * mazeSize);
    DrawLine(-0.03 * mazeSize, -0.03 * mazeSize);
	SetPenColor("Black");
	startx=index_devInfoX+1*index_devInfoX/10;
    starty=index_devInfoY+9.3*MyWindowHeight/10;
	MovePen(startx + 0.25 * mazeSize, starty - 0.25 * mazeSize);
    DrawLine(0, -0.72 * mazeSize);
    MovePen(startx + 0.22 * mazeSize, starty - 0.25 * mazeSize);
    DrawLine(0.5 * mazeSize, 0);
    DrawLine(0, -0.375 * mazeSize);
    DrawLine(-0.5 * mazeSize, 0);
    MovePen(startx + 0.385 * mazeSize, starty - 0.27 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.425 * mazeSize, starty - 0.27 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.465 * mazeSize, starty - 0.27 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.625 * mazeSize, starty - 0.27 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.645 * mazeSize, starty - 0.27 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.675 * mazeSize, starty - 0.27 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.385 * mazeSize, starty - 0.5 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.425 * mazeSize, starty - 0.5 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.465 * mazeSize, starty - 0.5 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.625 * mazeSize, starty - 0.5 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.645 * mazeSize, starty - 0.5 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.675 * mazeSize, starty - 0.5 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.26 * mazeSize, starty - 0.375 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.30 * mazeSize, starty - 0.375 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.34 * mazeSize, starty - 0.375 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.5 * mazeSize, starty - 0.375 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.54 * mazeSize, starty - 0.375 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.58 * mazeSize, starty - 0.375 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    SetPenColor("Blue");
    startx=index_devInfoX+3*index_devInfoX/10;
    starty=index_devInfoY+8.3*MyWindowHeight/10;
    drawMyRectangle(startx + 0.33 * mazeSize, starty - 0.2 * mazeSize, 0.3 * mazeSize, 0.2 * mazeSize);
    drawMyRectangle(startx + 0.4 * mazeSize, starty - 0.4 * mazeSize, 0.2 * mazeSize, 0.35 * mazeSize);
    drawMyRectangle(startx + 0.32 * mazeSize, starty - 0.45 * mazeSize, 0.05 * mazeSize, 0.25 * mazeSize);
    drawMyRectangle(startx + 0.6 * mazeSize, starty - 0.45 * mazeSize, 0.05 * mazeSize, 0.25 * mazeSize);
    drawMyRectangle(startx + 0.43 * mazeSize, starty - 0.75 * mazeSize, 0.05 * mazeSize, 0.25 * mazeSize);
    drawMyRectangle(startx + 0.52 * mazeSize, starty - 0.75 * mazeSize, 0.05 * mazeSize, 0.25 * mazeSize);
    MovePen(startx + 0.43 * mazeSize, starty - 0.25 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
    MovePen(startx + 0.53 * mazeSize, starty - 0.25 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);    
	SetPenColor("Magenta");
    startx=index_devInfoX+5*index_devInfoX/10;
    starty=index_devInfoY+9.3*MyWindowHeight/10;
    MovePen(startx + 0.4 * mazeSize, starty - mazeSize);
    DrawLine(0, 0.7 * mazeSize);
    DrawLine(0.3 * mazeSize, -0.2 * mazeSize);
    DrawLine(-0.3 * mazeSize, -0.1 * mazeSize);
    SetPenColor("Green");
    startx=index_devInfoX+7*index_devInfoX/10;
    starty=index_devInfoY+8.3*MyWindowHeight/10;
    MovePen(startx + 0.45 * mazeSize, starty - 0.35 * mazeSize);
    DrawLine(0.1 * mazeSize, 0);
    DrawLine(0.05 * mazeSize, -0.05 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
    DrawLine(-0.05 * mazeSize, -0.05 * mazeSize);
    DrawLine(-0.1 * mazeSize, 0);
    DrawLine(-0.05 * mazeSize, 0.05 * mazeSize);
    DrawLine(0, 0.1 * mazeSize);
    DrawLine(0.05 * mazeSize, 0.05 * mazeSize);
    MovePen(startx + 0.53 * mazeSize, starty - 0.4 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
    SetPenColor("Red");
	startx=index_devInfoX+9*index_devInfoX/10;
    starty=index_devInfoY+9.3*MyWindowHeight/10;
    MovePen(startx + 0.3 * mazeSize, starty - mazeSize);
    DrawLine(0, 0.7 * mazeSize);
    DrawLine(0.4 * mazeSize, 0);
    DrawLine(0, -0.7 * mazeSize);
    DrawLine(-0.4 * mazeSize, 0);
	MovePen(startx + 0.6 * mazeSize, starty - 0.6 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
    SetPenColor("Yellow1");
	startx=index_devInfoX+11*index_devInfoX/10;
    starty=index_devInfoY+8.3*MyWindowHeight/10;
    MovePen(startx + 0.3 * mazeSize, starty - mazeSize);
    DrawLine(0, 0.7 * mazeSize);
    DrawLine(0.3 * mazeSize, 0.1 * mazeSize);
    DrawLine(0, -0.8 * mazeSize);
    MovePen(startx + 0.5 * mazeSize, starty - 0.55 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
	MovePen(startx + 0.6 * mazeSize, starty - 0.3 * mazeSize);
    DrawLine(0.1 * mazeSize, 0);
    DrawLine(0, -0.7 * mazeSize);
    DrawLine(-0.4 * mazeSize, 0);
    SetPenColor("Orange");
	startx=index_devInfoX+13*index_devInfoX/10;
    starty=index_devInfoY+9.3*MyWindowHeight/10;
	MovePen(startx + 0.3 * mazeSize, starty - 0.665 * mazeSize);
    DrawLine(0.2 * mazeSize, 0.2 * mazeSize);
    DrawLine(0.2 * mazeSize, -0.2 * mazeSize);
    DrawLine(-0.05 * mazeSize, -0.05 * mazeSize);
    DrawLine(0.17 * mazeSize, -0.17 * mazeSize);
    DrawLine(0, -0.12 * mazeSize);
    MovePen(startx + 0.3 * mazeSize, starty - 0.665 * mazeSize);
	DrawLine(0.2 * mazeSize, -0.2 * mazeSize);
    DrawLine(0.06 * mazeSize, 0.06 * mazeSize);
	DrawLine(0.08 * mazeSize, -0.08 * mazeSize);
    DrawLine(0.05 * mazeSize, 0);
    DrawLine(0, -0.05 * mazeSize);
    DrawLine(0.05 * mazeSize, 0);
    DrawLine(0, -0.05 * mazeSize);
    DrawLine(0.09 * mazeSize, 0);
    MovePen(startx + 0.45 * mazeSize, starty - 0.65 * mazeSize); 
    DrawLine(0.08 * mazeSize, -0.08 * mazeSize);
    DrawLine(0.04 * mazeSize, 0.04 * mazeSize);
    DrawLine(-0.06 * mazeSize, 0.06 * mazeSize);
    DrawLine(-0.03 * mazeSize, -0.03 * mazeSize);
    SetPenColor("Orange");
	startx=index_devInfoX-7*index_devInfoX/10;
    starty=index_devInfoY+5.25*MyWindowHeight/10;
	MovePen(startx + 0.3 * mazeSize, starty - 0.665 * mazeSize);
    DrawLine(0.2 * mazeSize, 0.2 * mazeSize);
    DrawLine(0.2 * mazeSize, -0.2 * mazeSize);
    DrawLine(-0.05 * mazeSize, -0.05 * mazeSize);
    DrawLine(0.17 * mazeSize, -0.17 * mazeSize);
    DrawLine(0, -0.12 * mazeSize);
    MovePen(startx + 0.3 * mazeSize, starty - 0.665 * mazeSize);
	DrawLine(0.2 * mazeSize, -0.2 * mazeSize);
    DrawLine(0.06 * mazeSize, 0.06 * mazeSize);
	DrawLine(0.08 * mazeSize, -0.08 * mazeSize);
    DrawLine(0.05 * mazeSize, 0);
    DrawLine(0, -0.05 * mazeSize);
    DrawLine(0.05 * mazeSize, 0);
    DrawLine(0, -0.05 * mazeSize);
    DrawLine(0.09 * mazeSize, 0);
    MovePen(startx + 0.45 * mazeSize, starty - 0.65 * mazeSize); 
    DrawLine(0.08 * mazeSize, -0.08 * mazeSize);
    DrawLine(0.04 * mazeSize, 0.04 * mazeSize);
    DrawLine(-0.06 * mazeSize, 0.06 * mazeSize);
    DrawLine(-0.03 * mazeSize, -0.03 * mazeSize);
    SetPenColor("Yellow1");
	startx=index_devInfoX-5*index_devInfoX/10;
    starty=index_devInfoY+4.25*MyWindowHeight/10;
    MovePen(startx + 0.3 * mazeSize, starty - mazeSize);
    DrawLine(0, 0.7 * mazeSize);
    DrawLine(0.3 * mazeSize, 0.1 * mazeSize);
    DrawLine(0, -0.8 * mazeSize);
    MovePen(startx + 0.5 * mazeSize, starty - 0.55 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
	MovePen(startx + 0.6 * mazeSize, starty - 0.3 * mazeSize);
    DrawLine(0.1 * mazeSize, 0);
    DrawLine(0, -0.7 * mazeSize);
    DrawLine(-0.4 * mazeSize, 0);
    SetPenColor("Blue");
    startx=index_devInfoX-3*index_devInfoX/10;
    starty=index_devInfoY+5.225*MyWindowHeight/10;
    drawMyRectangle(startx + 0.33 * mazeSize, starty - 0.2 * mazeSize, 0.3 * mazeSize, 0.2 * mazeSize);
    drawMyRectangle(startx + 0.4 * mazeSize, starty - 0.4 * mazeSize, 0.2 * mazeSize, 0.35 * mazeSize);
    drawMyRectangle(startx + 0.32 * mazeSize, starty - 0.45 * mazeSize, 0.05 * mazeSize, 0.25 * mazeSize);
    drawMyRectangle(startx + 0.6 * mazeSize, starty - 0.45 * mazeSize, 0.05 * mazeSize, 0.25 * mazeSize);
    drawMyRectangle(startx + 0.43 * mazeSize, starty - 0.75 * mazeSize, 0.05 * mazeSize, 0.25 * mazeSize);
    drawMyRectangle(startx + 0.52 * mazeSize, starty - 0.75 * mazeSize, 0.05 * mazeSize, 0.25 * mazeSize);
    MovePen(startx + 0.43 * mazeSize, starty - 0.25 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
    MovePen(startx + 0.53 * mazeSize, starty - 0.25 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
    SetPenColor("Magenta");
    startx=index_devInfoX-1*index_devInfoX/10;
    starty=index_devInfoY+4.25*MyWindowHeight/10;
    MovePen(startx + 0.4 * mazeSize, starty - mazeSize);
    DrawLine(0, 0.7 * mazeSize);
    DrawLine(0.3 * mazeSize, -0.2 * mazeSize);
    DrawLine(-0.3 * mazeSize, -0.1 * mazeSize);
	SetPenColor("Red");
	startx=index_devInfoX+1*index_devInfoX/10;
    starty=index_devInfoY+5.25*MyWindowHeight/10;
    MovePen(startx + 0.3 * mazeSize, starty - mazeSize);
    DrawLine(0, 0.7 * mazeSize);
    DrawLine(0.4 * mazeSize, 0);
    DrawLine(0, -0.7 * mazeSize);
    DrawLine(-0.4 * mazeSize, 0);
	MovePen(startx + 0.6 * mazeSize, starty - 0.6 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
    SetPenColor("Green");
    startx=index_devInfoX+3*index_devInfoX/10;
    starty=index_devInfoY+4.25*MyWindowHeight/10;
    MovePen(startx + 0.45 * mazeSize, starty - 0.35 * mazeSize);
    DrawLine(0.1 * mazeSize, 0);
    DrawLine(0.05 * mazeSize, -0.05 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
    DrawLine(-0.05 * mazeSize, -0.05 * mazeSize);
    DrawLine(-0.1 * mazeSize, 0);
    DrawLine(-0.05 * mazeSize, 0.05 * mazeSize);
    DrawLine(0, 0.1 * mazeSize);
    DrawLine(0.05 * mazeSize, 0.05 * mazeSize);
    MovePen(startx + 0.53 * mazeSize, starty - 0.4 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
	SetPenColor("Yellow1");
	startx=index_devInfoX+5*index_devInfoX/10;
    starty=index_devInfoY+5.25*MyWindowHeight/10;
    MovePen(startx + 0.3 * mazeSize, starty - mazeSize);
    DrawLine(0, 0.7 * mazeSize);
    DrawLine(0.3 * mazeSize, 0.1 * mazeSize);
    DrawLine(0, -0.8 * mazeSize);
    MovePen(startx + 0.5 * mazeSize, starty - 0.55 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
	MovePen(startx + 0.6 * mazeSize, starty - 0.3 * mazeSize);
    DrawLine(0.1 * mazeSize, 0);
    DrawLine(0, -0.7 * mazeSize);
    DrawLine(-0.4 * mazeSize, 0);
	SetPenColor("Orange");
	startx=index_devInfoX+7*index_devInfoX/10;
    starty=index_devInfoY+4.5*MyWindowHeight/10;
	MovePen(startx + 0.3 * mazeSize, starty - 0.665 * mazeSize);
    DrawLine(0.2 * mazeSize, 0.2 * mazeSize);
    DrawLine(0.2 * mazeSize, -0.2 * mazeSize);
    DrawLine(-0.05 * mazeSize, -0.05 * mazeSize);
    DrawLine(0.17 * mazeSize, -0.17 * mazeSize);
    DrawLine(0, -0.12 * mazeSize);
    MovePen(startx + 0.3 * mazeSize, starty - 0.665 * mazeSize);
	DrawLine(0.2 * mazeSize, -0.2 * mazeSize);
    DrawLine(0.06 * mazeSize, 0.06 * mazeSize);
	DrawLine(0.08 * mazeSize, -0.08 * mazeSize);
    DrawLine(0.05 * mazeSize, 0);
    DrawLine(0, -0.05 * mazeSize);
    DrawLine(0.05 * mazeSize, 0);
    DrawLine(0, -0.05 * mazeSize);
    DrawLine(0.09 * mazeSize, 0);
    MovePen(startx + 0.45 * mazeSize, starty - 0.65 * mazeSize); 
    DrawLine(0.08 * mazeSize, -0.08 * mazeSize);
    DrawLine(0.04 * mazeSize, 0.04 * mazeSize);
    DrawLine(-0.06 * mazeSize, 0.06 * mazeSize);
    DrawLine(-0.03 * mazeSize, -0.03 * mazeSize);
	SetPenColor("Black");
	startx=index_devInfoX+9*index_devInfoX/10;
    starty=index_devInfoY+5.25*MyWindowHeight/10;
	MovePen(startx + 0.25 * mazeSize, starty - 0.25 * mazeSize);
    DrawLine(0, -0.72 * mazeSize);
    MovePen(startx + 0.22 * mazeSize, starty - 0.25 * mazeSize);
    DrawLine(0.5 * mazeSize, 0);
    DrawLine(0, -0.375 * mazeSize);
    DrawLine(-0.5 * mazeSize, 0);
    MovePen(startx + 0.385 * mazeSize, starty - 0.27 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.425 * mazeSize, starty - 0.27 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.465 * mazeSize, starty - 0.27 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.625 * mazeSize, starty - 0.27 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.645 * mazeSize, starty - 0.27 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.675 * mazeSize, starty - 0.27 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.385 * mazeSize, starty - 0.5 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.425 * mazeSize, starty - 0.5 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.465 * mazeSize, starty - 0.5 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.625 * mazeSize, starty - 0.5 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.645 * mazeSize, starty - 0.5 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.675 * mazeSize, starty - 0.5 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.26 * mazeSize, starty - 0.375 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.30 * mazeSize, starty - 0.375 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.34 * mazeSize, starty - 0.375 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.5 * mazeSize, starty - 0.375 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.54 * mazeSize, starty - 0.375 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    MovePen(startx + 0.58 * mazeSize, starty - 0.375 * mazeSize);
    DrawLine(0, -0.125 * mazeSize);
    SetPenColor("Blue");
    startx=index_devInfoX+11*index_devInfoX/10;
    starty=index_devInfoY+4.25*MyWindowHeight/10;
    drawMyRectangle(startx + 0.33 * mazeSize, starty - 0.2 * mazeSize, 0.3 * mazeSize, 0.2 * mazeSize);
    drawMyRectangle(startx + 0.4 * mazeSize, starty - 0.4 * mazeSize, 0.2 * mazeSize, 0.35 * mazeSize);
    drawMyRectangle(startx + 0.32 * mazeSize, starty - 0.45 * mazeSize, 0.05 * mazeSize, 0.25 * mazeSize);
    drawMyRectangle(startx + 0.6 * mazeSize, starty - 0.45 * mazeSize, 0.05 * mazeSize, 0.25 * mazeSize);
    drawMyRectangle(startx + 0.43 * mazeSize, starty - 0.75 * mazeSize, 0.05 * mazeSize, 0.25 * mazeSize);
    drawMyRectangle(startx + 0.52 * mazeSize, starty - 0.75 * mazeSize, 0.05 * mazeSize, 0.25 * mazeSize);
    MovePen(startx + 0.43 * mazeSize, starty - 0.25 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
    MovePen(startx + 0.53 * mazeSize, starty - 0.25 * mazeSize);
    DrawLine(0, -0.1 * mazeSize);
	SetPenColor("Magenta");
    startx=index_devInfoX+13*index_devInfoX/10;
    starty=index_devInfoY+5.25*MyWindowHeight/10;
    MovePen(startx + 0.4 * mazeSize, starty - mazeSize);
    DrawLine(0, 0.7 * mazeSize);
    DrawLine(0.3 * mazeSize, -0.2 * mazeSize);
    DrawLine(-0.3 * mazeSize, -0.1 * mazeSize);


	MovePen(3 * index_devInfoX / 10, index_devInfoY + 7 * MyWindowHeight / 10);
	SetPenColor("Black");
	DrawTextString("      _    __  __    _     ________ _   _  ____   __   __    _     __________    _______  ______  _     ___  ____  _____ ____   ");
	MovePen(3 * index_devInfoX / 10, index_devInfoY + 7 * MyWindowHeight / 10 - 0.15);
	SetPenColor("Blue1");
	DrawTextString("     / \\  |  \\/  |  / \\   |__  /_ _| \\ | |/ ___|  |  \\/  |  / \\   |__  / ____|  | ____\\ \\/ /  _ \\| |   / _ \\|  _ \\| ____|  _ \\  ");
	MovePen(3 * index_devInfoX / 10, index_devInfoY + 7 * MyWindowHeight / 10 - 0.3);
	SetPenColor("Blue2");
	DrawTextString("    / _ \\ | |\\/| | / _ \\    / / | ||  \\| | |  _   | |\\/| | / _ \\    / /|  _|    |  _|  \\  /| |_) | |  | | | | |_) |  _| | |_) | ");
	MovePen(3 * index_devInfoX / 10, index_devInfoY + 7 * MyWindowHeight / 10 - 0.45);
	SetPenColor("Blue3");
	DrawTextString("   / ___ \\| |  | |/ ___ \\  / /_ | || |\\  | |_| |  | |  | |/ ___ \\  / /_| |___   | |___ /  \\|  __/| |__| |_| |  _ <| |___|  _ <  ");
	MovePen(3 * index_devInfoX / 10, index_devInfoY + 7 * MyWindowHeight / 10 - 0.6);
	SetPenColor("Blue");
	DrawTextString("  /_/   \\_\\_|  |_/_/   \\_\\/____|___|_| \\_|\\____|  |_|  |_/_/   \\_\\/____|_____|  |_____/_/\\_\\_|   |_____\\___/|_| \\_\\_____|_| \\_\\ ");

	SetFont("consolas");
	button(GenUIID(0), -0.1, -0.1, 0.1, 0.1, " ");
	if (button(GenUIID(0), index_startButtonX, index_startButtonY, index_ButtonWidth, index_ButtonHeight, "start"))
	{
		DisplayClear();
		pageFlag = 2;
		Display = displayEdit;
		editBlock = -1;
		return;
	}
	if (button(GenUIID(0), index_helpButtonX, index_helpButtonY, index_ButtonWidth, index_ButtonHeight, "help"))
	{
		system("start .\\help\\help.pdf");
	}
	if (button(GenUIID(0), index_exitButtonX, index_exitButtonY, index_ButtonWidth, index_ButtonHeight, "exit"))
	{
		exit(0);
	}
	MovePen(index_devInfoX, index_devInfoY);
	SetPenColor("Black");
	DrawTextString("Developed by Group 4 - LI Zheng, ZHENG Lan, YU Ketian.");
}

void drawEditButtons()
{
	// area texts
	SetPenColor("Red");
	SetPenSize(1);
	MovePen(edit_areaX + adjustSize, edit_areaY1 - adjustSize / 1.8);
	DrawTextString("OPERATING AREA");

	MovePen(edit_areaX + adjustSize * 1.1, edit_areaY2 - adjustSize / 1.8);
	DrawTextString("EDITING AREA");

	// hints
	if (editBlock != -1)
	{
		SetPenColor("Red");
		MovePen(index_devInfoX, index_devInfoY);
		DrawTextString("Selected:");
		MovePen(index_devInfoX + adjustSize * 1.5, index_devInfoY);
		switch (editBlock)
		{
		case 0:
			DrawTextString("road");
			break;
		case 1:
			DrawTextString("wall");
			break;
		case 2:
			DrawTextString("entrance");
			break;
		case 3:
			DrawTextString("exit");
			break;
		case 4:
			DrawTextString("key");
			break;
		case 5:
			DrawTextString("door");
			break;
		}
		SetPenColor("Black");
	}

	// operating area
	// open
	if (button(GenUIID(0), edit_areaX, edit_areaY1 - 2 * edit_buttonHeight, edit_buttonWidth, edit_buttonHeight, "open"))
	{
		editBlock = -1;
		openMap();
		Display();
		initMaze();
	}
	// save
	if (button(GenUIID(0), edit_areaX + edit_buttonWidth, edit_areaY1 - 2 * edit_buttonHeight, edit_buttonWidth, edit_buttonHeight, "save"))
	{
		editBlock = -1;
		saveMap();
		Display();
	}
	// random
	if (button(GenUIID(0), edit_areaX, edit_areaY1 - 3 * edit_buttonHeight, edit_buttonWidth, edit_buttonHeight, "random"))
	{
		editBlock = -1;
		createMaze();
		initMaze();
		Display();
	}
	// clear all
	if (button(GenUIID(0), edit_areaX + edit_buttonWidth, edit_areaY1 - 3 * edit_buttonHeight, edit_buttonWidth, edit_buttonHeight, "clear all"))
	{
		editBlock = -1;
		for (int i = 0; i < mazeCountX; i++)
		{
			for (int j = 0; j < mazeCountY; j++)
			{
				mazeMap[i][j] = 0;
			}
		}
		Display();
	}

	// editing area
	// road
	if (button(GenUIID(0), edit_areaX, edit_areaY2 - 2 * edit_buttonHeight, edit_buttonWidth, edit_buttonHeight, "road"))
	{
		editBlock = 0;
		Display();
	}
	// wall
	if (button(GenUIID(0), edit_areaX + edit_buttonWidth, edit_areaY2 - 2 * edit_buttonHeight, edit_buttonWidth, edit_buttonHeight, "wall"))
	{
		editBlock = 1;
		Display();
	}
	// entrance
	if (button(GenUIID(0), edit_areaX, edit_areaY2 - 3 * edit_buttonHeight, edit_buttonWidth, edit_buttonHeight, "entrance"))
	{
		editBlock = 2;
		Display();
	}
	// key
	if (button(GenUIID(0), edit_areaX + edit_buttonWidth, edit_areaY2 - 3 * edit_buttonHeight, edit_buttonWidth, edit_buttonHeight, "key"))
	{
		editBlock = 4;
		Display();
	}
	// exit
	if (button(GenUIID(0), edit_areaX, edit_areaY2 - 4 * edit_buttonHeight, edit_buttonWidth, edit_buttonHeight, "exit"))
	{
		editBlock = 3;
		Display();
	}
	// door
	if (button(GenUIID(0), edit_areaX + edit_buttonWidth, edit_areaY2 - 4 * edit_buttonHeight, edit_buttonWidth, edit_buttonHeight, "door"))
	{
		editBlock = 5;
		Display();
	}

	// finish editing
	if (button(GenUIID(0), edit_areaX, edit_areaY3 - edit_buttonHeight, edit_areaWidth, edit_buttonHeight, "finish editing"))
	{
		editBlock = -1;
		if (judgeMaze() == 1)
		{
			DisplayClear();
			pageFlag = 3;
			getKey = 0;
			Display = displayGame;
			initMaze();
			return;
		}
	}

	// areas
	SetPenColor("Black");
	SetPenSize(2);
	drawMyRectangle(edit_areaX, edit_areaY1, edit_areaWidth, edit_areaHeight1);
	drawMyRectangle(edit_areaX, edit_areaY1, edit_areaWidth, edit_areaHeight3);
	drawMyRectangle(edit_areaX, edit_areaY2, edit_areaWidth, edit_areaHeight2);
	drawMyRectangle(edit_areaX, edit_areaY2, edit_areaWidth, edit_areaHeight3);
	drawMyRectangle(edit_areaX, edit_areaY3, edit_areaWidth, edit_areaHeight3);
	drawMyRectangle(edit_areaX, edit_areaY1, edit_areaWidth, edit_areaHeight4);
	SetPenSize(1);
}

void drawGameButtons()
{
	SetPenColor("Black");
	SetPenSize(1);
	if (gameOver == 0)
	{
		SetPenColor("Blue");
		MovePen(game_areaX + adjustSize * 0.5, game_areaY1 - adjustSize * 1.3);
		DrawTextString("USE KEYBOARD TO MOVE.");
		SetPenColor("Black");
	}
	else
	{
		SetPenColor("Red");
		MovePen(game_areaX + adjustSize * 0.3, game_areaY1 - adjustSize * 1.3);
		DrawTextString("CONGRATULATIONS! YOU WIN!");
		SetPenColor("Black");
	}

	if (getKey == 0)
	{
		SetPenColor("Red");
		MovePen(game_areaX + adjustSize * 0.5, game_areaY1 - adjustSize * 2);
		DrawTextString("PLEASE GET A KEY FIRST");
		SetPenColor("Black");
	}
	else if (getKey == 1 && openDoor == 0)
	{
		SetPenColor("Red");
		MovePen(game_areaX + adjustSize, game_areaY1 - adjustSize * 2);
		DrawTextString("FIND THE DOOR !");
		SetPenColor("Black");
	}
	else if (getKey == 1 && openDoor == 1 && gameOver == 0)
	{
		SetPenColor("Red");
		MovePen(game_areaX + adjustSize, game_areaY1 - adjustSize * 2);
		DrawTextString("FIND THE EXIT !");
		SetPenColor("Black");
	}

	MovePen(game_areaX + adjustSize * 1.7, game_areaY2 - adjustSize / 1.8);
	DrawTextString("HINTS");

	// hints
	// auto solve
	if (button(GenUIID(0), game_areaX, game_areaY2 - 2 * game_buttonHeight, game_buttonWidth, game_buttonHeight, "auto solve"))
	{
		autoSolve = 1;
		if (getKey == 0)
		{
			if (findPath(currentX, currentY, keyX, keyY) == 1)
				printPath(currentX, currentY, keyX, keyY);
		}
		else if (getKey == 1 && openDoor == 0)
		{
			if (findPath(currentX, currentY, doorX, doorY) == 1)
				printPath(currentX, currentY, doorX, doorY);
		}
		else if (openDoor == 1)
		{
			if (findPath(currentX, currentY, exitX, exitY) == 1)
				printPath(currentX, currentY, exitX, exitY);
		}
	}
	// next step
	if (button(GenUIID(0), game_areaX, game_areaY2 - 3 * game_buttonHeight, game_buttonWidth, game_buttonHeight, "next step"))
	{
		autoSolve = 2;
		if (getKey == 0)
		{
			if (findPath(currentX, currentY, keyX, keyY) == 1)
				printNextStep(currentX, currentY, keyX, keyY);
		}
		else if (getKey == 1 && openDoor == 0)
		{
			if (findPath(currentX, currentY, doorX, doorY) == 1)
				printNextStep(currentX, currentY, doorX, doorY);
		}
		else if (openDoor == 1)
		{
			if (findPath(currentX, currentY, exitX, exitY) == 1)
				printNextStep(currentX, currentY, exitX, exitY);
		}
		Display();
	}
	// all roads
	if (button(GenUIID(0), game_areaX, game_areaY2 - 4 * game_buttonHeight, game_buttonWidth, game_buttonHeight, "all roads"))
	{
		autoSolve = 3;
		if (getKey == 0)
		{
			if (findPath(currentX, currentY, keyX, keyY) == 1)
				printPath(currentX, currentY, keyX, keyY);
			if (findPath(keyX, keyY, doorX, doorY) == 1)
				printPath(keyX, keyY, doorX, doorY);
			if (findPath(doorX, doorY, exitX, exitY) == 1)
				printPath(doorX, doorY, exitX, exitY);
		}
		else if (getKey == 1 && openDoor == 0)
		{
			if (findPath(currentX, currentY, doorX, doorY) == 1)
				printPath(currentX, currentY, doorX, doorY);
			if (findPath(doorX, doorY, exitX, exitY) == 1)
				printPath(doorX, doorY, exitX, exitY);
		}
		else if (openDoor == 1)
		{
			if (findPath(currentX, currentY, exitX, exitY) == 1)
				printPath(currentX, currentY, exitX, exitY);
		}
		autoSolve = 0;
	}

	// exit this game
	if (button(GenUIID(0), edit_areaX, edit_areaY3 - edit_buttonHeight, edit_areaWidth, edit_buttonHeight, "exit this game"))
	{
		DisplayClear();
		pageFlag = 1;
		Display = displayIndex;
		for (int i = 0; i < mazeCountX; i++)
		{
			for (int j = 0; j < mazeCountY; j++)
			{
				mazeMap[i][j] = 0;
			}
		}
		return;
	}

	// areas
	SetPenColor("Black");
	SetPenSize(2);
	drawMyRectangle(game_areaX, game_areaY1, game_areaWidth, game_areaHeight1);
	drawMyRectangle(game_areaX, game_areaY2, game_areaWidth, game_areaHeight2);
	drawMyRectangle(game_areaX, game_areaY2, game_areaWidth, game_areaHeight3);
	drawMyRectangle(game_areaX, game_areaY3, game_areaWidth, game_areaHeight3);
	drawMyRectangle(game_areaX, game_areaY1, game_areaWidth, game_areaHeight4);
	SetPenSize(1);
}

void drawMazeOutline()
{
	MovePen(mazeX, mazeY);
	SetPenColor("Black");
	SetPenSize(2);
	DrawLine(0.0, -mazeOutlineHeight);
	DrawLine(mazeOutlineWidth, 0.0);
	DrawLine(0.0, mazeOutlineHeight);
	DrawLine(-mazeOutlineWidth, 0.0);
	SetPenSize(1);
}

void drawMyRectangle(double x, double y, double w, double h)
{
	MovePen(x, y);
	DrawLine(0, -h);
	DrawLine(w, 0);
	DrawLine(0, h);
	DrawLine(-w, 0);
}

void drawDashedLine(int startx, int starty)
{
	double len = mazeSize / 8.0;
	int k;
	for (k = 0; k <= 6; k += 2)
	{
		MovePen(startx, starty - k * len);
		DrawLine(0, -len);
		MovePen(startx + mazeSize, starty - k * len);
		DrawLine(0, -len);
		MovePen(startx + k * len, starty);
		DrawLine(len, 0);
		MovePen(startx + k * len, starty - mazeSize);
		DrawLine(len, 0);
	}
}


void drawMazeMap()
{
	/********
	0 - road
	1 - wall
	2 - start
	3 - end
	4 - key
	5 - door
	6 - hint
	7 - current
	********/
	SetPenColor("Black");
	int i, j;
	for (i = 0; i < 12; i++)
	{
		for (j = 0; j < 14; j++)
		{
			double startx = mazeX + j * mazeSize;
			double starty = mazeY - i * mazeSize;
			if (mazeMap[i][j] == 0) // road
			{
				double len = mazeSize / 8.0;
				int k;
				for (k = 0; k <= 6; k += 2)
				{
					MovePen(startx, starty - k * len);
					DrawLine(0, -len);
					MovePen(startx + mazeSize, starty - k * len);
					DrawLine(0, -len);
					MovePen(startx + k * len, starty);
					DrawLine(len, 0);
					MovePen(startx + k * len, starty - mazeSize);
					DrawLine(len, 0);
				}
			}
			else if (mazeMap[i][j] == 1) // wall
			{
				double len = mazeSize / 8.0;
				// outline
				MovePen(startx, starty);
				DrawLine(0, -mazeSize);
				DrawLine(mazeSize, 0);
				DrawLine(0, mazeSize);
				DrawLine(-mazeSize, 0);
				// inside
				int k;
				for (k = 1; k <= 8; k++)
				{
					MovePen(startx + k * len, starty);
					DrawLine(-k * len, -k * len);
				}
				for (k = 1; k <= 8; k++)
				{
					MovePen(startx + mazeSize - k * len, starty - mazeSize);
					DrawLine(k * len, k * len);
				}
			}
			else if (mazeMap[i][j] == 2) // start
			{
				SetPenColor("Magenta");
				SetPenSize(2);
				MovePen(startx + 0.4 * mazeSize, starty - mazeSize);
				DrawLine(0, 0.7 * mazeSize);
				DrawLine(0.3 * mazeSize, -0.2 * mazeSize);
				DrawLine(-0.3 * mazeSize, -0.1 * mazeSize);

				SetPenColor("Black");
				SetPenSize(1);
				double len = mazeSize / 8.0;
				int k;
				for (k = 0; k <= 6; k += 2)
				{
					MovePen(startx, starty - k * len);
					DrawLine(0, -len);
					MovePen(startx + mazeSize, starty - k * len);
					DrawLine(0, -len);
					MovePen(startx + k * len, starty);
					DrawLine(len, 0);
					MovePen(startx + k * len, starty - mazeSize);
					DrawLine(len, 0);
				}
			}
			else if (mazeMap[i][j] == 3) // exit
			{

				MovePen(startx + 0.25 * mazeSize, starty - 0.25 * mazeSize);
				SetPenSize(3);
				DrawLine(0, -0.72 * mazeSize);
				MovePen(startx + 0.22 * mazeSize, starty - 0.25 * mazeSize);
				SetPenSize(2);
				DrawLine(0.5 * mazeSize, 0);
				DrawLine(0, -0.375 * mazeSize);
				DrawLine(-0.5 * mazeSize, 0);
				MovePen(startx + 0.385 * mazeSize, starty - 0.27 * mazeSize);
				SetPenSize(2);
				DrawLine(0, -0.125 * mazeSize);
				MovePen(startx + 0.425 * mazeSize, starty - 0.27 * mazeSize);
				DrawLine(0, -0.125 * mazeSize);
				MovePen(startx + 0.465 * mazeSize, starty - 0.27 * mazeSize);
				DrawLine(0, -0.125 * mazeSize);
				MovePen(startx + 0.625 * mazeSize, starty - 0.27 * mazeSize);
				DrawLine(0, -0.125 * mazeSize);
				MovePen(startx + 0.645 * mazeSize, starty - 0.27 * mazeSize);
				DrawLine(0, -0.125 * mazeSize);
				MovePen(startx + 0.675 * mazeSize, starty - 0.27 * mazeSize);
				DrawLine(0, -0.125 * mazeSize);

				MovePen(startx + 0.385 * mazeSize, starty - 0.5 * mazeSize);
				DrawLine(0, -0.125 * mazeSize);
				MovePen(startx + 0.425 * mazeSize, starty - 0.5 * mazeSize);
				DrawLine(0, -0.125 * mazeSize);
				MovePen(startx + 0.465 * mazeSize, starty - 0.5 * mazeSize);
				DrawLine(0, -0.125 * mazeSize);
				MovePen(startx + 0.625 * mazeSize, starty - 0.5 * mazeSize);
				DrawLine(0, -0.125 * mazeSize);
				MovePen(startx + 0.645 * mazeSize, starty - 0.5 * mazeSize);
				DrawLine(0, -0.125 * mazeSize);
				MovePen(startx + 0.675 * mazeSize, starty - 0.5 * mazeSize);
				DrawLine(0, -0.125 * mazeSize);

				MovePen(startx + 0.26 * mazeSize, starty - 0.375 * mazeSize);
				SetPenSize(2);
				DrawLine(0, -0.125 * mazeSize);
				MovePen(startx + 0.30 * mazeSize, starty - 0.375 * mazeSize);
				DrawLine(0, -0.125 * mazeSize);
				MovePen(startx + 0.34 * mazeSize, starty - 0.375 * mazeSize);
				DrawLine(0, -0.125 * mazeSize);
				MovePen(startx + 0.5 * mazeSize, starty - 0.375 * mazeSize);
				DrawLine(0, -0.125 * mazeSize);
				MovePen(startx + 0.54 * mazeSize, starty - 0.375 * mazeSize);
				DrawLine(0, -0.125 * mazeSize);
				MovePen(startx + 0.58 * mazeSize, starty - 0.375 * mazeSize);
				DrawLine(0, -0.125 * mazeSize);

				SetPenColor("Black");
				SetPenSize(1);
				double len = mazeSize / 8.0;
				int k;
				for (k = 0; k <= 6; k += 2)
				{
					MovePen(startx, starty - k * len);
					DrawLine(0, -len);
					MovePen(startx + mazeSize, starty - k * len);
					DrawLine(0, -len);
					MovePen(startx + k * len, starty);
					DrawLine(len, 0);
					MovePen(startx + k * len, starty - mazeSize);
					DrawLine(len, 0);
				}
			}
			else if (mazeMap[i][j] == 4) // key
			{
				MovePen(startx + 0.3 * mazeSize, starty - 0.665 * mazeSize);
				SetPenColor("Orange");
				SetPenSize(2);
				DrawLine(0.2 * mazeSize, 0.2 * mazeSize);
				DrawLine(0.2 * mazeSize, -0.2 * mazeSize);
				DrawLine(-0.05 * mazeSize, -0.05 * mazeSize);
				DrawLine(0.17 * mazeSize, -0.17 * mazeSize);
				DrawLine(0, -0.12 * mazeSize);
				MovePen(startx + 0.3 * mazeSize, starty - 0.665 * mazeSize);
				DrawLine(0.2 * mazeSize, -0.2 * mazeSize);
				DrawLine(0.06 * mazeSize, 0.06 * mazeSize);
				DrawLine(0.08 * mazeSize, -0.08 * mazeSize);
				DrawLine(0.05 * mazeSize, 0);
				DrawLine(0, -0.05 * mazeSize);
				DrawLine(0.05 * mazeSize, 0);
				DrawLine(0, -0.05 * mazeSize);
				DrawLine(0.09 * mazeSize, 0);
				MovePen(startx + 0.45 * mazeSize, starty - 0.65 * mazeSize); // kong
				DrawLine(0.08 * mazeSize, -0.08 * mazeSize);
				DrawLine(0.04 * mazeSize, 0.04 * mazeSize);
				DrawLine(-0.06 * mazeSize, 0.06 * mazeSize);
				DrawLine(-0.03 * mazeSize, -0.03 * mazeSize);

				SetPenColor("Black");
				SetPenSize(1);
				double len = mazeSize / 8.0;
				int k;
				for (k = 0; k <= 6; k += 2)
				{
					MovePen(startx, starty - k * len);
					DrawLine(0, -len);
					MovePen(startx + mazeSize, starty - k * len);
					DrawLine(0, -len);
					MovePen(startx + k * len, starty);
					DrawLine(len, 0);
					MovePen(startx + k * len, starty - mazeSize);
					DrawLine(len, 0);
				}
			}
			else if (mazeMap[i][j] == 5) // door
			{
				SetPenSize(2);
				if (getKey == 0)
				{
					SetPenColor("Red");
					MovePen(startx + 0.3 * mazeSize, starty - mazeSize);
					DrawLine(0, 0.7 * mazeSize);
					DrawLine(0.4 * mazeSize, 0);
					DrawLine(0, -0.7 * mazeSize);
					DrawLine(-0.4 * mazeSize, 0);
					MovePen(startx + 0.6 * mazeSize, starty - 0.6 * mazeSize);
					DrawLine(0, -0.1 * mazeSize);
				}
				else if (getKey == 1)
				{
					SetPenColor("Yellow1");
					MovePen(startx + 0.3 * mazeSize, starty - mazeSize);
					DrawLine(0, 0.7 * mazeSize);
					DrawLine(0.3 * mazeSize, 0.1 * mazeSize);
					DrawLine(0, -0.8 * mazeSize);
					MovePen(startx + 0.5 * mazeSize, starty - 0.55 * mazeSize);
					DrawLine(0, -0.1 * mazeSize);
					MovePen(startx + 0.6 * mazeSize, starty - 0.3 * mazeSize);
					DrawLine(0.1 * mazeSize, 0);
					DrawLine(0, -0.7 * mazeSize);
					DrawLine(-0.4 * mazeSize, 0);
				}

				SetPenColor("Black");
				SetPenSize(1);
				double len = mazeSize / 8.0;
				int k;
				for (k = 0; k <= 6; k += 2)
				{
					MovePen(startx, starty - k * len);
					DrawLine(0, -len);
					MovePen(startx + mazeSize, starty - k * len);
					DrawLine(0, -len);
					MovePen(startx + k * len, starty);
					DrawLine(len, 0);
					MovePen(startx + k * len, starty - mazeSize);
					DrawLine(len, 0);
				}
			}
			else if (mazeMap[i][j] == 6) // hint
			{
				SetPenColor("Green");
				SetPenSize(2);
				MovePen(startx + 0.45 * mazeSize, starty - 0.35 * mazeSize);
				DrawLine(0.1 * mazeSize, 0);
				DrawLine(0.05 * mazeSize, -0.05 * mazeSize);
				DrawLine(0, -0.1 * mazeSize);
				DrawLine(-0.05 * mazeSize, -0.05 * mazeSize);
				DrawLine(-0.1 * mazeSize, 0);
				DrawLine(-0.05 * mazeSize, 0.05 * mazeSize);
				DrawLine(0, 0.1 * mazeSize);
				DrawLine(0.05 * mazeSize, 0.05 * mazeSize);
				MovePen(startx + 0.53 * mazeSize, starty - 0.4 * mazeSize);
				DrawLine(0, -0.1 * mazeSize);
				
				SetPenColor("Black");
				SetPenSize(1);
				double len = mazeSize / 8.0;
				int k;
				for (k = 0; k <= 6; k += 2)
				{
					MovePen(startx, starty - k * len);
					DrawLine(0, -len);
					MovePen(startx + mazeSize, starty - k * len);
					DrawLine(0, -len);
					MovePen(startx + k * len, starty);
					DrawLine(len, 0);
					MovePen(startx + k * len, starty - mazeSize);
					DrawLine(len, 0);
				}
			}
			else if (mazeMap[i][j] == 7) // current
			{
				SetPenColor("Blue");
				SetPenSize(2);
				drawMyRectangle(startx + 0.33 * mazeSize, starty - 0.2 * mazeSize, 0.3 * mazeSize, 0.2 * mazeSize);
				drawMyRectangle(startx + 0.4 * mazeSize, starty - 0.4 * mazeSize, 0.2 * mazeSize, 0.35 * mazeSize);
				drawMyRectangle(startx + 0.32 * mazeSize, starty - 0.45 * mazeSize, 0.05 * mazeSize, 0.25 * mazeSize);
				drawMyRectangle(startx + 0.6 * mazeSize, starty - 0.45 * mazeSize, 0.05 * mazeSize, 0.25 * mazeSize);
				drawMyRectangle(startx + 0.43 * mazeSize, starty - 0.75 * mazeSize, 0.05 * mazeSize, 0.25 * mazeSize);
				drawMyRectangle(startx + 0.52 * mazeSize, starty - 0.75 * mazeSize, 0.05 * mazeSize, 0.25 * mazeSize);
				MovePen(startx + 0.43 * mazeSize, starty - 0.25 * mazeSize);
				DrawLine(0, -0.1 * mazeSize);
				MovePen(startx + 0.53 * mazeSize, starty - 0.25 * mazeSize);
				DrawLine(0, -0.1 * mazeSize);

				SetPenColor("Black");
				SetPenSize(1);
				double len = mazeSize / 8.0;
				int k;
				for (k = 0; k <= 6; k += 2)
				{
					MovePen(startx, starty - k * len);
					DrawLine(0, -len);
					MovePen(startx + mazeSize, starty - k * len);
					DrawLine(0, -len);
					MovePen(startx + k * len, starty);
					DrawLine(len, 0);
					MovePen(startx + k * len, starty - mazeSize);
					DrawLine(len, 0);
				}
			}
		}
	}
}

/**** Event Process ****/

void KeyboardEventProcess(int key, int event)
{
	uiGetKeyboard(key, event);
	if (event == KEY_DOWN && pageFlag == 3 && gameOver == 0)
	{
		if (key == VK_LEFT)
		{
			if (currentY > 0)
			{
				if (mazeMap[currentX][currentY - 1] == 4)
					getKey = 1;
				if (mazeMap[currentX][currentY - 1] == 3)
					gameOver = 1;
				if (mazeMap[currentX][currentY - 1] == 5 && getKey == 1)
					openDoor = 1;
				if ((mazeMap[currentX][currentY - 1] != 1 && mazeMap[currentX][currentY - 1] != 5) || (mazeMap[currentX][currentY - 1] == 5 && getKey == 1))
				{
					mazeMap[currentX][currentY] = 0;
					currentY--;
					mazeMap[currentX][currentY] = 7;
				}
			}
			if(gameOver == 1)
			{
				int result = MessageBox(NULL, "Congratulations! You win!", "Congratulations", MB_OK | MB_ICONINFORMATION);
					if (result == IDOK)
						Display = displayIndex;
			}
		}
		if (key == VK_RIGHT)
		{
			if (currentY + 1 < mazeCountY)
			{
				if (mazeMap[currentX][currentY + 1] == 4)
					getKey = 1;
				if (mazeMap[currentX][currentY + 1] == 3)
					gameOver = 1;
				if (mazeMap[currentX][currentY + 1] == 5 && getKey == 1)
					openDoor = 1;
				if ((mazeMap[currentX][currentY + 1] != 1 && mazeMap[currentX][currentY + 1] != 5) || (mazeMap[currentX][currentY + 1] == 5 && getKey == 1))
				{
					mazeMap[currentX][currentY] = 0;
					currentY++;
					mazeMap[currentX][currentY] = 7;
				}
			}
			if(gameOver == 1)
			{
				int result = MessageBox(NULL, "Congratulations! You win!", "Congratulations", MB_OK | MB_ICONINFORMATION);
					if (result == IDOK)
						Display = displayIndex;
			}
		}
		if (key == VK_UP)
		{
			if (currentX > 0)
			{
				if (mazeMap[currentX - 1][currentY] == 4)
					getKey = 1;
				if (mazeMap[currentX - 1][currentY] == 3)
					gameOver = 1;
				if (mazeMap[currentX - 1][currentY] == 5 && getKey == 1)
					openDoor = 1;
				if ((mazeMap[currentX - 1][currentY] != 1 && mazeMap[currentX - 1][currentY] != 5) || (mazeMap[currentX - 1][currentY] == 5 && getKey == 1))
				{
					mazeMap[currentX][currentY] = 0;
					currentX--;
					mazeMap[currentX][currentY] = 7;
				}
			}
			if(gameOver == 1)
			{
				int result = MessageBox(NULL, "Congratulations! You win!", "Congratulations", MB_OK | MB_ICONINFORMATION);
					if (result == IDOK)
						Display = displayIndex;
			}
		}
		if (key == VK_DOWN)
		{
			if (currentX + 1 < mazeCountX)
			{
				if (mazeMap[currentX + 1][currentY] == 4)
					getKey = 1;
				if (mazeMap[currentX + 1][currentY] == 3)
					gameOver = 1;
				if (mazeMap[currentX + 1][currentY] == 5 && getKey == 1)
					openDoor = 1;
				if ((mazeMap[currentX + 1][currentY] != 1 && mazeMap[currentX + 1][currentY] != 5) || (mazeMap[currentX + 1][currentY] == 5 && getKey == 1))
				{
					mazeMap[currentX][currentY] = 0;
					currentX++;
					mazeMap[currentX][currentY] = 7;
				}
			}
			if(gameOver == 1)
			{
				int result = MessageBox(NULL, "Congratulations! You win!", "Congratulations", MB_OK | MB_ICONINFORMATION);
					if (result == IDOK)
						Display = displayIndex;
			}
		}

		if (autoSolve == 1)
		{
			if (getKey == 0)
			{
				if (findPath(currentX, currentY, keyX, keyY) == 1)
					printPath(currentX, currentY, keyX, keyY);
			}
			else if (getKey == 1 && openDoor == 0)
			{
				if (findPath(currentX, currentY, doorX, doorY) == 1)
					printPath(currentX, currentY, doorX, doorY);
			}
			else if (openDoor == 1)
			{
				if (findPath(currentX, currentY, exitX, exitY) == 1)
					printPath(currentX, currentY, exitX, exitY);
			}
		}
		else if (autoSolve == 2)
		{
			if (getKey == 0)
			{
				if (findPath(currentX, currentY, keyX, keyY) == 1)
					printNextStep(currentX, currentY, keyX, keyY);
			}
			else if (getKey == 1 && openDoor == 0)
			{
				if (findPath(currentX, currentY, doorX, doorY) == 1)
					printNextStep(currentX, currentY, doorX, doorY);
			}
			else if (openDoor == 1)
			{
				if (findPath(currentX, currentY, exitX, exitY) == 1)
					printNextStep(currentX, currentY, exitX, exitY);
			}
		}
		else if (autoSolve == 0)
		{
			for (int i = 0; i < mazeCountX; i++)
			{
				for (int j = 0; j < mazeCountY; j++)
				{
					if (mazeMap[i][j] == 6)
					{
						mazeMap[i][j] = 0;
					}
				}
			}
		}
		updateMaze();
	}

	Display();
}

void MouseEventProcess(int x, int y, int button, int event)
{
	uiGetMouse(x, y, button, event);
	if (event == BUTTON_DOWN)
	{
		int blockX, blockY;
		blockY = (ScaleXInches(x) * 1.0 - mazeX) / mazeSize;
		blockX = (mazeY - ScaleYInches(y) * 1.0) / mazeSize;
		if (editBlock >= 0 && blockX >= 0 && blockX < mazeCountX && blockY >= 0 && blockY < mazeCountY)
			mazeMap[blockX][blockY] = editBlock;
	}
	updateMaze();
	Display();
}
~~~

# display.h
~~~c
#ifndef _H_DISPLAY
#define _H_DISPLAY

void DisplayClear(void);
void drawMyRectangle(double x, double y, double w, double h);

void (*Display)(void);
void displayIndex(void);
void displayEdit(void);
void displayGame(void);

void uiGetKeyboard(int key, int event);
void KeyboardEventProcess(int key, int event);
void MouseEventProcess(int x, int y, int button, int event);

void drawIndexButtons();
void drawEditButtons();
void drawGameButtons();

void drawMazeOutline();
void drawMazeMap();


#endif
~~~

# data.h
~~~c
#ifndef _H_DATA
#define _H_DATA

#define mazeCountX 12
#define mazeCountY 14

#define MyWindowWidth 12.0
#define MyWindowHeight 7.0

// maze
#define mazeX 1.0
#define mazeY 6.5
#define mazeOutlineHeight 6.0
#define mazeOutlineWidth 7.0
#define mazeSize 0.5

// index
#define index_ButtonWidth 1.5
#define index_ButtonHeight 0.5
#define index_startButtonX 2.5
#define index_startButtonY 1.5
#define index_helpButtonX 4.85
#define index_helpButtonY 1.5
#define index_exitButtonX 7.2
#define index_exitButtonY 1.5
#define index_devInfoX 4.0
#define index_devInfoY 0.2

// edit
#define edit_areaX 9.0
#define edit_areaY1 6.0
#define edit_areaY2 4.0
#define edit_areaY3 1.5
#define adjustSize 0.5

#define edit_areaWidth 2.0
#define edit_areaHeight1 1.5
#define edit_areaHeight2 2.0
#define edit_areaHeight3 0.5
#define edit_areaHeight4 5.0

#define edit_buttonWidth 1.0
#define edit_buttonHeight 0.5

// game
#define game_areaX 9.0
#define game_areaY1 6.0
#define game_areaY2 4.0
#define game_areaY3 1.5

#define game_areaWidth 2.0
#define game_areaHeight1 1.5
#define game_areaHeight2 2.0
#define game_areaHeight3 0.5
#define game_areaHeight4 5.0

#define game_buttonWidth 2.0
#define game_buttonHeight 0.5

typedef enum
{
	LEFT,
	RIGHT,
	UP,
	DOWN
} DIR;



struct Node {
    int x;
    int y;
    struct Node* next;
};

struct Queue {
    struct Node* front;
    struct Node* rear;
};

int mazeMap[mazeCountX][mazeCountY];
int path[mazeCountX][mazeCountY];

// positions
int startX;
int startY;

int currentX;
int currentY;

int doorX;
int doorY;

int keyX;
int keyY;

int exitX;
int exitY;

int pageFlag;
// pageFlag:
// 1 - Index
// 2 - Edit
// 3 - Game

int getKey;
int openDoor;
int gameOver;

int autoSolve;
// 0 - no auto solve
// 1 - auto solve all
// 2 - auto solve next

int editBlock;

#endif
~~~


~~~c

 /*迷宫游戏 */
/*
vc++ 6.0 编译成功
本程序参照网上一个特殊算法随机生成迷宫
该算法优点：
效率高，从入口到出口只有唯一路径，入口出口自己设定，迷宫大小自己设定 
该算法缺点：
宽度高度都必须为奇数，只能生成n*m矩阵迷宫
*/
#include <stdio.h>
#include <conio.h>
#include <windows.h>
#include <time.h>
#define Height 25 //迷宫的高度，必须为奇数
#define Width 25 //迷宫的宽度，必须为奇数
#define Wall 1
#define Road 0
#define Start 2
#define End 3
#define Esc 5
#define Up 1
#define Down 2
#define Left 3
#define Right 4
int map[Height+2][Width+2];
void gotoxy(int x,int y) //移动坐标
{
	COORD coord;
	coord.X=x;
	coord.Y=y;
	SetConsoleCursorPosition( GetStdHandle( STD_OUTPUT_HANDLE ), coord );
}
void hidden()//隐藏光标
{
	HANDLE hOut = GetStdHandle(STD_OUTPUT_HANDLE);
	CONSOLE_CURSOR_INFO cci;
	GetConsoleCursorInfo(hOut,&cci);
	cci.bVisible=0;//赋1为显示，赋0为隐藏
	SetConsoleCursorInfo(hOut,&cci);
}
void create(int x,int y) //随机生成迷宫
{
	int c[4][2]={0,1,1,0,0,-1,-1,0}; //四个方向
	int i,j,t;
		//将方向打乱
	for(i=0;i<4;i++)
	{
		j=rand()%4;
		t=c[i][0];c[i][0]=c[j][0];c[j][0]=t;
		t=c[i][1];c[i][1]=c[j][1];c[j][1]=t;
	}
	map[x][y]=Road;
	for(i=0;i<4;i++)
	if(map[x+2*c[i][0]][y+2*c[i][1]]==Wall)
	{
		map[x+c[i][0]][y+c[i][1]]=Road;
		create(x+2*c[i][0],y+2*c[i][1]);
	}
}
int get_key() //接收按键
{
	char c;
	while(c=getch())
	{
		if(c==27) return Esc; //Esc
		if(c!=-32)continue;
		c=getch();
		if(c==72) return Up; //上
		if(c==80) return Down; //下
		if(c==75) return Left; //左
		if(c==77) return Right; //右
	}
	return 0;
}
void paint(int x,int y) //画迷宫
{
	gotoxy(2*y-2,x-1);
	switch(map[x][y])
	{
		case Start:
		printf("入");break; //画入口
		case End:
		printf("出");break; //画出口
		case Wall:
		printf("▇");break; //画墙
		case Road:
		printf(" ");break; //画路
	}
}
void game()
{
	int x=2,y=1; //玩家当前位置，刚开始在入口处
	int c; //用来接收按键
	while(1)
	{
		gotoxy(2*y-2,x-1);
		printf("●"); //画出玩家当前位置
		if(map[x][y]==End) //判断是否到达出口
		{
			gotoxy(30,24);
			printf("到达终点，按任意键结束");
			getch();
			break;
		}
		c=get_key();
		if(c==Esc)
		{
			gotoxy(0,24);
			break;
		}
		switch(c)
		{
				case Up: //向上走
				if(map[x-1][y]!=Wall)
				{
					paint(x,y);
					x--;
				}
			break;
			case Down: //向下走
			if(map[x+1][y]!=Wall)
			{
				paint(x,y);
				x++;
			}
			break;
			case Left: //向左走
			if(map[x][y-1]!=Wall)
			{
				paint(x,y);
				y--;
			}
			break;
			case Right: //向右走
			if(map[x][y+1]!=Wall)
			{
				paint(x,y);
				y++;
			}
			break;
		}
	}
}
int main()
{
	int i,j;
	srand((unsigned)time(NULL)); //初始化随即种子
	hidden(); //隐藏光标
	for(i=0;i<=Height+1;i++)
	for(j=0;j<=Width+1;j++)
	if(i==0||i==Height+1||j==0||j==Width+1) //初始化迷宫
	map[i][j]=Road;
	else map[i][j]=Wall;
	
	create(2*(rand()%(Height/2)+1),2*(rand()%(Width/2)+1)); //从随机一个点开始生成迷宫，该点行列都为偶数
	for(i=0;i<=Height+1;i++) //边界处理	
	{
		map[i][0]=Wall;
		map[i][Width+1]=Wall;
	}

	for(j=0;j<=Width+1;j++) //边界处理
	{
		map[0][j]=Wall;
		map[Height+1][j]=Wall;
	}
	map[2][1]=Start; //给定入口
	map[Height-1][Width]=End; //给定出口
	for(i=1;i<=Height;i++)
	for(j=1;j<=Width;j++) //画出迷宫
	paint(i,j);
	game(); //开始游戏
	getch();
	return 0;
}
~~~


~~~c

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <Windows.h>
// 枚举一些关键常量,可以根据迷宫的不同而修改
enum state
{
    start='P', end = '*', road = ' ', wall = '0', visited = '1', successPath = '#', currentPosition = '@'
}State;
//路径操作符枚举
enum operate {
    up = 'w', right = 'd', down = 's', left = 'a'
}Operate;
//保存路径
struct
{
    int len = 0;
    unsigned char arr[1000] = { 0 };
}Path;
//输入路径
void inputPath(unsigned char op)
{
    Path.arr[Path.len] = op;
    Path.len++;
}
//输出路径
void printPath()
{
    printf("\nPath:");
    while (Path.len > 0)
    {
        Path.len--;
        putchar(Path.arr[Path.len]);
    }
    printf("\n");
}
//判断是否在迷宫范围内以及是否可以走这一步
bool isLegal(int x,int y,int row,int col, unsigned char* p) 
{
    if (x >= 0 && y >= 0)
        if (x < row  && y < col)
            return (p[x * col + y ] ==road||p[x*col+y]==end);
    return false;
}
//输入迷宫图
//支持以矩阵形式输入,也可以输入一整行,自动处理换行符,直到读取到整个迷宫图为止
void inputMaze(unsigned char* p, int row, int col)
{
    unsigned char ch;
    printf("请输入迷宫图:\n");    
    for (int i = 0; i < row * col; i++)
    {
        if ((ch = getchar()) != '\n')
            p[i] = ch;
        else
            --i;
    }

}
//打印迷宫图
void printMaze(unsigned char* p, int row, int col) {
    printf("\n迷宫图如下:\n");
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
            printf("%c", p[i * col + j]);
        printf("\n");
    }

}
//走迷宫
//递归查询,这里由于递归是倒序输出路径,所以需要一个倒序操作
bool walkMaze(int row,int col, unsigned char* p,int x,int y)
{
    int pos =x * col + y;   //当前位置
    if (p[pos] == end)      //到达终点
        return true;
    if (isLegal(x - 1, y, row, col,p))  //上
    {
        //printMaze(p,row,col); //如果需要可以逐步输出迷宫图
        p[pos] = visited;   //设置访问标识,防止无限递归
        if (walkMaze(row, col, p, x - 1, y))    //该路径可行,输出操作符
        {
            inputPath(up);
            p[pos] = successPath;           //用于显示该路径
            return true;
        }
    }
    if (isLegal(x, y + 1, row, col, p)) //右
    {
        //printMaze(p,row,col);
        p[pos] = visited;
        if (walkMaze(row, col, p, x , y+1))
        {
            inputPath(right);
            p[pos] = successPath;
            return  true;
        }
    }
    if (isLegal(x + 1, y, row, col, p)) //下
    {
        //printMaze(p,row,col);
        p[pos] = visited;
        if (walkMaze(row, col, p, x +1, y))
        {
            inputPath(down);
            p[x * col + y] = successPath;
            return true;
        }
    }
    if (isLegal(x, y - 1, row, col, p)) //左
    {
        //printMaze(p,row,col);
        p[pos] = visited;
        if (walkMaze(row, col, p, x , y-1))
        {
            inputPath(left);
            p[pos] = successPath;
            return  true;
        }
    }
    p[pos] = visited;
    return false;   //无路可走,该条路径不行
}

//自动寻找起点,可以自行选择是否调用
void findStart(unsigned char* p,int row,int col,int* x,int* y)
{
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {
            if (p[i * col + j] == start)
            {
                *x = i;
                *y = j;
                return;
            }
        }
    }
}

int main()
{
    int row=21, col=21,x=15,y=0;    //行和列,起点坐标
    unsigned char* Maze =(unsigned char*)malloc(row*col);   //分配空间
    inputMaze(Maze, row, col );     //输入迷宫
    printMaze(Maze, row, col);      //打印迷宫
    walkMaze(row,col,Maze,x,y);     //走迷宫
    Maze[x * col + y] = start;      //矫正起点字符
    printMaze(Maze, row, col);      //打印迷宫
    printPath();                    //打印路径
    free(Maze);                     //释放空间
    system("pause");
    return 0;
}
~~~