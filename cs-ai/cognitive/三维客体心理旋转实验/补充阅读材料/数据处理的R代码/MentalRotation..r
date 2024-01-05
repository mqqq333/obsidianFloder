OriginalDataFile="C:/0.csv"
ProcessedDataFile="C:/1.csv"
ExptTrials=1000
nCondSamples=25#单个条件重复次数

expt=read.csv(OriginalDataFile,nrows=ExptTrials)#从外部文件读取前1000行数据
expt$X=NULL #VB程序设计的问题，因此多一列
arrPlane=array(0,dim=c(nCondSamples,10,2))#初始化全零矩阵，加快速度
arrDepth=array(0,dim=c(nCondSamples,10,2))#初始化全零矩阵，加快速度
#条件选择 
expt$SD=((expt$ISSame=="Same") & (expt$DimentionType=="Depth"))#相同且为深度对
expt$SP=((expt$ISSame=="Same") & (expt$DimentionType=="Plane"))#相同且为平面对
for (i in 0:9)
{
	arrDepth[,i+1,1]=expt$ReactionTime[(expt$RotateDegrees%/%20==i) & (expt$SD==T)]#记录反应时
	arrPlane[,i+1,1]=expt$ReactionTime[(expt$RotateDegrees%/%20==i) & (expt$SP==T)]#记录反应时

	arrDepth[,i+1,2]=expt$ID[(expt$RotateDegrees%/%20==i) & (expt$SD==T)]#记录ID
	arrPlane[,i+1,2]=expt$ID[(expt$RotateDegrees%/%20==i) & (expt$SP==T)]#记录ID
}
expt$SD=NULL
expt$SP=NULL

#剔除3个标准差以外的数据---Start---
tDistBound<-function(dSig,nSample)#t分布
{
    qt(1-dSig/2, nSample-2) * sqrt(nSample / (nSample-1))
}
CountElements<-function(EMatrix)#计算非NA的原始个数
{
   na.mat=is.na(EMatrix)
   apply(!na.mat,2,sum)
}
while(1)
{
  
  ZScore_Plane=scale(arrPlane[,,1])
  OutlierBound_Plane=array(0,dim=c(nCondSamples,10))#初始化全零矩阵，加快速度
  OutlierBound_Plane=t(replicate(nCondSamples,tDistBound(0.01,CountElements(arrPlane[,,1]))))#采用更精确的t分布的剔除
  if (length(which(abs(ZScore_Plane)>OutlierBound_Plane))==0) 
  {
    break  
  }
  else
  {
    arrPlane[which(abs(ZScore_Plane)>OutlierBound_Plane)]=NA
  }
}
while(1)
{
  
  ZScore_Depth=scale(arrDepth[,,1])
  OutlierBound_Depth=array(0,dim=c(nCondSamples,10))#初始化全零矩阵，加快速度
  OutlierBound_Depth=t(replicate(nCondSamples,tDistBound(0.01,CountElements(arrDepth[,,1]))))#采用更精确的t分布的剔除
  if (length(which(abs(ZScore_Depth)>OutlierBound_Depth))==0)
  {
    break
  }
   else
  {
      arrDepth[which(abs(ZScore_Depth)>OutlierBound_Depth)]=NA
  }
}

OutliersIndex_Plane=which(is.na(arrPlane),arr.ind = T)#取出平面反应时极端值的下标
OutliersIndex_Plane[,3]=2
OutliersIndex_Depth=which(is.na(arrDepth),arr.ind = T)#取出深度反应时极端值的下标
OutliersIndex_Depth[,3]=2

#被剔除数据的下标
expt$Eliminated[1:ExptTrials]=FALSE
expt$Eliminated[arrDepth[OutliersIndex_Depth]]=TRUE
expt$Eliminated[arrPlane[OutliersIndex_Plane]]=TRUE
#剔除3个标准差以外的数据---End---

