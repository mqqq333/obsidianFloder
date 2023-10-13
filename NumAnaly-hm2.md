# HM2
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
## Problem 5
The nonlinear system
$$x_1^2-10x_1+x_2^2+8=0,  x_1x_2^2+x_1-10x_2+8$$
can be transformed into the fixed-point problem
$$x_1 = g_1(x_1, x_2)={{x_1^2+x_2^2+8}\over{10}},x_2=g_2(x_1,x_2)={{x_1x_2^2+x_1+8}\over{10}} $$

(a)Show that $G = (g_1,g_2)^t$ mapping $D \subset R^2$ into $R^2$ has a unique fixed point in
$D = {\{}(x_1,x_2)^t|0\le{x_1,x_2}\le1.5{\}}$
(b)Let $x^{(0)}=[0,1]^t$, and perform two steps of the fixed point iteration to find $X^{(2)}$

