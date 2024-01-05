function [powerMold1,powerEigVector]=PowerMethod(mat)
itTimes=1;  %  迭代次数
n=length(mat); 
powerInitVector= ones(n,1);  %  初始向量归一化
powerEigVector=zeros(n,1);  %  初始特征向量为0向量
powerTol=10-12;  %  误差限
maxIt=10000;  %  最大迭代次数
powerErr=10;  %  初始误差
powerMold1=1; %  特征值模初始化为1
powerMold2=1;

 while powerErr>powerTol && (itTimes <= maxIt)  %Calculating the greatest eigenvalue and the corresponding eigenvector.
   powerEigVector=mat*powerInitVector;  %  矩阵乘以当前向量，得到新向量
   powerMold2=max(abs(powerEigVector));  %  计算向量模的最大值
   powerInitVector=powerEigVector/powerMold2;  %  归一化新向量 
   powerErr=abs(powerMold1-powerMold2);  %  误差
   powerMold1=powerMold2;  %  更新特征值的模
   itTimes=itTimes+1;  %  迭代次数加1
 end
end