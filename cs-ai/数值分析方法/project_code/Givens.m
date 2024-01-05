function [Q,R] = Givens(A)
n = size(A,1);  %  ��ȡ����ά��

Q = eye(n);  %  ��ʼ��QΪ��λ����

for j = 1:n-1  %  ����ÿһ��
    for i = n:-1:j+1  %  �����һ�п�ʼ���ϱ���
        if A(i,j)~=0  %  ��� A(i,j) ������ 0����ִ�� Givens �任
                G = eye(n);  %  ��ʼ�� G Ϊ��λ����
                a = A(j,j);  %  ��ȡ�� j �е� j ��Ԫ��
                b = A(i,j);  %  ��ȡ�� i �е� j ��Ԫ��
                c = sqrt(a^2 + b^2);  %  ������ת�Ƕȵ�ģ��
                cos_theta = a/c;  %  ������ת�Ƕȵ�����ֵ
                sin_theta = b/c;  %  ������ת�Ƕȵ�����ֵ
                G(i,i) = cos_theta;  %  ���� G �ĵ� i �е� i ��Ԫ��
                G(j,j) = cos_theta;  %  ���� G �ĵ� j �е� j ��Ԫ��
                G(i,j) = -sin_theta;  %  ���� G �ĵ� i �е� j ��Ԫ��
                G(j,i) = sin_theta;  %  ���� G �ĵ� j �е� i ��Ԫ��
                A = G*A;  %  ʹ�� Givens �任���¾��� A
                Q = Q*G';  %  ʹ�� Givens �任���¾��� Q
        end
    end
end
R = A;  %  % ���յ� A ����Ϊ R ����

end