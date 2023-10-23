# HW3
## Problem1
![[Pasted image 20231015175421.png]]
*solution*
**a.**
Let's first write our system of equations in the form $Ax=b$：
$$\underbrace{\begin{bmatrix}1&2&3 \\ 2&3&4 \\ 3&4&6\end{bmatrix}}_{A}\underbrace{\begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix}}_x=\underbrace{\begin{bmatrix}1 \\ -1 \\ 2\end{bmatrix}}_b$$
Now,
$$A\tilde{x}-b={\begin{bmatrix}1&2&3 \\ 2&3&4 \\ 3&4&6\end{bmatrix}}{\begin{bmatrix}-0.2 \\ -7.5 \\ 5.4\end{bmatrix}}-{\begin{bmatrix}1 \\ -1 \\ 2\end{bmatrix}}={\begin{bmatrix}0 \\ -0.3 \\ -0.2\end{bmatrix}}$$
So
$$||A\tilde{x}-b||_{\infty}=max\{|0|,|-0.3|,|-0.2|\}=0.3$$

We also have:
$$||x-\tilde{x}||_{\infty}=\left\|{\begin{bmatrix}0 \\ -7 \\ 5\end{bmatrix}}-{\begin{bmatrix}-0.2 \\ -7.5 \\ 5.4\end{bmatrix}}\right\|_{\infty}=0.5$$
**a.**
Let's first write our system of equations in the form $Ax=b$：
$$\underbrace{\begin{bmatrix}1&2&3 \\ 2&3&4 \\ 3&4&6\end{bmatrix}}_{A}\underbrace{\begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix}}_x=\underbrace{\begin{bmatrix}1 \\ -1 \\ 2\end{bmatrix}}_b$$
Now,
$$A\tilde{x}-b={\begin{bmatrix}1&2&3 \\ 2&3&4 \\ 3&4&6\end{bmatrix}}{\begin{bmatrix}-0.33 \\ -7.9 \\ 5.8\end{bmatrix}}-{\begin{bmatrix}1 \\ -1 \\ 2\end{bmatrix}}={\begin{bmatrix}0.27 \\ -0.16 \\ 0.21\end{bmatrix}}$$
So
$$||A\tilde{x}-b||_{\infty}=max\{|0.27|,|-0.16|,|0.21|\}=0.27$$

We also have:
$$||x-\tilde{x}||_{\infty}=\left\|{\begin{bmatrix}0 \\ -7 \\ 5\end{bmatrix}}-{\begin{bmatrix}-0.33 \\ -7.9 \\ 5.8\end{bmatrix}}\right\|_{\infty}=0.9$$

## Problem2
*solution*
![[Pasted image 20231015175450.png]]
If $A$ is symmetric, so $A$ is a n $\times$ n matrix, and $A^T=A$
We also have that ${\left\|A\right\|_2}=[\rho(A^TA)]^{1/2}=[\rho(A^2)]^{1/2}$
Suppose $\lambda$ is the eigenvalue of $A$
so $\lambda^2$ is the eigenvalue of $A^2$
so,
$${\left\|A\right\|_2}=[\rho(A^TA)]^{1/2}$$


