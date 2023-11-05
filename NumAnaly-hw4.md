# HW4
## Problem1
![[Pasted image 20231029194326.png]]
*solution*
**a.**
The second degree Lagrange interpolating polynomial is given as
$$P_2(x)=L_0(x)f(x_0)+L_1(x)f(x_1)+L_2(x)f(x_2)$$
when n = 2 as
$$L_0(x)={{(x-x_1)(x-x_2)}\over{(x_0-x_1)(x_0-x_2)}}$$
$$L_1(x)={{(x-x_0)(x-x_2)}\over{(x_1-x_0)(x_1-x_2)}}$$
$$L_2(x)={{(x-x_0)(x-x_1)}\over{(x_2-x_0)(x_2-x_1)}}$$
The nodes are $x_0=0,x_1=0.3,x_2=0.6.$ Substitute into the expressions for $L_k$ above to obtain
$$L_0(x)={{(x-0.3)(x-0.6)}\over{(0-0.3)(0-0.6)}}={{(x-0.3)(x-0.6)}\over{0.18}}={{50}\over{9}}x^2-5x+1$$
$$L_1(x)={{(x-0)(x-0.6)}\over{(0.3-0)(0.3-0.6)}}={{x(x-0.6)}\over{0.09}}=-{{100}\over{9}}x^2+{{20}\over{3}}x$$
$$L_2(x)={{(x-0)(x-0.3)}\over{(0.6-0)(0.6-0.3)}}={{x(x-0.3)}\over{0.18}}={{50}\over{9}}x^2-{{5}\over{3}}x$$
We also need to evaluate $f(x_k)$ for $k =0,1,2$ as follows
$$f(x_0)=f(0)=e^{2.0}cos(3\times0)=1$$
$$f(x_1)=f(0.3)=e^{2.0\times0.3}cos(3\times0.3)=1.13264721$$
$$f(x_2)=f(0.6)=e^{2.0\times0.6}cos(3\times0.6)=-0.75433752$$
Now determine $P_2(x)$as follows
$$P_2(x)=L_0(x)f(x_0)+L_1(x)f(x_1)+L_2(x)f(x_2)$$
$$=({{50}\over{9}}x^2-5x+1){\times}f(0)+(-{{100}\over{9}}x^2+{{20}\over{3}}x){\times}f(0.3)+({{50}\over{9}}x^2-{{5}\over{3}}x){\times}f(0.6)$$
$$=-11.220177x^2+3.808211x+1$$
According to Theorem 3.3, the absolute is
$$|f(x)-P_n(x)|=|{{f^{(n+1)(\xi(x))}}\over{(n+1)!}}\prod_{k=0}^n(x-x_k)|$$
where $\xi(x)\in[0,0.6].$when n=2, the absolute error is
$$|f(x)-P_2(x)|=|{{f^{(3)(\xi(x))}}\over{(3)!}}\prod_{k=0}^2(x-x_k)|=|{{f^{(3)(\xi(x))}}\over{6}}(x-0)(x-0.3)(x-0.6)|$$
The product $x(x-0.3)(x-0.6)$ is a third degree polynomial with extreme points $x_1 = 0.1268$ and $x_2 = 0.4732$which we find as follows.
$$p(x)=x(x-0.3)(x-0.6)=x^3-0.9x^2+0.18x$$
$$p'(x)=3x^2-1.8x+0.18$$
$$p'(x)=0 {\quad\Longrightarrow}x_{1,2}={{1.8{\pm}\sqrt{1.8^2-4\times3\times0.18}}\over{2\times3}}$$
Therefore, the extreme values of the product on $[0, 0.6]$ are $p(0.1268) = 0.01039$ and $(0.4732) = -0.01039$ hence the maximum absolute value of the product on that interval is 0.01039.
The error $|f(x)-P_2(x)|$also depends on the third derivative of $f$. Let's find that derivate 
$$f(x)=  e^ {2x}\cos  3x$$
$$f'(x)=  2e^ {2x}   \cos  3x-  e^ {2x}   \cdot   \sin  3x  \cdot  3=  e^ {2x}  (2  \cos  3x-3  \sin  3x)$$
$$f″(x)=   2e^ {2x}  (2  \cos  3x-3  \sin  3x)+  e^ {2x}  (-6  \sin  3x-9  \cos  3x)=e^{2x}(-5cos3x-12sin3x)$$

