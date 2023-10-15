# HW2
## Problem 1
![[Pasted image 20231010105639.png]]
*solution*
$f(x)=-x^3-cosx$
$f'(x)=-3x^2+sinx$
so $P_{n+1}=p_n - {{f(p_n)}\over{f'(p_n)}}$
$p_0=-1, p_1=-0.880333,p_2=-0.865684$
$p_0=0$ could't be uesd, cause f'(0)=0

## Problem 2
![[Pasted image 20231010105645.png]]
*solution*
**(i)**
${\epsilon}_{k+1}={{{{1}\over{b}}-x_{k+1}}\over{{{1}\over{b}}}}=1-bx_{k+1}$
$f(x)=b-{1}\over{x}$   so $f'(x)={{1}\over{x^2}}$
hence $x_{k+1}=x_k-{{f(x_k)}\over{f(x_{k+1})}}=2x_k-bx^2_k$
so $|{\epsilon_{k+1}}|=|1-b(2x_k-bx^2_k)|=(1-bx_k)^2={\epsilon}^2_k$
**(ii)**
$x_{k+1}=2x_k-bx^2_k$
$cause\quad x_{k+1}-{{1}\over{b}}=2x_k-bx^2_k-{{1}\over{b}}=-b(x_k-{{1}\over{b}})^2=-b^{2k+1}(x_0-{{1}\over{b}})^{2k+2} \quad converge$
$so |bx_0-1|<1 \rightarrow 0<x_0<{{2}\over{b}}$
## Problem 3
![[Pasted image 20231010105652.png]]
*solution*
**a.**

$x_1 = {{1}\over{3}}cos(x_2x_3)+{{1}\over{6}},$
$x_2={{1}\over{9}}\sqrt{x_1^2+sinx_3+1.06}-0.1,$
$x_3=-{{1}\over{20}}e^{-x_1x_2}-{{10\pi-3}\over{60}}.$
$g_1(x_1, x_2, x_3)={{1}\over{3}}cos(x_2x_3)+{{1}\over{6}},$
$g_2(x_1,x_2,x_3)={{1}\over{9}}\sqrt{x_1^2+sinx_3+1.06}-0.1,$
$g_3(x_1,x_2,x_3)=-{{1}\over{20}}e^{-x_1x_2}-{{10\pi-3}\over{60}}.$
$x_1^{(k)} = {{1}\over{3}}cos(x_2^{(k-1)}x_3^{(k-1)})+{{1}\over{6}},$
$x_2^{(k)}={{1}\over{9}}\sqrt{(x_1^{(k)})^2+sinx_3^{(k-1)}+1.06}-0.1,$
$x_3^{(k)}=-{{1}\over{20}}e^{-x_1^{(k)}x_2^{(k)}}-{{10\pi-3}\over{60}}.$

so $X^{(2)}=\begin{pmatrix}0.500167\\0.250804\\-0.517387\end{pmatrix}$
**b.**
$x_1=\sqrt{-x_2+37}$
$x_2=\sqrt{x_1-5}$
$x_3=-x_1-x_2+3$
$g_1(x_1,x_2,x_3)=\sqrt{-x_2+37}$
$g_2(x_1,x_2,x_3)=\sqrt{x_1-5}$
$g_3(x_1,x_2,x_3)=-x_1-x_2+3$
so $X^{(2)}=\begin{pmatrix}4.350877\\18.491228\\-19.842105\end{pmatrix}$
## Problem 4
![[Pasted image 20231010105658.png]]
*solution*
**a.**
$$f_1=15x_1+x_2^2-4x_3-13=0$$
$$f_2=x_1^2+10x_2-x_3-11=0$$
$$f_3=x_2^3-25x_3+22=0;$$
Jcaobian Matrix
$$J=\begin{pmatrix}2.0x_1&1.0&0.0\\1.0&-2.0x_2&0.0\\1.0&1.0&1.0\end{pmatrix}$$
Initial Guess
$$x^{(0)}=(0,0,0)^t$$
so the function values
$$F^{(0)}=\begin{pmatrix}-37\\-5\\-3\end{pmatrix}$$
Jacobian Matrix
$$J^{(0)}=\begin{pmatrix}0&1&0\\1&0&0\\1&1&1\end{pmatrix}$$
Solve the system of linear equations
$$y^{(0)}=-[J^{(0)}]^{-1}F^{(0)}$$
$$y^{(0)}=\begin{bmatrix}\begin{pmatrix}15&0&-4\\0&10&-1\\0&0&-25\end{pmatrix}\end{bmatrix}^{-1}\begin{pmatrix}-13\\-11\\22\end{pmatrix}$$
$$y^{(0)}=\begin{pmatrix}1.1013\\1.188\\0.88\end{pmatrix}$$
So, after the first iteration, the values are 
$$x^{(1)}=x^{(0)}+y^{(0)}$$
$$x^{(1)}=\begin{pmatrix}0\\0\\0\end{pmatrix}+\begin{pmatrix}1.1013\\1.188\\0.88\end{pmatrix}$$
Iteration-2
Second Guess
$$x^{(1)}=\begin{pmatrix}1.1013\\1.188\\0.88\end{pmatrix}$$
So, the function values
$$F^{(1)}=\begin{pmatrix}1.4113\\1.2129\\1.6767\end{pmatrix}$$
Jacobian Matrix
$$J^{(1)}=\begin{pmatrix}15&2.367&-4\\2.2027&10&-1\\0&4.234&-25\end{pmatrix}$$
Solve the system of linear equations
$$y^{(1)}=-[J^{(1)}]^{-1}F^{(1)}$$
$$y^{(1)}=\begin{bmatrix}\begin{pmatrix}15&2.376&-4\\2.2027&10&-1\\0&4.234&-25\end{pmatrix}\end{bmatrix}^{-1}\begin{pmatrix}1.4113\\1.2129\\1.6767\end{pmatrix}$$
$$y^{(1)}=\begin{pmatrix}-0.064646\\-0.10208\\0.049779\end{pmatrix}$$
So, after the second iteration, the values are 
$$x^{(2)}=x^{(1)}+y^{(1)}$$
$$x^{(2)}=\begin{pmatrix}-0.064646\\-0.10208\\0.049779\end{pmatrix}+\begin{pmatrix}1.1013\\1.188\\0.88\end{pmatrix}$$
$$x^{(2)}=\begin{pmatrix}1.0367\\1.0859\\0.92978\end{pmatrix}$$
After Two Iterations the solution is
$$x^{(2)}=\begin{pmatrix}1.0367\\1.0859\\0.92978\end{pmatrix}$$
**b.**
$$f_1=10x_1-2x_2^2+x_2-2x_3-5=0$$
$$f_2=8x_2^2+4x_3^2-9=0$$
$$f_3=8x_2x_3+4=0$$
Jacobian Matrix
$$J=\begin{pmatrix}10&1.0-4.0x_2&-2.0\\0.0&16.0x_2&8.0x_3\\0.0&8.0x_3&8.0x_2\end{pmatrix}$$
Initial Guess
$$x^{(0)}=(0,0,0)^t$$
so the function values
$$F^{(0)}=\begin{pmatrix}-5\\-9\\4\end{pmatrix}$$
Jacobian Matrix
$$J^{(0)}=\begin{pmatrix}10&1&-2\\0&0&0\\0&0&0\end{pmatrix}$$
Solve the system of linear equations
We can see that the above Jacobian matrix has all elements in the second and third rows as zero, so a Solution is not possible.


## Problem 5
The nonlinear system
$$x_1^2-10x_1+x_2^2+8=0,  x_1x_2^2+x_1-10x_2+8$$
can be transformed into the fixed-point problem
$$x_1 = g_1(x_1, x_2)={{x_1^2+x_2^2+8}\over{10}},x_2=g_2(x_1,x_2)={{x_1x_2^2+x_1+8}\over{10}} $$

(a)Show that $G = (g_1,g_2)^t$ mapping $D \subset R^2$ into $R^2$ has a unique fixed point in
$D = {\{}(x_1,x_2)^t|0\le{x_1,x_2}\le1.5{\}}$
(b)Let $x^{(0)}=[0,1]^t$, and perform two steps of the fixed point iteration to find $X^{(2)}$
*solution*
**(a)**
Use the Theorem 10.6
$x_1=g_1(x_1,x_2)={{x_1^2+x_2^2+8}\over{10}}$
$x_2=g_2(x_1,x_2)={{x_1x_2^2+x_1+8}\over{10}}$
${{\partial{g_1}}\over{\partial{x_1}}}={{x_1}\over{5}}$
${{\partial{g_1}}\over{\partial{x_2}}}={{x_2}\over{5}}$
${{\partial{g_2}}\over{\partial{x_1}}}={{1}\over{10}}(x_2^2+1)$
${{\partial{g_2}}\over{\partial{x_2}}}={{x_2}\over{5}}$


so in $D=\{(x_1,x_2)^t|0{\le}x_1,x_2{\le}1.5\}$
${{\partial{g_1}}\over{\partial{x_1}}}={{x_1}\over{5}}\le{{0.6}\over{2}}$
${{\partial{g_2}}\over{\partial{x_1}}}={{1}\over{10}}(x_2^2+1)\le{{0.65}\over{2}}$
${{\partial{g_1}}\over{\partial{x_2}}}={{x_2}\over{5}}\le{{0.6}\over{2}}$
${{\partial{g_2}}\over{\partial{x_2}}}={{x_2}\over{5}}\le{{0.6}\over{2}}$

Therefore, in the domin $D=\{(x_1,x_2)^t|0{\le}x_1,x_2{\le}1.5\}$
$$|{{{\partial}g_i}\over{{\partial}x_j}}|\le{{K}\over{2}};i,j=1,2$$
Hence, the mapping $D{\subset}R^2\rightarrow{R^2}$ has a unique fixed point.
**(b)**
$$x_1^k={{1}\over{10}}\{(x_1^{k-1})^2+(x_2^{k-1})^2+8\}$$
$$x_2^k={{1}\over{10}}\{(x_1^{k-1})^2+(x_2^{k-1})^2+8\}$$

$$let X^{(0)}=[0,1]^t$$
so $$k=0,x_1^k=1.0000,x_2^k=0.0000$$
$$k=1,x_1^k=0.9000,x_2^k=0.8000$$
$$k=2,x_1^k=0.9450,x_2^k=0.9476$$