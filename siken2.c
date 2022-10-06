#include <stdio.h>
#include <math.h>
#define fx(x) (4/(1+x*x))
main(void)
{
double x, x0, x8; /* x */
int N=8; /* きざみの数 */
double h=0.125; /* ⼩区間の幅 */
double S; /* ⾯積 */
int i; /* 繰り返し変数 */
printf("x0は？\n");
scanf("%lf", &x0);
printf("xnは？\n");
scanf("%lf", &x8);

printf("きざみの数Nは？\n");
scanf("%d", &N);
h=(x8-x0)/N;
x=x0;
S=0;
for(i=1; i<N; i++)
{
S=S+(fx(x)+fx(x+h))*h/2.0;
x=x+h;
}
printf("S=%lf\n", S);
return(0);
}