$$f'''(x)=  2e^ {2x}  (-5  \cos  3x-12  \sin  3x)+  e^ {2x}  (15  \sin  3x-36  \cos  3x)
=  e^ {2x}  (-46  \cos  3x-9  \sin  3x)$$

The plot below reveals that the maximum absolute value of the third derivative on $[0,0.6]$ is for $f′′′(0.2604)=−65.6522$. Substitute the information we found into the error bound formula as shown below.
$$|f(x)-P_2(x)|=|{{f^{(3)(\xi(x))}}\over{(3)!}}\prod_{k=0}^2(x-x_k)|=|{{f^{(3)(\xi(x))}}\over{6}}(x-0)(x-0.3)(x-0.6)|\leq{{65.6522}\over{6}}\times0.01039=0.11369$$

**b.**
$$P_2(x)=L_0(x)f(x_0)+L_1(x)f(x_1)+L_2(x)f(x_2)$$
when n = 2 as
$$L_0(x)={{(x-x_1)(x-x_2)}\over{(x_0-x_1)(x_0-x_2)}}$$
$$L_1(x)={{(x-x_0)(x-x_2)}\over{(x_1-x_0)(x_1-x_2)}}$$
$$L_2(x)={{(x-x_0)(x-x_1)}\over{(x_2-x_0)(x_2-x_1)}}$$
The nodes are $x_0=2,x_1=2.4,x_2=2.6.$ Substitute into the expressions for $L_k$ above to obtain
$$L_0(x)={{(x-2.4)(x-2.6)}\over{(2-2.4)(2-2.6)}}={{(x-2.4)(x-2.6)}\over{0.24}}={{25}\over{6}}x^2-{{125}\over{6}}x+26$$
$$L_1(x)={{(x-2)(x-2.6)}\over{(2.4-2)(2.4-2.6)}}=-{{(x-2)(x-2.6)}\over{0.08}}=-12.5x^2+57.5x-65$$
$$L_2(x)={{(x-2)(x-2.4)}\over{(2.6-2)(2.6-2.4)}}={{(x-2)(x-2.4)}\over{0.12}}={{25}\over{3}}x^2-{{110}\over{3}}x+40$$
We also need to evaluate $f(x_k)$ for $k =0,1,2$ as follows
$$f(x_0)=f(2)=\sin(ln2)=0.63896127$$
$$f(x_1)=f(2.4)=\sin(ln2.4)=0.76784388$$
$$f(x_2)=f(2.6)=\sin(ln2.6)=0.81660905$$
Now determine $P_2(x)$as follows
$$ P_ {2}  (x)=  L_ {0}  (x)f(  x_ {0}  )+  L_ {1}  (x)f(  x_ {1}  )+  L_ {2}  (x)f(  x_ {2}  )$$
$$=(  \frac {25}{6} x^ {2}  -  \frac {125}{6}  x+26)  \cdot  f(2)
+(-12.  5x^ {2}  +57.5x-65)  \cdot  f(2.4)
+(  \frac {25}{3}  x^ {2}  -  \frac {110}{3}  x+40)  \cdot  f(2.6)$$
$$=-0.  130634x^ {2}  +0.896998x-0.632497$$

According to Theorem 3.3, the absolute is
$$|f(x)-P_n(x)|=|{{f^{(n+1)(\xi(x))}}\over{(n+1)!}}\prod_{k=0}^n(x-x_k)|$$
where $\xi(x)\in[2,2.6].$when n=2, the absolute error is
$$|f(x)-P_2(x)|=|{{f^{(3)(\xi(x))}}\over{(3)!}}\prod_{k=0}^2(x-x_k)|=|{{f^{(3)(\xi(x))}}\over{6}}(x-2)(x-2.4)(x-2.6)|$$
The product $(x-2)(x-2.4)(x-2.6)$ is a third degree polynomial with extreme points $x_1 = 2.5097$ and $x_2 = 2.1569$which we find as follows.
$$p(x)=(x-2)(x-2.4)(x-2.6)=x^3-7x^2+16.24x-12.48$$
$$p'(x)=3x^2-14x+16.24$$
$$p'(x)=0 {\quad\Longrightarrow}x_{1,2}={{14{\pm}\sqrt{14^2-4\times3\times16.24}}\over{2\times3}}$$
Therefore, the extreme values of the product on $[2, 2.6]$ are $p(2.5097) = -0.005$ and $p(2.1569) = 0.0169$ hence the maximum absolute value of the product on that interval is 0.0169.
The error $|f(x)-  P_ {2}  (x)|$ also depends on the third derivative of $f$.Let's find that derivative.
$$f(x)= \sin  (  \ln  x)$$
$$f'(x)= \cos  (  \ln  x)  \cdot \frac {1}{x} $$ 
 $$ f''(x)={{-sin(lnx){{1}\over{x}}x-cos(lnx)}\over{x^2}}={{-cos(lnx)-sin(lnx)}\over{x^2}}$$ 
 $$f'''(x)={{(sin(lnx){{1}\over{x}}-cos(lnx){{1}\over{x}})x^2-(-cos(lnx)-sin(lnx))2x}\over{x^4}}={{3sin(lnx)+cos(lnx)}\over{x^3}}$$
