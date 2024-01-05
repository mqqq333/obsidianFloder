function [Q,R] = Givens(A)
n = size(A,1);  %  获取矩阵维度

Q = eye(n);  %  初始化Q为单位矩阵

for j = 1:n-1  %  遍历每一列
    for i = n:-1:j+1  %  从最后一行开始向上遍历
        if A(i,j)~=0  %  如果 A(i,j) 不等于 0，则执行 Givens 变换
                G = eye(n);  %  初始化 G 为单位矩阵
                a = A(j,j);  %  获取第 j 行第 j 列元素
                b = A(i,j);  %  获取第 i 行第 j 列元素
                c = sqrt(a^2 + b^2);  %  计算旋转角度的模长
                cos_theta = a/c;  %  计算旋转角度的余弦值
                sin_theta = b/c;  %  计算旋转角度的正弦值
                G(i,i) = cos_theta;  %  更新 G 的第 i 行第 i 列元素
                G(j,j) = cos_theta;  %  更新 G 的第 j 行第 j 列元素
                G(i,j) = -sin_theta;  %  更新 G 的第 i 行第 j 列元素
                G(j,i) = sin_theta;  %  更新 G 的第 j 行第 i 列元素
                A = G*A;  %  使用 Givens 变换更新矩阵 A
                Q = Q*G';  %  使用 Givens 变换更新矩阵 Q
        end
    end
end
R = A;  %  % 最终的 A 矩阵即为 R 矩阵

end