#反应时分布查看---Start
DistrbutionRT<-function(RTvector,Percentile)
{
  RTvector=RTvector[!is.na(RTvector)]
  RTArray=sort(rep(RTvector,Percentile))#升序排列
  dim(RTArray)=c(length(RTvector),Percentile)
  apply(RTArray,2,mean)
}
nDeltaPercentile=10 #百分位数
YaxisLabel=(1:nDeltaPercentile)*(100/nDeltaPercentile)

#打开图形设备
tiff("C:/2.tif",width=1024,height=768,compression="lzw")
PercentileRT=array(0,dim=c(nDeltaPercentile,10))
for(i in 1:10)
{
  PercentileRT[,i]=DistrbutionRT(arrPlane[,i,1],nDeltaPercentile)
}
RTInterval=floor(max(PercentileRT))%/% 500+1

par(bg=gray(0.96),cex.main = 1.2,lty="solid",ann=F,lwd=1.5)#设置背景色
plot(c(500,RTInterval*500),c(1,nDeltaPercentile),axes=F,type="n")
for(i in 1:10)
{
  lines(PercentileRT[,i],1:nDeltaPercentile,lty="dotted")
  points(PercentileRT[,i],1:nDeltaPercentile,pch=3)
  text(PercentileRT[(dim(PercentileRT)[1]/10)*i,i],(dim(PercentileRT)[1]/10)*i,sprintf("%s°",(i-1)*20),col="red",cex=1)
}
axis(1,xaxp=c(500,RTInterval*500,RTInterval-1))
axis(2,1:nDeltaPercentile,paste(YaxisLabel,'%',sep=''),las=2)
box()
title(main="各旋转角度的反应时分布图(平面)",xlab="反应时(毫秒)",ylab="百分位点")
dev.off()

#打开图形设备
tiff("C:/3.tif",width=1024,height=768,compression="lzw")
PercentileRT=array(0,dim=c(nDeltaPercentile,10))
for(i in 1:10)
{
  PercentileRT[,i]=DistrbutionRT(arrDepth[,i,1],nDeltaPercentile)
}
RTInterval=floor(max(PercentileRT))%/% 500+1

par(bg=gray(0.96),cex.main = 1.2,lty="solid",ann=F,lwd=1.5)#设置背景色
plot(c(500,RTInterval*500),c(1,nDeltaPercentile),axes=F,type="n",xaxp=c(500,RTInterval*500,3),yaxp=c(1,10,9))
for(i in 1:10)
{
  lines(PercentileRT[,i],1:nDeltaPercentile,lty="solid")
  points(PercentileRT[,i],1:nDeltaPercentile,pch=3)
  text(PercentileRT[(dim(PercentileRT)[1]/10)*i,i],(dim(PercentileRT)[1]/10)*i,sprintf("%s°",(i-1)*20),col="blue",cex=1)
}
axis(1,xaxp=c(500,RTInterval*500,RTInterval-1))
axis(2,1:nDeltaPercentile,paste(YaxisLabel,'%',sep=''),las=2)
box()
title(main="各旋转角度的反应时分布图(深度)",xlab="反应时(毫秒)",ylab="百分位点")
dev.off()
PercentileRT=NULL
#反应时分布查看---End





RotateDegreesArray=sort(unique(expt$RotateDegrees),decreasing=F)#统计旋转角度
DepthRT.mean=apply(arrDepth[,,1],2,mean,na.rm=T)#统计深度旋转平均反应时
PlaneRT.mean=apply(arrPlane[,,1],2,mean,na.rm=T)#统计平面旋转平均反应时
DepthRT.sd=apply(arrDepth[,,1],2,sd,na.rm=T)#统计深度旋转反应时标准差
PlaneRT.sd=apply(arrPlane[,,1],2,sd,na.rm=T)#统计平面旋转反应时标准差

