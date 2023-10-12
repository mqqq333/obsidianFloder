fun1 =@(x) (1/pi)*asin((-1/2)*x)+2
fun2 = @(x) log(3*x^2)
tol  = 1E-2;
maxIt = 40;
[p, flag] = fixedpoint(fun1, 1, tol, maxIt);
[p, flag] = fixedpoint(fun2, 3, tol, maxIt);
function [p, flag] = fixedpoint(fun, p0, tol, maxIt)
n = 1;
flag = 0;
disp('Fixed Pointed Iteration')
disp('----------------------------------')
disp(' n          p           f(p_n)')
disp('----------------------------------')
formatSpec = '%2d    %.9f    %.9f    \n';
fprintf(formatSpec, [n-1, p0, fun(p0)])
while n <= maxIt
    p = fun(p0);
    fprintf(formatSpec, [n, p, fun(p)])
    if abs(p-p0) < tol
        flag = 1;
        break;
    else
        n = n+1;
        p0 = p;
    end
end
end
