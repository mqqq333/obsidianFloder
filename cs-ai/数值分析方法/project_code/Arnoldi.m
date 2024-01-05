function  a= Arnoldi(A,k)
    tol = 1e-12;  %  误差限
    [m,n] = size(A);  %  矩阵大小
    p0=10;  %  Arnoldi迭代最大步数
    p = p0-1;  %  实际迭代步数        
    Q = zeros(n,1+p);  %  存储 Arnoldi 过程中的正交基向量
    H = zeros(1+p);  %  存储 Hessenberg 矩阵
    Q(:,1) = rand(n,1);  %  初始化第一个正交基向量为随机向量
    Q(:,1) = Q(:,1)/norm(Q(:,1));   %  归一化第一个正交基向量
    H = Q(:,1)'*A*Q(:,1);  %  计算第一个 Hessenberg 矩阵元素
    q = A*Q(:,1) - Q(:,1)*H;  %  计算第一个残差向量
    
for m = 1:p
    beta = norm(q);  %  计算残差向量的模
    if beta <= tol
        Q = Q(:,1:1+m-1);  %  收敛时，截断正交基向量矩阵 Q
        H = H(1:1+m-1,1:1+m-1);   %  收敛时，截断 Hessenberg 矩阵 H
        return;
    end
    
    Q(:,1+m) = q/beta;  %  归一化残差向量得到新的正交基向量
    H(1+m,1+m-1) = beta;  %  更新 Hessenberg 矩阵元素
    w = A*Q(:,1+m);  %  计算新的向量
    H(1:1+m, 1+m) = Q(:,1:1+m)'*w;  %  更新 Hessenberg 矩阵元素
    q = w - Q(:,1:1+m)*H(1:1+m, 1+m);  %  计算新的残差向量

    
    % 用校正步骤保持正交性
    c = Q(:,1:1+m)'*q;
    q = q - Q(:,1:1+m)*c;
    H(1:1+m, 1+m) = H(1:1+m, 1+m) + c;
end

a=QRMethod(H,k);  %  调用 QR 方法计算 Hessenberg 矩阵的特征值





