#include<stdio.h>
int main(){
	//	BASICS OF POINTER
//	int x=5;
//	printf("%d\n", x);
//	printf("%d\n", &x);
//	printf("%u", *&x);

//	PPOINTER DECLARATION
//int x =5;
//int *j;
//j=&x;
//printf("%u", j);

//	Question
int x=5, *j;
j=&x;

printf("%d %u\n", x, j);		//5	Address of x
printf("%d %u\n", *j, &x);		//5 Address of x
printf("%u", *&j);				// Address of x
}