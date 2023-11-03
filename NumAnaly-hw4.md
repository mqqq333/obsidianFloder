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
$$L_1(x)={{(x-0)(x-1)(x-2)}\over{(0.5-0)(0.5-1)(0.5-2)}}$$
$$L_2(x)={{(x-0)(x-0.5)(x-2)}\over{(1-0)(1-0.5)(1-2)}}$$
$$L_3(x)={{(x-0)(x-0.5)(x-1)}\over{(2-0)(2-0.5)(2-1)}}$$

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

## Problem3
![[Pasted image 20231029194334.png]]
![[Pasted image 20231029194338.png]]
## Problem4
![[Pasted image 20231029194341.png]]
## Problem5
![[Pasted image 20231029194346.png]]
## Problem6
![[Pasted image 20231029194349.png]]
## Problem7
![[Pasted image 20231029194354.png]]
## Problem8
![[Pasted image 20231029194414.png]]