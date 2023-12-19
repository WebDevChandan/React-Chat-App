//Find the average of the sum of all the elements of an array.
#include<stdio.h>
int main(){
	int a[10], i, sum=0;
	float avg;
	printf("Enter 10 Number: \n");
	
	for(i=0; i<=9; i++){
		scanf("%d", &a[i]);  //store user data of int data type in array a[] at address of i index number
		sum = sum + a[i];
	}
	avg = sum/10;
	printf("\nSum:- %d", sum);

	printf("\nAverage:- %f", avg);
	
}