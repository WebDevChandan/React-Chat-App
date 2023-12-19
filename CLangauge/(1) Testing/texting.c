#include<stdio.h>
int main(){
	int seen[10] = {0}, n;
	
	printf("Enter your Number\n");
	scanf("%d", &n);	
	
	while(n>0){
		n = n%10;
		if(seen[n] == 1){
			printf("Not Same");
		}
		else{
			seen[n] =1;
			printf("Same"); 
		}
		n = n/10;
	}
}