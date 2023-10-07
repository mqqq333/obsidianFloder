# HM1
## Problem 1
![[Pasted image 20231002234601.png]]
*solotion*
**a**.    
if $f(x_1)$ = $f(x_2)$，so $\exists$ $\xi=x_1$ or $\xi=x_2$
let $f(\xi)=$${f(x_1)+f(x_2)}\over{2}$
if $f(x_1)\neq{f(x_2)}$, without loss of generality, let $f(x_2)>{f(x_1)}$
so ${f(x_1)}<$${f(x_1)+f(x_2)}\over{2}$$<{f(x_2)}$
according to the *intermediate value theorem*
$\exists\xi\in[x_1,x_2]$, $f(\xi)=$${f(x_1)+f(x_2)}\over{2}$=${1}\over{2}$$f(x_1)$ +${1}\over{2}$$f(x_2)$
**b.**
if $f(x_1)=f(x_2)$, $\exists{\xi}={x_1}$ or $\xi={x_2}$, makes $f(\xi)=$${c_1f(x_1)+c_2f(x_2)}\over{c_1+c_2}$
if $f(x_1)\neq{f(x_2)}$, without loss of generality, let $f(x_2)>{f(x_1)}$, 
so${f(x_1)}<$${c_1f(x_1)+c_2f(x_2)}\over{c_1+c_2}$$<f(x_2)$
according to the *intermediate value theorem*
$\exists\xi\in[x_1,x_2]$, $f(\xi)=$${c_1f(x_1)+c_2f(x_2)}\over{c_1+c_2}$
**c.**
let $f(x)=x, x_1=1,x_2 = 2, c_1=1,c_2=-2$,
so ${c_1f(x_1)+c_2f(x_2)}\over{c_1+c_2}$ = 3
there's no ${\xi}{\in}[1,2] {\quad}makes{\quad} f(\xi)=3$
## Problem 2
![[Pasted image 20231006200006.png]]
*solotion*
**a.**
According to Mean Value Theorem 
$|f(x_0)-\tilde{f}(x_0)|$ = $f(x_0)-f(x_0+\varepsilon)$=$f'(\xi){\varepsilon}$, $\xi {\,}\in{\,}(x_0, x_0+{\varepsilon})$
when $\varepsilon{\rightarrow}0$, ${|f'(\xi)|}{\rightarrow}{|f'(x_0)|}$
so the absolute error and the relative error are
$$|f(x_0)-\tilde{f}(x_0)|={f'(x_0)\varepsilon}$$
$${{|f(x_0)-\tilde{f}(x_0)|}\over{f(x_0)}}={{f'(x_0)\varepsilon}\over{f(x_0)}}$$
**b.**
i.
From $f(x)= e^x$, we have that $f'(x)=e^x,f'(x_0)=e,{\varepsilon}=5\times10^{-6}$
so absolute error is $5e\times10^{-6}$
relative error is $5\times10^{-6}$
ii.From $f(x)= sinx$, we have that $f'(x)=cosx,f'(x_0)=cos1,{\varepsilon}=5\times10^{-6}$
so absolute error is $5cos1\times10^{-6}$
relative error is $5cot1\times10^{-6}$
**c.**
i.
From $f(x)= e^x$, we have that $f'(x)=e^10,f'(x_0)=e,{\varepsilon}=5\times10^{-5}$
so absolute error is $5e^{10}\times10^{-5}$
relative error is $5\times10^{-5}$
ii.
From $f(x)= sinx$, we have that $f'(x)=cosx,f'(x_0)cos10e,{\varepsilon}=5\times10^{-5}$
so absolute error is $5cos10\times10^{-5}$
relative error is $5cot10\times10^{-5}$
## Problem 3
![[Pasted image 20231006210615.png]]
*solution*
We have
|     |  a  |  b  |
|:---:|:---:|:---:|
|Exact    |${17}\over{15}$     |${301}\over{660}$     |
|3-digit chopping     |    1.13 |0.445     |
|Relative error     |   0.003  | 0.00233    |
|3-digit rounding     |    1.13 |    0.456 |
|Relative error     |   0.003  |   0.000133  |

## Proble 4
![[Pasted image 20231006235515.png]]
*solution*
**a.**
$F(x) = c_1F_1(x)+c_2F_2(x)=c_1L_1+c_1O(x^{\alpha})+c_2L_2+c_2O(x^{\beta})$
because $\gamma=min\{{\alpha,\beta}\}$
so $c_1O({x}^{\alpha})+c_2O({x}^{\beta})=O({x}^{\gamma})+o({x}^{\gamma})$ 
when $x\rightarrow0, o({x}^{\gamma})=0$
hence $$F(x)=c_1L_1+c_2L_2+O({x}^{\gamma})$$
**b.**
$G(x)=F_1(c_1x)+F_2(c_2x)=L_1+L_2+O(c_1^{\alpha}x^{\alpha})+O(c_2^{\beta}x^{\beta})$
The same as **a.**,$O(c_1^{\alpha}x^{\alpha})+O(c_2^{\beta}x^{\beta})=O({x}^{\gamma})+o({x}^{\gamma})$ 
so $$G(x)=L_1+L_2+O(x^{\gamma})$$

## Problem 5
