# 运行说明
本实验以matlab语言编写，直接运行***main.m***文件即可。
# 函数及文件说明
## main.m
主函数，包括实验的整个流程。
## PowerMethod.m
`function [powerMold1,powerEigVector]=PowerMethod(mat)`
- 功能描述：幂法求矩阵最大特征值
- 参数描述：所求矩阵
- 返回值描述：矩阵主特征值和特征向量
- 重要局部变量定义：无
- 重要局部变量用途描述：无
- 函数算法描述：幂法
## QRMethod.m
`function [a] = QRMethod(A,k)`
- 功能描述：QR算法求解矩阵特征值
- 参数描述：所求矩阵A，与所要求的前k个最大特征值个数
- 返回值描述：矩阵特征值
- 重要局部变量定义：无
- 重要局部变量用途描述：无
- 函数算法描述：QR算法
## Givens.m
`function [Q,R] = Givens(A)`
- 功能描述：利用Givens旋转完成QR分解
- 参数描述：所求矩阵A
- 返回值描述：矩阵QR分解后的Q、R矩阵
- 重要局部变量定义：无
- 重要局部变量用途描述：无
- 函数算法描述：Givens旋转
## Arnoldi.m
`function  a= Arnoldi(A,k)`
- 功能描述：利用Arnoldi算法求解矩阵特征值
- 参数描述：所求矩阵A，与所要求的前k个最大特征值个数
- 返回值描述：矩阵特征值
- 重要局部变量定义：无
- 重要局部变量用途描述：无
- 函数算法描述：Arnoldi算法
# 编码规范
- 使用Tab缩进
- 变量采用驼峰命名法
- 有相应注释