The plot below reveals that the maximum absolute value of the third derivative on $[2,2.6]$ is for $f'''(2) =0.335765$.Substitute the information we found into the error bound formula as shown below.
$$|f(x)-  P_ {2}  (x)|=|  \frac {f^{(3)}(\zeta (x))}{6} (x-2)(x-2.4)(x-2.6)\leq{{0.335765}\over{6}}\times0.0169 =9.46\times10^{-4}$$


## Problem2
![[Pasted image 20231029194331.png]]
*Solution*
$$P_3(x)=L_0(x)f(x_0)+L_1(x)f(x_1)+L_2(x)f(x_2)+L_3(x)f(x_3)$$
when n = 3 as
$$L_0(x)={{(x-x_1)(x-x_2)(x-x_3)}\over{(x_0-x_1)(x_0-x_2)(x_0-x_3)}}$$
$$L_1(x)={{(x-x_0)(x-x_2)(x-x_3)}\over{(x_1-x_0)(x_1-x_2)(x_1-x_3)}}$$
$$L_2(x)={{(x-x_0)(x-x_1)(x-x_3)}\over{(x_2-x_0)(x_2-x_1)(x_2-x_3)}}$$
$$L_3(x)={{(x-x_0)(x-x_1)(x-x_2)}\over{(x_3-x_0)(x_3-x_1)(x_3-x_2)}}$$
The nodes are $x_0=0,x_1=0.5,x_2=1,x3=2.$ Substitute into the expressions for $L_k$ above to obtain

$$L_0(x)={{(x-0.5)(x-1)(x-2)}\over{(0-0.5)(0-1)(0-x_2)}}={{x^3-{{7}\over{2}}x^2+{{7}\over{2}}x-1}\over{-1}}={{-x^3+{{7}\over{2}}x^2-{{7}\over{2}}x+1}}$$
$$L_1(x)={{(x-0)(x-1)(x-2)}\over{(0.5-0)(0.5-1)(0.5-2)}}={{8}\over{3}}x^3-8x^2+{{16}\over{3}}x$$
$$L_2(x)={{(x-0)(x-0.5)(x-2)}\over{(1-0)(1-0.5)(1-2)}}=-2x^3+5x^2-2x$$
$$L_3(x)={{(x-0)(x-0.5)(x-1)}\over{(2-0)(2-0.5)(2-1)}}={{1}\over{3}}x^3-{{1}\over{2}}x^2+{{1}\over{6}}x$$

Thus,
$$P_3(x)=L_0(x)f(x_0)+L_1(x)f(x_1)+L_2(x)f(x_2)+L_3(x)f(x_3)$$
$$=L_1(x){\cdot}y+L_2(x){\cdot}3+L_3(x){\cdot}2$$
$$=({{8y-16}\over{3}})x^3+(-8y+14)x^2+({{16y-17}\over{3}})x$$

The coefficient of $x^3$ to be equal to 6,
$${{8y-16}\over{3}}=6{\quad}{\Longrightarrow}{\quad}y=4.25$$
Then, the polynomial becomes
$$P_3(x)=6x^3-20x^2+17x$$
So
$$P_3(0)=0,P_3(0.5)=4.25,P_3(1)=3,P_3(2)=2$$

## Problem3
![[Pasted image 20231029194334.png]]
*solution*
According to the Neville's method,
$$P_{0,1,...,k}(x)={{(x-x_j)P_{0,1,...,j-1,j+1,...,k}(x)-(x-x_i)P_{0,1,...,i-1,i+1,...,k}(x)}\over{(x_i-x_j)}}$$
We have nodes:
$$f(x_0)=f(0)=P_0=1$$
$$f(x_1)=f(0.5)=P_1=2$$
$$f(x_2)=f(0.5)=P_2$$
$$f(x_3)=f(0.75)=P_3=8$$
$P_{2,3}$ can be constructed from $P_2$ and $P_3$ as:
$$P_{2,3}={{(x-x_2)P_3-(x-x_3)P_2}\over{x_3-x_2}}$$
Hence, substitute the data we have:
$$P_2=4$$
![[Pasted image 20231029194338.png]]
*solution*
According to the Neville's method,
$$P_{0,1,...,k}(x)={{(x-x_j)P_{0,1,...,j-1,j+1,...,k}(x)-(x-x_i)P_{0,1,...,i-1,i+1,...,k}(x)}\over{(x_i-x_j)}}$$
So we have:
$$P_{0,1,2,3}(x)={{(x-x_0)P_{1,2,3}(x)-(x-x_3)P_{0,1,2}(x)}\over{x_3-x_0}}$$
As we see from the equation, we need to know the value of the polynomial $P_{0,1,2}$
So,
$$P_{0,1,2}(x)={{(x-x_0)P_{1,2}(x)-(x-x_2)P_{0,1}(x)}\over{x_2-x_0}}$$
So,
$$P_{0,1,2,3}(x)={{(x-x_0)P_{1,2,3}(x)}\over{x_3-x_0}}-{{x-x_3}\over{x_3-x_0}}\left[{{(x-x_0)P_{1,2}(x)-(x-x_2)P_{0,1}(x)}\over{x_2-x_0}}\right]$$
$$={{(x-x_0)P_{1,2,3}(x)}\over{x_3-x_0}}-{{x-x_3}\over{x_3-x_0}}\left[{{(x-x_0)(x+1)-(x-x_2)(2x+1)}\over{x_2-x_0}}\right]$$
Then,
$$P_{0,1,2,3}(2.5)=2.9792$$
## Problem4
![[Pasted image 20231029194341.png]]
The k-th divided difference relative to $x_0,x_1,...,x_k$ is definied as:
$$f\left[x_0,x_1,...,x_k\right]={{f\left[x_1,x_2,...,x_k\right]-f\left[x_0,x_1,...,x_k-1\right]}\over{x_k-x_0}}----(1)k=0,1,...,n$$
if $k=0,1,2$ we have the following divided differences:
- Zero'th divided differences:
$$f[x_k]=f(x_k)----(2)$$
- First divied difference:
$$f[x_0,x_1]={{f(x_1)-f(x_0)}\over{x_1-x_0}}----(3)$$
$$f[x_1,x_2]={{f(x_2)-f(x_1)}\over{x_2-x_1}}----(4)$$
- Second divided difference:
$$f[x_0,x_1,x_2]={{f[x_1,x_2]-f[x_0,x_1]}\over{x_2-x_0}}----(5)$$

From equation (4),
$${{6-f(x_1)}\over{0.7-0.4}}=10{\Longrightarrow}f(x_1)=3$$
From equation (5),
$${{10-f[x_0,x_1]}\over{0.7-0.0}}={{50}\over{7}}{\Longrightarrow}f[x_0,x_1]=5$$
From equation (3),
$${{6-f(x_0)}\over{0.4-0.0}}=5{\Longrightarrow}f(x_0)=4$$

## Problem5
![[Pasted image 20231029194346.png]]
*solution*
**a**
if $f$ is a function of the variable $x$ defined on the closed interval $[a,b]$,and we have a set of nodes $a=x_ {0}  < x_ {1}  <  \cdots  <  x_ {n}  =b$ $in[a,b]$,then a natural cubic spline interpolant $S(x)$ is a third order polynomial that satisfy the following conditions:
- $S_j(x)$, defined on the subinterval $[x_j,x_{j+1}]$ for each $j=0,1,...,n-1,$ have the general from:
$$S_j​(x)=a_j​+b_j​(x−x_j​)+c_j​(x−x_j​)^2+d_j​(x−x_j​)^3$$
- For each $j=0,1,...,n-1$ we have:
$$S_j(x_j)=f(x_j)$$
$$S_j(x_{j+1})=f(x_{j+1})$$
- For each $j=0,1,...,n-2$ we have:
$$S_{j+1}(x_{j+1})=S_j(x_{j+1})$$
- For each $j=0,1,...,n-2$ we have:
$$S'_{j+1}(x_{j+1})=S'_j(x_{j+1})$$
$$S''_{j+1}(x_{j+1})=S''_j(x_{j+1})$$
- Natural conditions:
$$c_0=S''(x_0)=0$$
$$c_n=S''(x_n)=0$$
To find $S(x)$,we define $h_j=x_{j+1}-x_j$ and compute the coefficient $c_j$ by solving the matrix equation $Ax =b$, where the matrix $A$ is defined as:
$$A=\begin{bmatrix}1&0&0&0&0\\ h_0&2(h_0+h_1))&h_1&0&0\\ 0&h_1& 2(h_1+h_2)h_2&0&0\\ 0&0&0&0&0\\ 0&0&h_{n-2}&2(h_{n-2}-h_{n-1})&h_{n-1}\\ 0&0&0&0&1 \end{bmatrix}$$
The matrix $b$ is given by:
$$b=\begin{bmatrix}0\\ {{3}\over{h_1}}(a_2-a_1)-{{3}\over{h_0}}(a_1-a_0)\\ \vdots \\ {{3}\over{h_{n-1}}}(a_n-a_{n-1})-{{3}\over{h_{n-2}}}(a_{n-1}-a_{n-2})\\ 0\end{bmatrix}$$
and
$$x=\begin{bmatrix}c_0\\ c_1\\ \vdots\\ c_n\end{bmatrix}$$
Finally, the coefficients $a_j,b_j,d_j$ are given:
$$a_j=f(x_j),{\quad} j=0,1,...,n$$
$$b_j={{a_{j+1}-a_j}\over{h_j}}-{h_j{(c_{j+1}+2c_j)}\over{3}},{\quad} j=0,1,...,n-1$$
$$a_j={{c_{j+1}-c_j}\over{3h_j}},{\quad} j=0,1,...,n-1$$
we have:
$$h_0=x_1-x_0=1,h_1=x_2-x_1=1$$
So substitute the data into the equations:
$$A=\begin{bmatrix}1&0&0\\ 1&4&1\\ 0&0&1\end{bmatrix}$$
$$b=\begin{bmatrix}0\\ {{3}\over{h_1}}(a_2-a_1)-{{3}\over{h_0}}(a_1-a_0)\\ 0\end{bmatrix}$$
From $Ax=b$:
$$c_0=0$$
$$c_0+4c_1+c_2={{3}\over{h_1}}(a_2-a_1)-{{3}\over{h_0}}(a_1-a_0)$$
$$c_2=0$$
To find $c_1$, we need to find $a_j$:
$$a_0=f(0)=0,a_1=f(1)=1,a_2=f(2)=2 \Longrightarrow c_1=0$$
Then :
$$b_0=1,b_1=1,d_0=0,d_1=0$$
Finally,
$$S_0(x)=x,S_1(x)=x$$
**b**
The same as **a**
we have:
$$h_0=x_1-x_0=1,h_1=x_2-x_1=1$$
So substitute the data into the equations:
$$A=\begin{bmatrix}2&1&0\\ 1&4&1\\ 0&1&2\end{bmatrix}$$
$$b=\begin{bmatrix}{{3}\over{h_0}}(a_1-a_0)-3f'(0)\\ {{3}\over{h_1}}(a_2-a_1)-{{3}\over{h_0}}(a_1-a_0)\\ 3f'(2)-{{3}\over{h_1}}(a_2-a_1)\end{bmatrix}$$
From $Ax=b$:
$$2c_0+c_1={{3}\over{h_0}}(a_1-a_0)-3f'(0)$$
$$c_0+4c_1+c_2={{3}\over{h_1}}(a_2-a_1)-{{3}\over{h_0}}(a_1-a_0)$$
$$c_1+2c_2=3f'(2)-{{3}\over{h_1}}(a_2-a_1)$$
To find $c_1$, we need to find $a_j$:
$$a_0=f(0)=0,a_1=f(1)=1,a_2=f(2)=2 \Longrightarrow c_0=c_1=c_2=0$$
Then :
$$b_0=1,b_1=1,d_0=0,d_1=0$$
Finally,
$$S_0(x)=x,S_1(x)=x$$
## Problem6
![[Pasted image 20231029194349.png]]
Three-point endpoint formula allows us to compute $f'(x_0)$, where $x_0​$ is an endpoint of the interval $[x_0,x_2​]$ as:
$$f'(  x_ {0}  )=  \frac {1}{2h}  [-3f(  x_ {0}  )+4f(  x_ {0}  +h)-f(  x_ {0}  +2h)]+E(f),----(1)
$$
where $x_ {1}  =  x_ {0}  +h,  x_ {2}  =  x_ {0}  +2h,$ and:
$$h=  \frac {x_ {2}-x_ {0}}{2}  =  x_ {1}  -  x_ {0}  =  x_ {2}  -  x_ {1}  .
$$
In the above expression, $E(f)=O(h^2)$ is the error in the approximation.

If $x_0$ is the right-endpoint of the interval $[x_0​−2h,x_0​]$, to find $f′(x_0​)$ we use Eq.(1)(1) with $−ℎ$ instead of $ℎ$.
Also recall that, if $x_0$​ is the midpoint of the interval $[x_0−h,x_0​+h]$, we can approximate $f′(x_0​)$ by the three-poirt midpoint formula:
$$f'(  x_ {0}  )=  \frac {1}{2h}  [f(  x_ {0}  +h)-f(  x_ {0}  -h)]-  E_ {M}  (f),E_M(f)=O(h^2)----(2)
$$
$\begin{aligned}
&\text{To use Eq.}(1)\text{, we note the fact that }&&x_1=1.2\mathrm{~and~}x_2=1.3,\text{so:}  \\
&&&h=x_1-x_0=x_2-x_1=0.1. \\
&\text{Hence, Eq.}(1)\text{ gives for }f'\left(x_0\right)=f'(1.1){:} \\
&&&\begin{aligned}f'(1.1)&=\frac{1}{2(0.1)}[-3f(1.1)+4f(1.2)-f(1.3)]\end{aligned} \\
&&&=\frac1{0.2}[-3(9.025013)+4(11.02318)-13.46374] \\
&&&=\frac1{0.2}(-27.075039+44.09272-13.46374) \\
&&&=\frac{3.553941}{0.2} \\
&&&=17.769705.
\end{aligned}$

Now consider the computation of $f^{\prime}(1,2).$ We see that we have two options for the calculation. The first is to consider the interval from $x_0=1.2$ to $x_2=1.4$, so that $x_0=1,2$ is the left-endpoint of this interval, and apply the three-point endpoint formula of Eq.(1), with $h=0.1.$

The other option is to consider the interval from $x_0-h=x_0-0.1=1.1$ to $x_0+h=1.3$ so that $x_0=1.2$ isthe midpoint of this interval, and then use the three-point midpoint formula given in Eq.(2).

As is discussed in the text, the second method is more accurate, because uses values of $f$ on both sides of $x_0$. So, in what follows we will use this method.

Hence
$$\begin{aligned}
f(1.2)& =\frac1{2(0.1)}[f(1.3)-f(1.1)]  \\
&=\frac1{0.2}(13.46374-9.025013) \\
&=\frac{4.438727}{0.2} \\
&=22.193635.
\end{aligned}$$

Similarly, to compute $f^{\prime}(1.3)$ we use the three-point midpoint formula because wé have the values of $f$ at $x_0-$ $h=1.2$ and $x_0+h=1.4.$

$$
\begin{aligned}
f^{\prime}(1.3)& =\frac1{2(0.1)}[f(1.4)-f(1.2)]  \\
&=\frac1{0.2}(16.44465-11.02318) \\
&=\frac{5.42147}{0.2} \\
&=27.107350.
\end{aligned}
$$

Finally, to compute $f^{\prime}(1.4)$, we cannot use the three-point midpoint formula because this point is the right endpoint of the interval [1.2,1.4]. So, we must use the three-point endpoint formula, with $x_0=1.4,h=-h$, and$h=0.1$ (so $x_0-h=1.3$, and $x_0-2h=1.2$ ).
$$
\begin{aligned}
f^{\prime}(1.4)& =\frac1{2(-h)}\left[-3f\left(x_0\right)+4f\left(x_0-h\right)-f\left(x_0-2h\right)\right]  \\
&=\frac1{2(-0.1)}[-3f(1.4)+4f(1.3)-f(1.2)] \\
&=-\frac1{0.2}[-3(16.44465)+4(13.46374)-11.02318] \\
&=-\frac1{0.2}(-49.33395+53.85496-11.02318) \\
&=\frac{6.50217}{0.2} \\
&=32.510850.
\end{aligned}
$$
Hence

| $x$    | $f(x)$           | $f′(x)$            |
| :------: | :----------------: | :------------------: |
| 1.1 | 9.025013 | 17.769705 |
| 1.2 | 11.02318 | 22.193635 |
| 1.3 | 13.46374 | 27.107350 |
| 1.4 | 16.44465 | 32.510850 |

**(b)**
To approximate ${f^{\prime}(x)}$ at $x=8.1.$ Use Three-Point Endpoint Formula,

$$
f'\left(x_{0}\right)=\frac{1}{2h}\Big[-3f\left(x_{0}\right)+4f\left(x_{0}+h\right)-f\left(x_{0}+2h\right)\Big]
$$
 By taking ${x_0=8.1\quad\mathrm{and}\quad h=0.2}$, substitute the values

$$
f'\left(8.1\right)=\frac{1}{2\left(0.2\right)}\bigg[-3f\left(8.1\right)+4f\left(8.1+0.2\right)-f\left(8.1+2\left(0.2\right)\right)\bigg]
$$

$$
=\frac{1}{0.4}\Big[-3f\left(8.1\right)+4f\left(8.3\right)-f\left(8.5\right)\Big]
$$

$$
=\frac{1}{0.4}\Big[-3\Big(16.94410\Big)+4\Big(17.56492\Big)-18.19056\Big]
$$
 $$=\frac{1}{0.4}[1.23682] =3.092050$$


To approximate ${f^{\prime}(x)}$ at $x=8.3$ use Three-Point Midpoint Formula

$$
f'\bigl(x_0\bigr)=\dfrac{1}{2h}\Bigl[f\bigl(x_0+h\bigr)-f\bigl(x_0-h\bigr)\Bigr]
$$
 By taking ${x_0=8.3\quad\mathrm{and}\quad h=0.2}$, substitute the values

$$
f'\left(8.3\right)=\frac{1}{2\left(0.2\right)}\Big[f\left(8.3+0.2\right)-f\left(8.3-0.2\right)\Big]
$$
 

$$
=\dfrac{1}{0.4}\Big[f\big(8.5\big)-f\big(8.1\big)\Big]
$$
 $$=\frac{1}{0.4}[18.19056-16.94410]$$
 $$ =\frac{1}{0.4}[1.24646] =3.116150$$

To approximate ${f^{\prime}(x)}$ at $x=8.5$ use Three-Point Midpoint Formula

$$
f'\bigl(x_0\bigr)=\dfrac{1}{2h}\Bigl[f\bigl(x_0+h\bigr)-f\bigl(x_0-h\bigr)\Bigr]
$$
 By taking ${x_0=8.5\quad\mathrm{and}\quad h=0.2}$, substitute the values

$$
f'\left(8.5\right)=\frac{1}{2\left(0.2\right)}\Big[f\left(8.5+0.2\right)-f\left(8.5-0.2\right)\Big]
$$


$$
=\dfrac{1}{0.4}\Big[f\big(8.7\big)-f\big(8.3\big)\Big]
$$
 $$=\frac{1}{0.4}[18.82091-17.56492]$$
 $$=\frac{1}{0.4}[1.25599]=3.139975$$


To approximate $^{f^{\prime}(x)}$ at $x=8.7$ use Three-Point Endpoint Formula

$$
f'\left(x_0\right)=\dfrac{1}{2h}\Big[-3f\left(x_0\right)+4f\left(x_0+h\right)-f\left(x_0+2h\right)\Big]
$$

By taking $x_{0}= 8.7\quad and\quad h= - 0.2,$substitute the values

$$
\begin{aligned}
&\mathrm{}\:f^{\prime}\left(8.7\right)=\frac{1}{2\left(-0.2\right)}\bigg[-3f\left(8.7\right)+4f\left(8.7+\left(-0.2\right)\right)-f\left(8.7+2\left(-0.2\right)\right)\bigg] \\
&=\frac{1}{-0.4}\Big[-3f\left(8.7\right)+4f\left(8.5\right)-f\left(8.7-0.4\right)\Big] \\
&=-\frac{1}{0.4}\Big[-3f\left(8.7\right)+4f\left(8.5\right)-f\left(8.3\right)\Big] \\
&=-\frac{1}{0.4}\Big[-3\Big(18.82091\Big)+4\big(18.19056\big)-17.56492\Big] \\
&\text{=3.163525}
\end{aligned}
$$

| $x$    | $f(x)$           | $f′(x)$            |
| :------: | :----------------: | :------------------: |
| 8.1 | 16.94410 | 3.092050 |
| 8.3 | 17.56492 | 3.116150 |
| 8.5 | 18.19056 | 3.139975 |
| 8.7 | 18.82091 | 3.163525 |

 




## Problem7
![[Pasted image 20231029194354.png]]
*solution*
We have
$$
\begin{aligned}
&\text{M} =N(h)+K_{1}h^{2}+K_{2}h^{4}+K_{3}h^{6}+\cdots \\
&\text{M} =N(h/3)+K_{1}\frac{h^{2}}{9}+K_{2}\frac{h^{4}}{81}+K_{3}\frac{h^{6}}{729}+\cdots \\
&\text{M} =N(h/9)+K_{1}\frac{h^{2}}{81}+K_{2}\frac{h^{4}}{6561}+K_{3}\frac{h^{6}}{531441}+\cdots 
\end{aligned}
$$
Multiply the first equation by $A$, the second by $B$, and the third by $C$. Adding and canceling the $K_{1}$ and $K_2$ terms yields the equations

$$
\begin{aligned}A+\frac{B}{9}+\frac{C}{81}&=0\\A+\frac{B}{81}+\frac{C}{6561}&=0\end{aligned}
$$

Subtracting gives $\frac{8B}{81}+\frac{80C}{6561}=0.$ Multiply  by 6561, and we have $648B+ 80C= 0,$ or $81B+ 10C= 0$ Set $C= - 81, B= 10,$ and $A= - \frac 19.$ Therefore,

$$
\left(-\frac{1}{9}+10-81\right)M=-\frac{N(h)}{9}+10N(h/3)-81N(h/9)+O(h^{6}),
$$

or

$$
M=\frac{1}{640}\left(729N(h/9)-90N(h/3)+N(h)\right)+O(h^6).
$$

## Problem8
![[Pasted image 20231029194414.png]]

$$
a_0=\frac{\sum_{i=1}^4x_i^2\sum_{i=1}^4y_i-\sum_{i=1}^4x_iy_i\sum_{i=1}^4x_i}{4(\sum_{i=1}^4x_i^2)-(\sum_{i=1}^4x_i)^2}
$$
 $$={{45*48-172*11}\over{4*45-11^2}}=4.5423728813559325
$$

$$a_1={{4\sum_{i=1}^4x_iy_i-\sum_{i=1}^4x_i\sum_{i=1}^4y_i}\over{4(\sum_{i=1}^4x_i^2)-(\sum_{i=1}^4x_i)^2}}$$ 
$$={{4*172-11*48}\over{4*45-11^{2}}}=2.711864406779661$$


So
$$y=2.711864406779661x+4.5423728813559325$$

$$
E=\sum_{i=1}^m[y_i-(a_1x_i+a_0)]^2=11.525423728813566
$$
