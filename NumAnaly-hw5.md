# HW5
## Problem1
![[Pasted image 20231029194717.png]]
*solution*
When $f(x){=1}$, equation left：$\int_{a}^{b}f(x)dx=b-a$ equation right： $\frac{b-a}{6}[1+4+1]=b-a$ left=right

When$f(x){=x}$, equation left： $\int_{a}^{b}x\:dx=\frac{x^{2}}{2}\Big|_{a}^{b}=\frac{b^{2}-a^{2}}{2}\quad$ equation right:$\frac{b-a}{6}[a+4\cdot\frac{a+b}{2}+b]=\frac{b^{2}-a^{2}}{2}\quad$ left=right

when $f(x)=x^{2}$, left： $\int_{a}^{b}x^{2}dx=\frac{x^{3}}{2}\Big|_{a}^{b}=\frac{b^{3}-a^{3}}{3}\quad$ right:$\frac{b-a}{6}[a^{2}+4\cdot(\frac{a+b}{2})^{2}+b^{2}]=\frac{b^{3}-a^{3}}{3}\quad$right=left
 when$f(x)=x^{3}$, left： $\int_{a}^{b}x^{3}dx=\frac{\dot{b}^{4}-a^{4}}{4}$ right： $\frac{b-a}{6}[a^{3}+4\cdot(\frac{a+b}{2})^{3}+\dot{b}^{3}]=\frac{b^{4}-a^{4}}{4}$ left=right
 when $f(x)=x^{4}$, left： $\int_{a}^{b}x^{4}dx=\frac{x^{5}}{5}\Big|_{a}^{b}=\frac{b^{5}-a^{5}}{5}$

right$\frac{b-a}{6}[a^{4}+4\cdot(\frac{a+b}{2})^{4}+b^{4}]=\frac{b\:-a}{6}(5a^{4}+4a^{3}b\:+6a^{2}b^{2}+4a\:b^{3}+5b^{4})=\frac{b^{5}-a^{5}}{5}$
 left=right
So f(x) has cubic algebraic precision.
## Problem2
![[Pasted image 20231029194726.png]]
## Problem3
![[Pasted image 20231029194732.png]]
Approximate the following integrals using the Trapezoidal rule and Simpson's rule, respectively.
***Trapezoidal rule***

**a**
$$\begin{aligned}\int_{-0.25}^{0.25}(\cos(x))^2dx&\approx\frac{(0.25+0.25)}{2}(f(-0.25)+f(0.25))\end{aligned}$$
$$\int_{-0.25}^{0.25}(\cos(x))^2dx\approx0.25(0.938791281+0.938791281)\approx0.46939564$$

**b**
$$\begin{aligned}\int_{-0.5}^0x\ln(x+1)dx&\approx\frac{(0+0.5)}{2}(f(-0.5)+f(0))\end{aligned}$$
$$\int_{-0.5}^0x\ln(x+1)dx\approx0.25(0.34657359+0)\approx0.0866433975$$
**c**
$$\begin{aligned}\int_{0.75}^{1.3}\left((\sin(x))^2-2x\sin(x)+1\right)dx&\approx\frac{(1.3-0.75)}{2}(f(0.75)+f(1.3))\end{aligned}$$
$$\int_{0.75}^{1.3}\left(\left(\sin(x)\right)^2-2x\sin(x)+1\right)dx\approx0.275(0.442173259-0.576806905)\approx-0.0370242526$$
**d**
$$\begin{aligned}\int_e^{e+1}\frac{1}{x\ln(x)}dx&\approx\frac{(e+1-e)}{2}(f(e)+f(e+1))\end{aligned}$$
$$\displaystyle\int_e^{e+1}\frac{1}{x\ln(x)}dx\approx0.5\left(e^{-1}+0.204788904\right)\approx0.286334172$$

