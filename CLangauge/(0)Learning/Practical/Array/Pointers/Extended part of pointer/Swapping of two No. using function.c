#include<stdio.h>
void swap(int *, int *);
int main()
{
	int x, y, z;
	printf("Enter Two Number:\n");
	scanf("\n%d%d", &x, &y);
	
	swap(int *x, int *y);
	printf("%d %d",x, y);	
}

void swap(x, y){
	int z;
	z=*x;
	*x=*y;
	*y=z;
}