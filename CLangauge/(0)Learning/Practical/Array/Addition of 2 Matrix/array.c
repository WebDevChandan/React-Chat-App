//Find the addition of two Matrix.
#include<stdio.h>
int main(){
	int A[3][3], B[3][3], C[3][3], i, j, k;
	printf("Enter 9 elements in Array A: \n");
	
	for(i=0; i<=2; i++){
		for(j=0;j<=2;j++){	
		scanf("%d", &A[i][j]);
		}
	}
	
	printf("Etner 90elements in Array B: \n");	
	for(i=0;i<=2;i++){
		for(j=0;j<=2;j++){
			scanf("%d", &B[i][j]);
		}
	}
	
	printf("Sum of both Array is: \n");	
	for(i=0;i<=2;i++){
		for(j=0;j<=2;j++){
			C[i][j]= A[i][j] +B[i][j];
			printf("%d  ", C[i][j]);
		}
		printf("\n");
	}

}