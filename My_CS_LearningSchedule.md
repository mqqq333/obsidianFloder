# Messing-semester

## Vim

### 如何学习 Vim

-   先阅读[这篇 tutorial](https://missing.csail.mit.edu/2020/editors/)，掌握基本的 Vim 概念和使用方式。
-   用 Vim 自带的 `vimtutor` 进行练习，安装完 Vim 之后直接在命令行里输入 `vimtutor` 即可进入练习程序。
-   最后就是强迫自己使用 Vim 进行开发，IDE 里可以安装 Vim 插件。
-   等你完全适应 Vim 之后新的世界便向你敞开了大门，你可以按需配置自己的 Vim（修改 `.vimrc` 文件），网上有数不胜数的资源可以借鉴。
-   如果你想对配置 Vim 有更加深入的了解，[_Learn Vim Script the Hard Way_](https://learnvimscriptthehardway.stevelosh.com/) 是一个很好的资源。

### 关于键位映射

用 Vim 编辑代码的时候会频繁用到 ESC 和 CTRL 键, 但是这两个键都离 home row 很远, 可以把 CapsLock 键映射到 Esc 或者 Ctrl 键，让手更舒服一些。

Windows 系统可以使用 [Powertoys](https://learn.microsoft.com/en-us/windows/powertoys/) 或者 [AutoHotkey](https://www.autohotkey.com/) 重映射键位。  
MacOS 系统提供了重映射键位的[设置](https://vim.fandom.com/wiki/Map_caps_lock_to_escape_in_macOS)，另外也可以使用 [Karabiner-Elements](https://karabiner-elements.pqrs.org/) 重映射。

但更佳的做法是同时将 CapsLock 映射为 Ctrl 和 Esc，点按为 Esc，按住为 Ctrl。

Windows 系统下，这个[AutoHotKey gist](https://gist.github.com/sedm0784/4443120) 实现了这个功能。  
MacOS 可以导入这个[karabiner rule](https://ke-complex-modifications.pqrs.org/#caps_lock_tapped_escape_held_left_control) 重映射。

### 推荐参考资料

-   Neil, Drew. Practical Vim: Edit Text at the Speed of Thought. N.p., Pragmatic Bookshelf, 2015.
-   Neil, Drew. Modern Vim: Craft Your Development Environment with Vim 8 and Neovim. United States, Pragmatic Bookshelf.


## Git

### 如何学习 Git


1.  阅读这篇 [Git tutorial](https://missing.csail.mit.edu/2020/version-control/)，视频的话可以看这个[尚硅谷Git教程](https://www.bilibili.com/video/BV1vy4y1s7k6)
2.  阅读这本开源书籍 [Pro Git](https://git-scm.com/book/en/v2) 的 Chapter1 - Chapter5，是的没错，学 Git 需要读一本书（捂脸）。
3.  此时你已经掌握了 Git 的原理和绝大部分用法，接下来就可以在实践中反复巩固 Git 的命令了。但用好它同样是一门哲学，我个人觉得这篇[如何写好 Commit Message](https://chris.beams.io/posts/git-commit/) 的博客非常值得一读。
4.  好的此时你已经爱上了 Git，你已经不满足于学会它了，你想自己实现一个 Git！巧了，我当年也有这样的想法，[这篇 tutorial](https://wyag.thb.lt/) 可以满足你！
5.  什么？光实现一个 Git 无法满足你？小伙子/小仙女有前途，巧的是我也喜欢造轮子，这两个 GitHub 项目 [build-your-own-x](https://github.com/danistefanovic/build-your-own-x) 和 [project-based-learning](https://github.com/tuvtran/project-based-learning) 收录了你能想到的各种造轮子教程，比如：自己造个编辑器、自己写个虚拟机、自己写个 docker、自己写个 TCP 等等等等。


## Github
### 如何使用 GitHub

如果你还从未在 GitHub 上建立过自己的远程仓库，也没有克隆过别人的代码，那么我建议你从 [GitHub的官方教程](https://docs.github.com/cn/get-started)开始自己的开源之旅。

如果你想时刻关注 GitHub 上一些有趣的开源项目，那么我向你重磅推荐 [HelloGitHub](https://hellogithub.com/) 这个网站以及它的同名微信公众号。它会定期收录 GitHub 上近期开始流行的或者非常有趣的开源项目，让你有机会第一时间接触各类优质资源。

GitHub 之所以成功，我想是得益于“我为人人，人人为我”的开源精神，得益于知识分享的快乐。如果你也想成为下一个万人敬仰的开源大佬，或者下一个 star 破万的项目作者。那就把你在开发过程中灵感一现的 idea 化作代码，展示在 GitHub 上吧～

不过需要提醒的是，开源社区不是法外之地，很多开源软件并不是可以随意复制分发甚至贩卖的，了解各类[开源协议](https://www.runoob.com/w3cnote/open-source-license.html)并遵守，不仅是法律的要求，更是每个开源社区成员的责任。

## GNU Make

### 如何学习 GNU Make

这里有一篇写得深入浅出的[文档](https://seisman.github.io/how-to-write-makefile/overview.html)供大家参考。

GNU Make 掌握起来相对容易，但用好它需要不断的练习。将它融入到自己的日常开发中，勤于学习和模仿其他优秀开源项目里的 `Makefile` 的写法，总结出适合自己的 template，久而久之，你对 GNU Make 的使用会愈加纯熟。

## CMake

### 如何学习 CMake

`CMakeLists.txt` 比 `Makefile` 更为抽象，理解和使用难度也更大。现阶段很多 IDE (如 Visual Studio, CLion) 提供了自动生成 `CMakeLists.txt` 的功能，但掌握 `CMakeLists.txt` 的基本用法仍然很有必要。除了 [CMake 官方 Tutorial](https://cmake.org/cmake/help/latest/guide/tutorial/index.html) 外，上海交通大学 IPADS 组新人培训也提供了[大约一小时的视频教程](https://www.bilibili.com/video/BV14h41187FZ)。

## LaTeX

### 如何学习 LaTeX

推荐的学习路线如下：

-   LaTeX 的环境配置是个比较头疼的问题。如果你本地配置 LaTeX 环境出现了问题，可以考虑使用 [Overleaf](https://www.overleaf.com/) 这个在线 LaTeX 编辑网站。站内不仅有各种各样的 LaTeX 模版供你选择，还免去了环境配置的难题。
-   阅读下面三篇 Tutorial: [Part-1](https://www.overleaf.com/latex/learn/free-online-introduction-to-latex-part-1), [Part-2](https://www.overleaf.com/latex/learn/free-online-introduction-to-latex-part-2), [Part-3](https://www.overleaf.com/latex/learn/free-online-introduction-to-latex-part-3)。
-   学习 LaTeX 最好的方式当然是写论文，不过从一门数学课入手用 LaTeX 写作业也是一个不错的选择。

其他值得推荐的入门学习资料如下：

-   一份简短的安装 LaTeX 的介绍 [[GitHub](https://github.com/OsbertWang/install-latex-guide-zh-cn)] 或者 TEX Live 指南（texlive-zh-cn）[[PDF](https://www.tug.org/texlive/doc/texlive-zh-cn/texlive-zh-cn.pdf)] 可以帮助你完成安装和环境配置过程
-   一份（不太）简短的 LaTeX2ε 介绍（lshort-zh-cn）[[PDF](https://mirrors.ctan.org/info/lshort/chinese/lshort-zh-cn.pdf)] [[GitHub](https://github.com/CTeX-org/lshort-zh-cn)] 是由 CTEX 开发小组翻译的，可以帮助你快速准确地入门，建议通读一遍
-   刘海洋的《LaTeX 入门》，可以当作工具书来阅读，有问题再查找，跳过 CTEX 套装部分
-   [现代 LaTeX 入门讲座](https://github.com/stone-zeng/latex-talk)
-   [一份其实很短的 LaTeX 入门文档](https://liam.page/2014/09/08/latex-introduction/)


## Docker

### 如何学习 Docker

[Docker 官方文档](https://docs.docker.com/)当然是最好的初学教材，但最好的导师一定是你自己——尝试去使用 Docker 才能享受它带来的便利。Docker 在工业界发展迅猛并已经非常成熟，你可以下载它的桌面端并使用图形界面。

当然，如果你像我一样，是一个疯狂的造轮子爱好者，那不妨自己亲手写一个[迷你 Docker](https://github.com/PKUFlyingPig/rubber-docker) 来加深理解。

[KodeKloud Docker for the Absolute Beginner](https://kodekloud.com/courses/docker-for-the-absolute-beginner/) 全面的介绍了 Docker 的基础功能，并且有大量的配套练习，同时提供免费的云环境来完成练习。其余的云相关的课程如 Kubernetes 需要付费，但个人强烈推荐：讲解非常仔细，适合从 0 开始的新手；有配套的 Kubernetes 的实验环境，不用被搭建环境劝退。