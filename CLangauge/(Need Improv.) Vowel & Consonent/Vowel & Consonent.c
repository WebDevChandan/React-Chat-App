#include<stdio.h>
int main()
{
	char ch;
	printf("Enter a Character: ");
	scanf("%c", &ch);
	printf("\n %c is a ",ch );
	
	vowel_consonent(ch);
	return 0;
}
//If Else condition
void vowel_consonent(char ch){
//		if(ch=='a'|| ch=='e'|| ch=='i'|| ch=='o'|| ch=='u'||ch=='A'|| ch=='E'|| ch=='O'|| ch=='U'|| ch=='I')
//			printf("Vowel\n");
//		else	
//		printf("Consonent");
//	}
	
//Switch Statement
switch(ch){
	case 'a':
	case 'e':
	case 'i':
	case 'o':
	case 'u':
	case 'A':
	case 'E':
	case 'I':
	case 'O':
	case 'U': printf("Vowel\n");
	
	break;
	default: printf("Consonent");	
	
}	
}