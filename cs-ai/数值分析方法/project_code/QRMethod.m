function [a] = QRMethod(A,k)

maxIt=10000;  %  最大迭代次数
tol=10-12;  %  误差限
A0 = A;  %  初始矩阵
a0 =diag(A);  %  初始特征值的估计
[Q,R] = Givens(A);  %  用Givens函数进行QR分解

A = R*Q;  %  更新矩阵A
a = diag(A);  %  更新特征值的估计
n = 1;  %  迭代次数


while (max(abs(a-a0))> tol) && (n <= maxIt)
    a0 = a;  %  更新特征值的估计
    [Q,R] = Givens(A);  %  用Givens函数进行QR分解
    A = R*Q;  %  更新矩阵A
    a = diag(A);  %  更新特征值的估计
    n = n + 1;  %  迭代次数+1
end

a=sort(abs(a), 'descend');  %  对特征值的估计按降序排序
a=a(1:k);  %  选取前 k 个特征值作为最终结果 



