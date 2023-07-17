- write out 5 ideas

- choose 2 to share with everyone

- discuss the shared ideas

- no limits! no silly ideas! share ALL and we'll try to pick one.

------------------------

Using HCP:

1 - compare network connectivity in resting state vs during a task

2 - map stimulus representations in different brain areas during working memory

3 - compare activity/connectivity between different working memory load conditions (0-back, 1-back, 2-back)

4 - compare network connectivity/task-based activity between age groups/other subgroups we can define (e.g. substance users,)

5 - compare brain connectivity vs activity in specific regions as predictors of behavior performance on the n-back task

  

2-compare between

3-

4-

5-

  

1- compare between gambling (rewarding system) and relational data accuracy of patients

2- effect of emotions on the relational task activity

  

1- connection between the perception of a new language and an emotional state?

2- motor measures of gambling behavior for different groups

  

using HCP:

1- mapping functional connectivity in gambling behavior, can also consider effect of substance use / emotional state

2- gender differences in social cognition/language processing (but not sure how to model?

3- attractor model of decision making in gambling (not sure if its possible and how to use this data set


当你坐在火车上，看着窗外的另一列火车时，你会产生火车幻觉。突然，另一列火车似乎在移动，也就是说，你体验到了另一列火车相对于你的火车的视觉运动。但到底是哪列火车在行驶呢？
人们常常有错误的认识。特别是，他们认为他们自己的火车可能在移动，而另一列火车在移动，反之亦然。一旦你获得了周围环境的视觉，让你消除了相对运动的歧义，或者如果你经历了强烈的振动，表明确实是你自己的火车在运动，这个错觉通常会被解决。
我们为我们的演示项目提出了以下(任意)问题: “噪音前庭对运动的估计是如何导致对自我运动的错觉感知的?”

当你坐在火车上，看着窗外的另一列火车时，你会产生火车幻觉。突然，另一列火车似乎在移动，也就是说，你体验到了另一列火车相对于你的火车的视觉运动。但到底是哪列火车在行驶呢？
人们经常把这个搞混。特别是，他们认为他们自己的火车可能在移动，而另一列火车在移动，反之亦然。一旦你获得了周围环境的视觉，让你消除了相对运动的歧义，或者如果你经历了强烈的振动，表明确实是你自己的火车在运动，这个错觉通常会被解决。
我们假设我们已经构建了列车错觉模型(参见另一个示例项目 colab)。该模型预测，来自前庭信号的累积感觉证据决定了是否经历自我运动的决定。我们现在有了前庭神经元的数据(在我们的例子中是模拟的，但是让我们假设一下) ，并且想看看这个预测是否正确。
这些数据包含 N 个神经元和3个运动条件中的每一个的 M 个试验: 无自我运动，缓慢加速自我运动和更快加速自我运动。在我们的数据中，N = 40，M = 400。
因此，我们可以提出以下问题: “累积的前庭神经元活动是否与自我运动判断相关?”