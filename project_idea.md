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


**

# Modeling steps:

1. Asking your own question

What exact aspect of data needs modeling?

- Activity of different brain regions modulated by visual working memory load
    
- The role of the n-back visual working memory load task on functional brain connectivity
    
- Functional connectivity  between the visual stimulus of working memory at 0-/2- back load and activity in  brain regions
    
- The contrast of average BOLD signal under different conditions (meaning load/ stim type)
    
- average brain activity difference of 0-back trial in comparison to 2-back trial using various visual stimuli and as well as functional connectivity difference in the 2 loads (we have the error and zero trial which still don't want to address yet)
    

Also identify aspects of data that you do not want to address (yet)

- Our starting question can be: Which brain regions support n-back task performance when the memory load increases in correct 2-back trials compared to correct 0-back trials regardless of stimulus type?
    
-  determine the regions of the brain that are active with the correct n-back, train the model on parts of the data and then use activity in a subset of regions to predict if we have a correct or error;
    
-  Question would be: How does activity in specific regions predict working memory performance on 0-back vs 2-back trials?
    
- Approach: Logistic regression
    
- Evaluate model: based on predictive performance, i.e. how correctly can it classify trials
    

Define an evaluation method!

- How will you know your modeling is good?
    
- E.g., comparison to specific data (quantitative method of comparison?)
    

- For computational models: think of an experiment that could test your model
    

- You essentially want your model to interface with this experiment, i.e. you want to simulate this experiment
    

  

2.  Understanding the state of the art & background

- Survey the literature
    

- What’s known?
    
- What has already been done?
    
- Previous models as a starting point?
    
- What hypotheses have been emitted in the field?
    
- Are there any alternative / complementary modeling approaches?
    

- What skill sets are required?
    

- Do I need to learn something before I can start?
    
- Ensure that no important aspect is missed
    

- Potentially provides specific data sets / alternative modeling approaches for comparison
    

The frontal and parietal cortical regions are known to be activated during the n-back task.

Is confirmed a critical role for left lateral prefrontal cortex in letter 2-back performance  ([Lesion Evidence That Two Distinct Regions within Prefrontal Cortex are Critical for n-Back Performance in Humans | Journal of Cognitive Neuroscience | MIT Press](https://direct.mit.edu/jocn/article-abstract/21/12/2263/4748/Lesion-Evidence-That-Two-Distinct-Regions-within?redirectedFrom=fulltext))

The delay period was associated with increases in frontal and occipital region amplitude.([Exploring the temporal dynamics of the spatial working memory n-back task using steady state visual evoked potentials (SSVEP) - ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S1053811906001121?via%3Dihub))

  

3. Determining the basic ingredients  - input/output??

1. What parameters / variables are needed?
    

- Design matrix with trial types
    
- Preprocessed fMRI data for all runs  
    
- Accuracy level
    

3. Variables needed to describe the process to be modeled?
    

- What can be observed / measured? latent variables?  [contrast of given conditions - like Mia start to code]
    
- Accuracy of determining correct vs error – output
    
- Where do these variables come from?
    
- Do any abstract concepts need to be instantiated as variables?
    

- E.g. value, utility, uncertainty, cost, salience, goals, strategy, plant, dynamics
    
- Instantiate them so that they relate to potential measurements!
    

Hypothesis:

Using  linear regression model, fMRI activity in (...) regions could determine the performance of HCP subjects in the n-back trials

  

# Must read: 

about the HCP dataset [https://compneuro.neuromatch.io/projects/fMRI/README.html](https://compneuro.neuromatch.io/projects/fMRI/README.html) 

Videos of HCP dataset [https://www.youtube.com/watch?v=nssSiCmbjxw](https://www.youtube.com/watch?v=nssSiCmbjxw)  [https://www.youtube.com/watch?v=iOCcY0QFMS4](https://www.youtube.com/watch?v=iOCcY0QFMS4) 

  

Using HCP:

[Working memory research questions - updated  
  
](https://docs.google.com/presentation/d/1DUSXID8fd5pF_bHTkY4HcrV8sfpYj5OH1yf1uW3qffo/edit?usp=sharing)

Literature: 

1. [Functional Connectivity Within and Between n-Back Modulated Regions: An Adult Lifespan Psychophysiological Interaction Investigation](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7984940/)
    
2. [N-back working memory paradigm: A meta-analysis of normative functional neuroimaging studies](https://onlinelibrary.wiley.com/doi/abs/10.1002/hbm.20131)
    
3. Exploring brain-behavior relationships in the N-back task
    
4. [Reporting and interpreting working memory performance in n-back tasks](https://www.frontiersin.org/articles/10.3389/fpsyg.2017.00352/full)
    

  

# Important resources:

1. [Connectome - HCP 3T Task fMRI Protocol Overview (humanconnectome.org)](https://www.humanconnectome.org/hcp-protocols-ya-task-fmri) (describe each task test and how were they performed)
    
2. [Bayesian network mediation analysis with application to the brain functional connectome - PubMed (nih.gov)](https://pubmed.ncbi.nlm.nih.gov/35795965/)
    
3. Analysis overview paper: [https://www.frontiersin.org/articles/10.3389/fnins.2016.00515/full](https://www.frontiersin.org/articles/10.3389/fnins.2016.00515/full)
    

  
  

—--------------------------------------------------------------------------------------------

Abstract concept

Neural network of working memory has been well defined.

The n‐back task is a classical paradigm for functional neuroimaging studies of working memory.

It examines both variants of load and stimulus type.

Functional connectivity generally increases with load.

Stimulus representation localizes in different brain region due to stimulus type.

We propose to investigate:

**