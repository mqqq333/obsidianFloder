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

## Problem5
Use the Jacobi method and Gauss-Seidel method to solove the following linear systems, with TOL = 0.001 in the $L_{\infty}$ norm.
![[Pasted image 20231015180914.png]]
## Problem6
Prove: If $A$ is a matrix and $\rho_1,\rho_2,...,\rho_k$ are distinct eigenvalues of $A$ with associated eigenvectors $x_1,x_2,...,x_k$, then $\{x_1,x_2,...,x_k\}$ linearly independent set.
## Problem7
Prove that a strictly diagonally dominant matrix is invertible.