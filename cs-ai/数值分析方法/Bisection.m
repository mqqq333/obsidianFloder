fun1 = @(x) exp(x)-x^2+3*x-2;
fun2 = @(x) x*cos(x)-2*x^2+3*x-1;
tol = 1E-5;
maxIt = 40;
[p, flag] = bisect(fun1, 0, 1, tol, maxIt);

[p, flag] = bisect(fun2, 0.2, 0.3, tol, maxIt);

[p, flag] = bisect(fun2, 1.2, 1.3, tol, maxIt);

function [p, flag] = bisect(fun, a, b, tol, maxIt)
flag = 0;   % Use a flag to tell if the output is reliable
if fun(a) * fun(b)> 0   %   Check f(a) and f(b) have different sign
    error('f(a) and f(b) must have different signs');
end
disp('Bisection Methods')
disp('--------------------------------------------------------------')
disp(' n         a_n            b_n            p_n         f(p_n)')
disp('--------------------------------------------------------------')
formatSpec = '%2d    %.9f    %.9f    %.9f    %.9f\n';
for n = 1:maxIt
    p = (a+b)/2;
    FA = fun(a);
    FP = fun(p);
    fprintf(formatSpec,[n,a,b,p,fun(p)]) % Printing output
    if abs(FP) <= 10^(-15) || (b-a)/2<tol
        flag = 1;
        break;
    else
        if(FA*FP>0)
            a = p;
        else
            b = p;
        end
    end
end
end