## Problem3
Implement the algorithm of Gaussian elimination with scaled partial pivoting, and solve the following linear systems.
![[Pasted image 20231015180046.png]]
*solution*
**a.**
The first pivot element, $a_{11}^{(1)}=0.03$
$m_{21}={{5.31}\over{0.03}}=177$
${\Longrightarrow}\left\{\begin{aligned}0.03x_1 +58.9x_2 & = & 59.2  \\-10431x_2 & = & 10431 \end{aligned}\right.$
${\Longrightarrow}\left\{\begin{aligned}x_1  & = & 10  \\x_2 & = & 1 \end{aligned}\right.$

**b.**
We have a coefficient matrix：
$$\begin{pmatrix}3.03&12.1&14&-119\\-3.03&12.1&-7&120\\6.11&-14.2&21&-139\end{pmatrix}$$
Performing $E_2+E_1->E_2$
$$\begin{pmatrix}3.03&12.1&14&-119\\0&0&7&1\\6.11&-14.2&21&-139\end{pmatrix}$$
Performing $E_1-2{\times}E_2->E_1,E_3-3{\times}E_2->E_3$
$$\begin{pmatrix}3.03&12.1&14&-121\\0&0&7&1\\6.11&-14.2&21&-142\end{pmatrix}$$

The first pivot element, $a_{11}^{(1)}=3.03$
$m_{31}={{6.11}\over{3.03}}=2$
Performing $E_3-m_{31}E_1$
${\Longrightarrow}\left\{\begin{aligned}3.03x_1 -12.1x_2 + 14x_3& = & -121  \\-28.2x_2-7x_3 & = & 282 \end{aligned}\right.$
$$x_1=0,x_2=10,x_3={1\over7}$$




## Problem4
Implement the Jacobi iterative method and list the first three iteration results when solving the following linear systems, using $X^{(0)}=0$
![[Pasted image 20231015180615.png]]
*solution*
**a.**
First, let's express $x_1$ ​ in the first equation, $x_2$​ in the second equation, $x_3$​ in the third equation:
$x_1=-{1\over4}x_2+{1\over4}x_3+{5\over4}$
$x_2={1\over3}x_1-{1\over3}x_3-{4\over3}$
$x_3=-{2\over5}x_1-{2\over5}x_2+{1\over5}$
We have that $x^{(0)}=0$ so set $x_1^{(0)}=x_2^{(0)}=x_3^{(0)}=0$ and the iterations follow the formula
$x_1^{(k)}=-{1\over4}x_2^{(k-1)}+{1\over4}x_3^{(k-1)}+{5\over4}$
$x_2^{(k)}={1\over3}x_1^{(k-1)}-{1\over3}x_3^{(k-1)}-{4\over3}$
$x_3^{(k)}=-{2\over5}x_1^{(k-1)}-{2\over5}x_2^{(k-1)}+{1\over5}$
For the first iteration set $k=1$ :
$x_1^{(1)}=-{1\over4}x_2^{(0)}+{1\over4}x_3^{(0)}+{5\over4}={5\over4}$
$x_2^{(1)}={1\over3}x_1^{(0)}-{1\over3}x_3^{(0)}-{4\over3}=-{4\over3}$
$x_3^{(1)}=-{2\over5}x_1^{(0)}-{2\over5}x_2^{(0)}+{1\over5}={1\over5}$
For the second iteration set $k=2$ :
$x_1^{(2)}=-{1\over4}x_2^{(1)}+{1\over4}x_3^{(1)}+{5\over4}={49\over30}$
$x_2^{(2)}={1\over3}x_1^{(1)}-{1\over3}x_3^{(1)}-{4\over3}=-{59\over60}$
$x_3^{(2)}=-{2\over5}x_1^{(1)}-{2\over5}x_2^{(1)}+{1\over5}={7\over30}$
For the third iteration set $k=3$ :
$x_1^{(3)}=-{1\over4}x_2^{(2)}+{1\over4}x_3^{(2)}+{5\over4}={373\over240}$
$x_2^{(3)}={1\over3}x_1^{(2)}-{1\over3}x_3^{(2)}-{4\over3}=-{13\over15}$
$x_3^{(3)}=-{2\over5}x_1^{(2)}-{2\over5}x_2^{(2)}+{1\over5}=-{3\over50}$

**b.**
First, let's express $x_1$ ​ in the first equation, $x_2$​ in the second equation, $x_3$​ in the third equation:
$x_1={1\over2}x_2+{1\over4}x_3-2$
$x_2={1\over2}x_1-{1\over4}x_3+2$
$x_3=-{1\over2}x_2$
We have that $x^{(0)}=0$ so set $x_1^{(0)}=x_2^{(0)}=x_3^{(0)}=0$ and the iterations follow the formula
$x_1^{(k)}=-{1\over2}x_2^{(k-1)}+{1\over4}x_3^{(k-1)}-2$
$x_2^{(k)}={1\over2}x_1^{(k-1)}-{1\over4}x_3^{(k-1)}+2$
$x_3^{(k)}=-{1\over2}x_2^{(k-1)}$
For the first iteration set $k=1$ :
$x_1^{(1)}=-{1\over2}x_2^{(0)}+{1\over4}x_3^{(0)}-2=-2$
$x_2^{(1)}={1\over2}x_1^{(0)}-{1\over4}x_3^{(0)}+2=2$
$x_3^{(1)}=-{1\over2}x_2^{(0)}=0$
For the second iteration set $k=2$ :
$x_1^{(2)}=-{1\over2}x_2^{(1)}+{1\over4}x_3^{(1)}-2=-1$
$x_2^{(2)}={1\over2}x_1^{(1)}-{1\over4}x_3^{(1)}+2=1$
$x_3^{(2)}=-{1\over2}x_2^{(1)}=-1$
For the third iteration set $k=3$ :
$x_1^{(3)}=-{1\over2}x_2^{(2)}+{1\over4}x_3^{(2)}-2=-{9\over4}$
$x_2^{(3)}={1\over2}x_1^{(2)}-{1\over4}x_3^{(2)}+2={7\over4}$
$x_3^{(3)}=-{1\over2}x_2^{(2)}=-{1\over2}$


## Problem5
Use the Jacobi method and Gauss-Seidel method to solove the following linear systems, with TOL = 0.001 in the $L_{\infty}$ norm.
![[Pasted image 20231015180914.png]]
*solution*
**a**

|  k  |    x_1^k    |    x_2^k     |    x_3^k    |
|:---:|:-----------:|:------------:|:-----------:|
|  1  | 0.333333333 | -0.166666667 | 0.500000000 |
|  2  | 0.111111111 | -0.222222222 | 0.619047619 |
|  3  | 0.052910053 | -0.232804233 | 0.648526077 |
|  4  | 0.039556563 | -0.235953641 | 0.655598747 |
|  5  | 0.036149204 | -0.236607518 | 0.657339277 |
|  6  | 0.035351068 | -0.236788627 | 0.657758954 |

**b.**

| k   | x_1^k        | x_2^k        | x_3^k        |
|:-----:|:--------------:|:--------------:|:--------------:|
| 1   | 0.900000000  | 0.790000000  | 0.758000000  |
| 2   | 0.979000000  | 0.949500000  | 0.789900000  |
| 3   | 0.994950000  | 0.957475000  | 0.791495000  |
| 4   | 0.995747500  | 0.957873750  | 0.791574750  |

**Reference Code**
~~~matlab
% Gauss-Seidel 
clear;
% 输入值
A = [3, -1, 1; 3,6, 2; 3, 3, 7];
b = [1; 0; 4];
tol = 1e-3;
N = 100;
x = [0; 0; 0];
x_backup = [0; 0; 0];   
y = [0; 0; 0];
%
A_ = A;
for i = 1 : length(A)
    A_(i,i) = 0;
end
disp('Gauss_Seidel Methods')
disp('---------------------------------------------------')
disp(' k       x_1^k          x_2^k          x_3^k        ')
disp('---------------------------------------------------')
formatSpec = '%2d    %.9f    %.9f    %.9f    \n';
for i = 0 : N
    
    for j = 1 : length(A)
        y(j,1) = (b(j) - A_(j,:) * x) / A(j,j);
        x_backup(j) = x(j);   % 备份“老值”
        x(j) = y(j);     % “新值” 替换 “老值”
        
    end
    fprintf(formatSpec,[i+1,y(1),y(2),y(3)]) % Printing output
    
    if (max(abs(x_backup - y)) < tol)
        fprintf('迭代次数: %d\n', i);
        fprintf('方程组的根: %10.8f\n', y);
        
        break;
    end
    
end
if i == N
    fprintf('迭代方法失败\n');
end
~~~
## Problem6
Prove: If $A$ is a matrix and $\rho_1,\rho_2,...,\rho_k$ are distinct eigenvalues of $A$ with associated eigenvectors $x_1,x_2,...,x_k$, then $\{x_1,x_2,...,x_k\}$ linearly independent set.
*solution*
Assume that these eigenvectors are linearly dependent, exist n constants that are not all zero($c_i$):
$$c_1x_1+c_2x_2+..+c_nx_n=0----(1)$$
Using the matrix $A$ left-multiplication, according to $Ax_i=\rho_ix_i$
$${c_1\rho_1x_1+c_2\rho_2x_2+...+c_n\rho_nx_n=0}----(2)$$
Using (2) subtract $\rho_n\times(1)$:
$$c_1(\rho_1-\rho_n)x_1+c_2(\rho_2-\rho_n)x_2+...+c_{n-1}(\rho_{n-1}-\rho_{n})x_{n-1}----(3)$$
Now make substitution $d_i->c_i(\rho_i-\rho_n)$
$$d_1x_1+d_2x_2+...+d_{n-1}x_{n-1}=0----(4)$$
Perform the same treatment to (4):
$$d_1(\rho_1-\rho_{n-1})x_1+d_2(\rho_2-\rho_{n-1})x_2+...+d_{n-2}(\rho_{n-2}-\rho_{n-1})x_{n-2}=0----(5)$$
Perform the same thing $n-2$ times:
$$m_1(\rho_1-\rho_2)x_1+m_2(\rho_2-\rho_3)x_2=0$$
Make substitution, $n_1=m_1(\rho_1-\rho_3),n_2=m_2(\rho_2-\rho_3)$
Perform the same thing last time:
$$n_1(\rho_1-\rho_2)x_1=0$$
So $n_1=0,m_1=0$
Itreate to the last
$$c_i=0 \\\ for\\\ i = 1,2,...,n$$
So if $A$ is a matrix and $\rho_1,\rho_2,...,\rho_k$ are distinct eigenvalues of $A$ with associated eigenvectors $x_1,x_2,...,x_k$, then $\{x_1,x_2,...,x_k\}$ linearly independent set.



## Problem7
Prove that a strictly diagonally dominant matrix is invertible.
*solution*
Suppose that $A$ isn't invertible, then we have that $det(A)=0$
So $AX=0$ have non-zero solution, let $X=(x_1,x_2,...,x_n)^T,|x_k|=max\{|x_i|\}$
Now we have that ${\sum_{j=1}^n}{a_{kj}}x_j=0$
Hence $|a_{kk}||x_k|=|\sum_{j{\neq}k}a_{kj}x_j|----(1)$
We have that $A$ a strictly diagonally dominant matrix
$|a_{kk}||x_k|\geq|x_k|\sum_{j{\neq}k}|a_{kj}|>\sum_{j{\neq}k}|a_{kj}||x_j|\geq|\sum_{j{\neq}k}a_{kj}x_j|----(2)$
Find the contradiction between (1) and (2) . Therefore, $A$ is reversible.