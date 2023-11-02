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

## Problem2
![[Pasted image 20231029194331.png]]
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