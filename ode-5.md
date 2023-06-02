![[0de-5-1.jpg]]

![[0de-5-2.jpg]]

![[0de-5-3.jpg]]

![[0de-5-4.jpg]]

![[0de-5-5.jpg]]

![[0de-5-6.jpg]]

To find the residue of $f(z) = \sin\left(\frac{z}{z-1}\right)$ at $z_0=1$, we can use the formula for the residue of a function at a simple pole:

$$
\text{Res}_{z=z_0} f(z) = \lim_{z\to z_0} (z-z_0) f(z)
$$

First, let's simplify the expression for $f(z)$ by using the Taylor series expansion for $\sin z$:

$$
\begin{aligned}
f(z) &= \sin\left(\frac{z}{z-1}\right) \\
&= \sum_{n=0}^\infty (-1)^n \frac{1}{(2n+1)!} \left(\frac{z}{z-1}\right)^{2n+1} \\
&= \frac{z}{z-1} - \frac{1}{3!}\frac{z^3}{(z-1)^3} + \frac{1}{5!}\frac{z^5}{(z-1)^5} - \cdots
\end{aligned}
$$

We can see that the Laurent series expansion of $f(z)$ around $z_0=1$ has a pole of order $3$ (since the lowest power of $(z-1)$ in the expansion is $-3$). Therefore, we can write:

$$
f(z) = \frac{a_{-3}}{(z-1)^3} + \frac{a_{-2}}{(z-1)^2} + \frac{a_{-1}}{z-1} + a_0 + a_1(z-1) + a_2(z-1)^2 + \cdots
$$

where $a_{-3}$ is the residue we want to find. Since $f(z)$ has a simple pole at $z_0=1$, we can use the formula above to find the residue:

$$
\begin{aligned}
\text{Res}_{z=1} f(z) &= \lim_{z\to 1} (z-1) f(z) \\
&= \lim_{z\to 1} \frac{z-1}{(z-1)^3} \left(\frac{z}{z-1} - \frac{1}{3!}\frac{z^3}{(z-1)^2} + \frac{1}{5!}\frac{z^5}{(z-1)^4} - \cdots\right) \\
&= \lim_{z\to 1} \frac{1}{(z-1)^2} \left(\frac{z}{1} - \frac{1}{3!}\frac{z^3}{1} + \frac{1}{5!}\frac{z^5}{1} - \cdots\right) \\
&= \frac{-1}{3!} \\
&= \boxed{-\frac{1}{6}}
\end{aligned}
$$

Therefore, the residue of $f(z)$ at $z_0=1$ is $-\frac{1}{6}$. Since $z_0=1$ is not an essential singularity, we can say that it is a simple pole.





对于 $f(z)=\sin\left(\frac{z}{z-1}\right)$，我们可以看到 $z_0=1$ 是一个本性奇点，因为 $f(z)$ 在 $z_0=1$ 的邻域内有无穷多个奇异点。

在这种情况下，我们可以使用 Laurent 级数展开来计算 $f(z)$ 在 $z_0=1$ 的留数。具体来说，我们要找到 $f(z)$ 在 $z_0=1$ 的主部的最高阶项，然后取其倒数即可得到留数。

首先，我们可以使用泰勒级数展开 $\sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \cdots$ 来将 $f(z)$ 展开成幂级数的形式：

$$
\begin{aligned}
f(z) &= \sin\left(\frac{z}{z-1}\right) \\
&= \sum_{n=0}^\infty (-1)^n \frac{1}{(2n+1)!} \left(\frac{z}{z-1}\right)^{2n+1} \\
&= \sum_{n=0}^\infty (-1)^n \frac{1}{(2n+1)!} \left(\frac{1}{1-z}\right)^{2n+1} z^{2n+1}
\end{aligned}
$$

现在，我们需要找到 $f(z)$ 在 $z_0=1$ 的主部的最高阶项。由于 $z_0=1$ 是一个本性奇点，因此 $f(z)$ 在 $z_0=1$ 的邻域内无法展开成有限次幂级数的形式。但我们可以使用一个技巧来找到主部的最高阶项。

我们将 $f(z)$ 中的 $\frac{1}{1-z}$ 转化成 $\frac{1}{z-1}$，然后将幂级数展开式中的 $z$ 替换成 $z-1$：

$$
\begin{aligned}
f(z) &= \sum_{n=0}^\infty (-1)^n \frac{1}{(2n+1)!} \left(\frac{1}{z-1}\right)^{2n+1} (z-1)^{2n+1} \\
&= \sum_{n=0}^\infty (-1)^n \frac{1}{(2n+1)!} \sum_{k=0}^{2n+1} \binom{2n+1}{k} (-1)^k z^{2n+1-k}
\end{aligned}
$$

现在，我们可以看到 $f(z)$ 在 $z_0=1$ 的主部的最高阶项为 $-\frac{1}{z-1}$。因此，$f(z)$ 在 $z_0=1$ 的留数为 $-1$。




首先，我们需要找到函数f(z) = sin(z / (z - 1))在z = 1附近的洛朗级数。我们注意到当z趋近于1时，分母趋近于0，这意味着z = 1是一个奇点。为了找到z = 1附近的洛朗级数，我们可以先进行变量替换。令w = z - 1，则z = w + 1，那么原函数可以表示为：