***Simpson's rule***
**a**
$$\begin{aligned}\int_{-0.25}^{0.25}(\cos(x))^2dx&\approx\frac{\left(\frac14+\frac14\right)}{6}\left(f\left(-\frac14\right)+4f(0)+f\left(\frac14\right)\right)\end{aligned}$$
$$\int_{-0.25}^{0.25}(\cos(x))^2dx\approx\dfrac{1}{12}(0.938791281+4+0.938791281)\approx0.489798$$
**b**
$$\begin{aligned}\int_{-0.5}^0x\ln(x+1)dx&\approx\frac{\left(0+\frac{1}{2}\right)}{6}\left(f\left(-\frac{1}{2}\right)+4f\left(-\frac{1}{4}\right)+f(0)\right)\end{aligned}$$
$$\displaystyle\int_{-0.5}^0x\ln(x+1)dx\approx0.25(0.34657359+0.287682+0)\approx0.052854$$
**c**
$$\displaystyle\int_{0.75}^{1.3}\left(\left(\sin(x)\right)^2-2x\sin(x)+1\right)dx\approx\frac{\left(1.3-0.75\right)}6(f(0.75)+4f(1.025)+f(1.3))$$
$$\begin{aligned}\int_{0.75}^{1.3}\left((\sin(x))^2-2x\sin(x)+1\right)dx\approx\frac{11}{120}(0.442173-0.086510-0.576806)\approx-0.020271\end{aligned}$$
**d**
$$\begin{aligned}\int_e^{c+1}\frac{1}{x\ln(x)}dx&\approx\frac{(c+1-c)}{6}\left(f(e)+4f\left(\frac{2e+1}{2}\right)+f(e+1)\right)\end{aligned}$$
$$\begin{aligned}\int_e^{c+1}\frac{1}{x\ln(x)}dx&\approx\frac{1}{6}\left(e^{-1}+1.063354+0.204788\right)\approx0.272670\end{aligned}$$
## Problem4
![[Pasted image 20231029194844.png]]
**a**
The function is even and we observe the integral of an even function on a symmetric interval, our integral will be equal to
$$2\int_0^1(\cos x)^2\mathrm{d}x.$$
So we define 
$$f(x)=2(cosx)^2$$


Now let's find $R_{1,1}$​ on the interval $[0,1]$:
$$\begin{aligned}

R_{1,1}& =\frac12\cdot(2+0.5838531636)  \\
&=1.2919265818
\end{aligned}$$
We need to find $$R_{3,3}=R_{3,2}+\frac{1}{15}\cdot(R_{3,2}-R_{2,2}).$$
$$R_{2,2}=R_{2,1}+\frac{1}{3}(R_{2,1}-R_{1,1}).$$

$$\begin{aligned}
R_{2,1}& =\frac12\Big(R_{1,1}+h_1f\Big(\frac12\Big)\Big)  \\
&=\frac12\Big(1.2919265818+1.5403023059\Big) \\
&=1.41611444385.
\end{aligned}$$
$$\begin{aligned}
R_{2,2}& =1.41611444385+\frac13(1.41611444385-1.2919265818)  \\
&=1.4575103979.
\end{aligned}$$
Let's see what we need to calculate $R_{3,2}$
$$R_{3,2}=R_{3,1}+\frac{1}{3}(R_{3,1}-R_{2,1}).$$
So we see that we need $R_{3,1}$​, which we will calculate using the Chomposite Trapezoidal rule
$$\begin{aligned}
R_{3,1}& =\frac12(R_{2,1}+h_2(f(a+h_3)+f(a+3h_3)))  \\
&=\frac{1}{2}\Bigg(1.41611444385+\frac{1}{2}\Big(f\big(0.25\big)+f\big(0.75\big)\Big)\Bigg) \\
&=\dfrac{1}{2}\Bigg(1.41611444385+\dfrac{1}{2}\Big(1.8775825619+1.0707372017\big)\Bigg) \\
&=1.445137162825
\end{aligned}$$

$$\begin{aligned}
R_{3,2}& =1.445137162825+\frac13(1.445137162825-1.41611444385)  \\
&=1.45481140248.
\end{aligned}$$

$$\begin{aligned}
R_{3,3}& =1.45481140248+\frac1{15}\cdot(1.45481140248-1.4575103979)  \\
&=1.454631.
\end{aligned}$$
**b**
Let's define the function
$$
f(x)=x\ln(x+1).
$$
Now let's find $R_{1,1}$ on the interval [-0.75,0.75]:

$$
R_{1,1}=0.75\cdot(-0.75\ln0.25+0.75\ln1.75)=1.0945744589.
$$
In the problem we need to find $R_{3,3}$ so let's see what we need to calculate it

$$
R_{3,3}=R_{3,2}+\frac{1}{15}\cdot(R_{3,2}-R_{2,2}).
$$

We see that we need $R_{3,2}$ and $R_{2,2}.$ To calculate

$$
R_{2,2}=R_{2,1}+\frac13(R_{2,1}-R_{1,1}).
$$

we need $R_{2,1}$, so let's calculate it

$$
\begin{aligned}
R_{2,1}& =\frac12\Big(R_{1,1}+h_1f(0)\Big) \\
&=\frac12\Big(1.0945744589+1.5\cdot0\Big) \\
&=0.54728722945.
\end{aligned}
$$

Based on the previous calculation, we get
$$R_{2,2}=0.54728722945+\frac{1}{3}(0.54728722945-1.0945744589)=0.364858152967.$$

Let's see what we need to calculate $R_{3,2}$

$$
R_{3,2}=R_{3,1}+\frac13(R_{3,1}-R_{2,1}).
$$