#单侧还是双侧标准误，一般是双侧标准误，所以要除以2
dSESig=0.05#正好两边0.05
DepthRT.se=qt(1-dSESig/2,nCondSamples)*(DepthRT.sd/sqrt(nCondSamples))#统计深度旋转反应时标准误
PlaneRT.se=qt(1-dSESig/2,nCondSamples)*(PlaneRT.sd/sqrt(nCondSamples))#统计平面旋转反应时标准误

#计算线性回归
LinearModel_Plane=lm(DepthRT.mean~RotateDegreesArray)
LinearModel_Depth=lm(PlaneRT.mean~RotateDegreesArray)
Intercept_Plane=LinearModel_Plane$coefficients[1]
Intercept_Depth=LinearModel_Depth$coefficients[1]
VarCoef_Plane=LinearModel_Plane$coefficients[2]
VarCoef_Depth=LinearModel_Depth$coefficients[2]
Equation_Plane=sprintf("Linear Regression Model:RT(PlaneRotation)=%3.2f×RotateDegrees+%3.2f\n",VarCoef_Plane,Intercept_Plane)
Equation_Depth=sprintf("Linear Regression Model:RT(DepthRotation)=%3.2f×RotateDegrees+%3.2f\n",VarCoef_Depth,Intercept_Depth)

#打开图形设备
tiff("C:/1.tif",width=1024,height=768,compression="lzw")
#设置图形绘制参数
par(bg=gray(0.96),cex.main = 1.2,lty="solid",lwd=1.5,ann=FALSE,mfrow=c(1,1))#设置背景色
Xtickmark=c(0,180,9)
RTInterval=floor(max(c(DepthRT.mean,PlaneRT.mean))%/%500)+2
Ytickmark=c(500,RTInterval*500,RTInterval-1)
plot(Xtickmark[1:2],Ytickmark[1:2],type="n",axes=F)
axis(1,xaxp=Xtickmark)
axis(2,las=2,yaxp=Ytickmark)
box()
lines(RotateDegreesArray,DepthRT.mean,col="blue",lty = "solid")
points(RotateDegreesArray,DepthRT.mean,col = "blue",pch=15)
lines(RotateDegreesArray,PlaneRT.mean,col="red",lty = "dotted")
points(RotateDegreesArray,PlaneRT.mean,col = "red",pch=16)
arrows(RotateDegreesArray,DepthRT.mean+DepthRT.se,RotateDegreesArray,DepthRT.mean-DepthRT.se, angle=90, code=3,col="blue",length=0.1)
arrows(RotateDegreesArray,PlaneRT.mean+PlaneRT.se,RotateDegreesArray,PlaneRT.mean-PlaneRT.se, angle=90, code=3,col="red",length=0.1)
legend(max(Xtickmark[1:2]),min(Ytickmark[1:2]),c("深度旋转","平面旋转"),lty=c("solid","dotted"),pch=c(15,16),col=c("blue","red"),merge=T,seg.len=1,xjust=1,yjust=0,ncol=2,cex=0.9,bty="o",x.intersp=0.1,y.intersp=0.5,text.width=20)
title(main="旋转角度与反应时之间的关系图",xlab="旋转角度(度)",ylab="反应时(毫秒)")
#可以考虑画出
# mtext(side=1,line=4,adj=0,sprintf("深度旋转反应时=%3.2f×旋转角度+%3.2f",VarCoef_Depth,Intercept_Depth),cex=0.8)
# mtext(side=1,line=4,adj=1,sprintf("平面旋转反应时=%3.2f×旋转角度+%3.2f",VarCoef_Plane,Intercept_Plane),cex=0.8)



# 处理输出结果
write.csv(expt,ProcessedDataFile)
ProcessedDate=sprintf("Data Processed Time: %s\n",Sys.time())
write(c("\n",Equation_Plane,Equation_Depth,ProcessedDate),"C:/1.csv",ncolumns=1,append=TRUE)

#关闭设备
dev.off()