f(w) = sin((w + 1) / w)

接下来，我们尝试将sin((w + 1) / w)展开为泰勒级数。sin(x)的泰勒级数表示如下：

sin(x) = x - x^3/3! + x^5/5! - x^7/7! + ...

代入x = (w + 1) / w，我们可以得到：

sin((w + 1) / w) = (w + 1) / w - ((w + 1) / w)^3/3! + ((w + 1) / w)^5/5! - ((w + 1) / w)^7/7! + ...

为了找到留数，我们需要将上述级数表示为洛朗级数的形式。我们可以对每一项进行展开：

1 - (w + 1)^3 / (3! w^3) + (w + 1)^5 / (5! w^5) - (w + 1)^7 / (7! w^7) + ...

然后，我们需要找到洛朗级数中w的-1次幂的系数，这就是留数。

观察上述展开式，我们注意到只有第一项有w的-1次幂。因此，留数为：

Res(f(z), z = 1) = 1

所以，f(z) = sin(z / (z - 1))在z0 = 1处的留数为1。


对于 $f(z)=\sin\left(\frac{z}{z-1}\right)$，我们可以看到 $z_0=1$ 是一个本性奇点，因为 $f(z)$ 在 $z_0=1$ 的邻域内有无穷多个奇异点。

在这种情况下，我们需要使用留数定理来计算 $f(z)$ 在 $z_0=1$ 的留数。由于 $z_0=1$ 是一个本性奇点，我们需要使用留数定理的广义形式：

$$
\text{Res}_{z=z_0} f(z) = \frac{1}{(m-1)!} \lim_{z\to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[(z-z_0)^m f(z)\right]
$$

其中 $m$ 是 $f(z)$ 在 $z_0$ 处的奇点阶数。在这种情况下，$m=\infty$，因此我们需要对 $f(z)$ 进行无穷阶求导。

首先，我们可以使用泰勒级数展开 $\sin z = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \cdots$ 来将 $f(z)$ 展开成幂级数的形式：

$$
\begin{aligned}
f(z) &= \sin\left(\frac{z}{z-1}\right) \\
&= \sum_{n=0}^\infty (-1)^n \frac{1}{(2n+1)!} \left(\frac{z}{z-1}\right)^{2n+1} \\
&= \sum_{n=0}^\infty (-1)^n \frac{1}{(2n+1)!} \left(\frac{1}{1-z}\right)^{2n+1} z^{2n+1}
\end{aligned}
$$

现在，我们需要对 $f(z)$ 进行无穷阶求导。为了方便计算，我们将 $f(z)$ 中的 $\frac{1}{1-z}$ 转化成 $\frac{1}{z-1}$，然后将幂级数展开式中的 $z$ 替换成 $z-1$：

$$
\begin{aligned}
f(z) &= \sum_{n=0}^\infty (-1)^n \frac{1}{(2n+1)!} \left(\frac{1}{z-1}\right)^{2n+1} (z-1)^{2n+1} \\
&= \sum_{n=0}^\infty (-1)^n \frac{1}{(2n+1)!} \sum_{k=0}^{2n+1} \binom{2n+1}{k} (-1)^k z^{2n+1-k}
\end{aligned}
$$

现在，我们可以对 $f(z)$ 进行无穷阶求导。为了计算方便，我们只对 $f(z)$ 中的 $z^{2n+1}$ 项求导。注意到：

$$
\frac{d}{dz} \left[z^{2n+1}\right] = (2n+1) z^{2n}
$$

因此，对 $f(z)$ 中的 $z^{2n+1}$ 项求一阶导数后得到：

$$
\begin{aligned}
\frac{d}{dz} \left[(-1)^n \frac{1}{(2n+1)!} \binom{2n+1}{k} (-1)^k z^{2n+1-k}\right] &= (-1)^n \frac{1}{(2n+1)!} \binom{2n+1}{k} (-1)^k (2n+1-k) z^{2n-k} \\
&= (-1)^n \frac{1}{(2n+1-k)!} \binom{2n+1}{k} (-1)^k z^{2n-k}
\end{aligned}
$$

我们可以继续对这个式子求导，得到：

$$
\begin{aligned}
\frac{d^m}{dz^m} \left[(-1)^n \frac{1}{(2n+1)!} \binom{2n+1}{k} (-1)^k z^{2n+1-k}\right] &= (-1)^n \frac{1}{(2n+1-k-m+1)!} \binom{2n+1}{k} (-1)^k z^{2n+1-k-m+1} \\
&= (-1)^n \frac{1}{(2n+2-m-k)!} \binom{2n+1}{k} (-1)^k z^{2n+2-m-k}
\end{aligned}
$$

我们可以看到，$f(z)$ 在 $z_0=1$ 处的留数为：

$$
\text{Res}_{z=1} f(z) = \lim_{z\to 1} \frac{d^{\infty}}{dz^{\infty}} \left[(z-1)^{\infty} f(z)\right] = \lim_{z\to 1} \sum_{n=0}^\infty (-1)^n \frac{1}{(2n+2)!} \binom{2n+1}{n} z^{n+1} = -1
$$

因此，$f(z)$ 在 $z_0=1$ 处的留数为 $-1$。