So we see that we need $R_{3,1}$, which we will calculate using the Chomposite Trapezoidal rule

$$
\begin{aligned}
R_{3,1}& =\frac12(R_{2,1}+h_2(f(a+h_3)+f(a+3h_3))) \\
&=\dfrac{1}{2}\left(0.54728722945+0.75\left(f\big(-0.375\big)+f\big(0.375\big)\right)\right) \\
&=\dfrac{1}{2}\Bigg(0.54728722945+0.75\Big(0.176251361+0.1194201492\big)\Bigg) \\
&=0.38452043105.
\end{aligned}
$$

Based on the previous calculation, we can calculate $R_{3,2}$
$$R_{3,2}=0.38452043105+\frac{1}{3}(0.38452043105-0.54728722945)=0.3302648316.$$

Finally, let's calculate $R_{3,3}$

$$R_{3,3}=0.3302648316+\frac{1}{15}\cdot(0.3302648316-0.364858152967) =0.3279586.$$

**c**
Let's define the function
$$
f(x)=(\sin x)^2-2x\sin x+1.
$$
Now let's find $R_{1,1}$ on the interval [1,4]:
$$
\begin{aligned}
R_{1,1}& =\frac32\cdot\left((\sin1)^2-2\sin1+1+(\sin4)^2-8\sin4+1\right)  \\
&=\text{ 11.478452142.}
\end{aligned}
$$
In the problem we need to find $R_{3,3}$ so let's see what we need to calculate it
$$
R_{3,3}=R_{3,2}+\frac{1}{15}\cdot(R_{3,2}-R_{2,2}).
$$
We see that we need $R_{3,2}$ and $R_{2,2}.$ To calculate
$$
R_{2,2}=R_{2,1}+\frac13(R_{2,1}-R_{1,1}).
$$
we need $R_{2,1^{\prime}}$ so let's calculate it
$$
\begin{aligned}
R_{2,1}& =\frac12(R_{1,1}+h_1f(a+h_2))  \\
&=\frac12\Big(11.478452142+3f\Big(\frac52\Big)\Big) \\
&=\frac12(11.478452142-3\cdot1.63419 \\
&=3.28793835105.
\end{aligned}
$$
Based on the previous calculation, we get
$$R_{2,2}=3.28793835105+\frac{1}{3}(3.28793835105-11.478452142)
=0.5577670874.
$$

Let's see what we need to calculate $R_{3,2}$

$$
R_{3,2}=R_{3,1}+\frac13(R_{3,1}-R_{2,1}).
$$
So we see that we need $R_{3,1}$, which we will calculate using the Chomposite Trapezoidal rule
$$
\begin{aligned}
R_{3,1}& =\frac12(R_{2,1}+h_2(f(a+h_3)+f(a+3h_3)))  \\
&=\frac12\Bigg(3.28793835105+1.5\Big(f(1.75)+f(3.25)\Big)\Bigg) \\
&=\frac12(3.28793835105+1.5(-1.4757225+1.7149747) \\
&=1.823408326.
\end{aligned}
$$

Based on the previous calculation, we can calculate $R_{3,2}$

$$
R_{3,2}=1.823408326+\frac{1}{3}(1.823408326-3.28793835105)=1.33523165098.
$$

$$\begin{aligned}
R_{3,3}& =1.33523165098+\frac1{15}\cdot(1.33523165098-0.5577670874)  \\
&=1.387062622.
\end{aligned}$$

**d**
Let's define the function
$$
f(x)=\frac1{x\ln x}.
$$
Now let's find $R_{1,1}$ on the interval $[e,2e]$:



$$
R_{1,1}=\frac e2\Big(\frac1{e\ln e}+\frac1{2e\ln{(2e)}}\Big)=0.6476540273.
$$

In the problem we need to find $R_{3,3}$ so let's see what we need to calculate it

$$
R_{3,3}=R_{3,2}+\frac{1}{15}\cdot(R_{3,2}-R_{2,2}).
$$

We see that we need $R_{3,2}$ and $R_{2,2}.$ To calculate

$$
R_{2,2}=R_{2,1}+\frac{1}{3}(R_{2,1}-R_{1,1}).
$$

we need $R_{2,1}$, so let's calculate it

$$
\begin{aligned}
R_{2,1}& =\frac12(R_{1,1}+h_1f(a+h_2)) \\
&=\frac12{\left(0.6476540273+ef{\left(\frac{3e}2\right)}\right)} \\
&=\frac12(0.6476540273+e\cdot0.174499 \\
&=0.5609964257.
\end{aligned}
$$

Based on the previous calculation, we get
$$R_{2,2}=0.5609964257+\frac{1}{3}(0.5609964257-0.6476540273) =0.5321105585.$$

Let's see what we need to calculate $R_{3,2}$

$$
R_{3,2}=R_{3,1}+\frac13(R_{3,1}-R_{2,1}).
$$

So we see that we need $R_{3,1}$, which we will calculate using the Chomposite Trapezoidal rule

$$
\begin{aligned}
R_{3,1}& =\frac12(R_{2,1}+h_2(f(a+h_3)+f(a+3h_3))) \\
&=\frac12\Bigg(0.5609964257+\frac e2\Big(f\Big(\frac{5e}4\Big)+f\Big(\frac{7e}4\Big)\Big)\Bigg) \\
&=\frac12(0.5609964257+\frac e2(0.240612439+0.13478 \\
&=0.5356089692.
\end{aligned}
$$

Based on the previous calculation, we can calculate $R_{3,2}$
$$R_{3,2}=0.5356089692+\frac{1}{3}(0.5356089692-0.5609964257) =0.5271464837.$$

$$\begin{aligned}
R_{3,3}& =0.5271464837+\frac1{15}\cdot(0.5271464837-0.5321105585)  \\
&=0.5268155.
\end{aligned}$$
## Problem5
![[Pasted image 20231029194848.png]]
*a*
We have
$$
w_{0}=y\left(t_{0}\right)=y(a)=y(1)=1
$$
From the step size
$$
\begin{aligned}h&=\frac{b-a}{N}=\frac{t_N-t_0}{N}=\frac{2-1}{N}\\N&=\frac{1}{h}=\frac{1}{0.1}=10\end{aligned}
$$
With
$$
\begin{aligned}t_i=t_0+ih&=a+ih=1+i(0.1)\\t_i&=1+0.1i.\end{aligned}
$$
Then
$$
\begin{aligned}
f(t,y)=\left[\frac{y}{t}-\left(\frac{y}{t}\right)^2\right]& \Rightarrow f\left(t_i,y_i\right)=\left[\frac{y_i}{t_i}-\left(\frac{y_i}{t_i}\right)^2\right]  \\
&\Rightarrow f\left(t_{i},w_{i}\right)=\left[\frac{w_{i}}{t_{i}}-\left(\frac{w_{i}}{t_{i}}\right)^{2}\right]
\end{aligned}
$$
From equation(1), we get
$$
\left.f\left(t_i,w_i\right)=\frac{w_i}{1+0.1i}-\left(\frac{w_i}{1+0.1i}\right)^2\right.
$$

$\begin{aligned}
\text{Using Euler's difference equation} \\
&\text{} w_{i+1}=w_{i}+hf\left(t_{i},w_{i}\right),\quad i=0,1,\cdots,N-1.  \\
\text{Then from equation (2), we have} \\
&w_{i+1}=w_i+(0.1)\left[\frac{w_i}{1+0.1i}-\left(\frac{w_i}{1+0.1i}\right)^2\right], \\
\end{aligned}$

![[Pasted image 20231108202432.png]]


**b**
We have $$w_0=y\left(t_0\right)=y(a)=y(1)=0$$
From the step size
$$\begin{aligned}h&=\frac{b-a}N=\frac{t_N-t_0}N=\frac{3-1}N\\N&=\frac2h=\frac2{0.2}=10\end{aligned}$$
With
$$\begin{gathered}t_i=t_0+ih=a+ih=1+i(0.2)\\t_i=1+0.2i.\end{gathered}$$
Then
$$\begin{aligned}
f(t,y)=\left[1+\frac{y}{t}+\left(\frac{y}{t}\right)^2\right]& \Rightarrow f\left(t_i,y_i\right)=\left[1+\frac{y_i}{t_i}+\left(\frac{y_i}{t_i}\right)^2\right]  \\
&\Rightarrow f\left(t_i,w_i\right)=\left[1+\frac{w_i}{t_i}+\left(\frac{w_i}{t_i}\right)^2\right]
\end{aligned}$$
From equation (1), we get
$$f\left(t_i,w_i\right)=\left[1+\frac{w_i}{1+0.2i}+\left(\frac{w_i}{1+0.2i}\right)^2\right].$$
Using Euler's difference equation 
$$w_{i+1}=w_i+hf\left(t_i,w_i\right),\quad i=0,1,\cdots,N-1.$$
Then from equation (2), we have
$$\begin{aligned}w_{i+1}&=w_i+(0.2)\left[1+\frac{w_i}{1+0.2i}+\left(\frac{w_i}{1+0.2i}\right)^2\right],\\i&=0,1,\cdots,N-1\\&=0,1,2,3,4,5,6,7,8,9\end{aligned}$$
Result
![[Pasted image 20231108203531.png]]