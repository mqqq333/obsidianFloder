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
