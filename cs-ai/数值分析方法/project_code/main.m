rng(0);  %  随机数种子
% 1. 生成随机矩阵

% 生成一个10x10的随机矩阵
n=10;
randMat=rand(n,n);
% 生成一个10000x10000维度且密度为0.001的随机稀疏矩阵，并统计矩阵中非零元素数量
n=10000;
matDensity=0.001;
randSpMat=sprand(n,n,matDensity);
nonZeros = nnz(randSpMat);

% (3)利用库函数计算(1)和(2)中矩阵的特征值。
randMatEig=eig(randMat);
randMatEig
randSpMatEig=eigs(randSpMat);
randSpMatEig
% 2.给出Power Method的伪代码并用代码实现，能够输出绝对值最大的特征值。


% (1)利用Power Method计算题目1(1)中矩阵的绝对值最大的特征值。
powerMoldRandMat=PowerMethod(randMat);
powerMoldRandMat
% (2)利用Power Method计算题目1(2)中稀疏矩阵的绝对值最大的特征值。
powerMoldRandSpMat=PowerMethod(randSpMat);
powerMoldRandSpMat
 
% 3.给出Q算法的伪代码并用代码实现，并能够实现输出前k个绝对值最大的特征值，其中k为自定义参数。


% (1)利用QR算法计算题目1(1)中矩阵的前4个绝对值最大的特征值。
QRMoldRandMat=QRMethod(randMat,4);  
QRMoldRandMat
% (2)利用QR算法计算题目1(2)中稀疏矩阵的前5个绝对值最大的特征值。
n=100;
matDensity=0.01;
randSpLowMat=sprand(n,n,matDensity);
QRMoldRandSpMat=QRMethod(randSpLowMat,5);  
QRMoldRandSpMat


% 4.用代码实现Arnoldi迭代算法，并能够实现输出前k个绝对值最大的特征值，其中k为自定义参数。


% (1)利用Arnoldi迭代算法计算题目1(1)中矩阵的前6个绝对值最大的特征值。
arnoldiMoldRandMat=Arnoldi(randMat,6);
arnoldiMoldRandMat
% (2)利用Arnoldi迭代算法计算题目1(2)中稀疏矩阵的前7个绝对值最大的特征值。
arnoldiMoldRandSpMat=Arnoldi(randSpMat,7);
arnoldiMoldRandSpMat


