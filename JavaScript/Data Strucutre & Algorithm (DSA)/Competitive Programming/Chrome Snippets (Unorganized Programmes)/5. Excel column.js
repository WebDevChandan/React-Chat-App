//Find Excel column name from a given column number
/*Link:-
https://www-geeksforgeeks-org.cdn.ampproject.org/v/s/www.geeksforgeeks.org/find-excel-column-name-given-number/amp/?amp_gsa=1&amp_js_v=a9&usqp=mq331AQKKAFQArABIIACAw%3D%3D#amp_tf=From%20%251%24s&aoh=16566477375184&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fwww.geeksforgeeks.org%2Ffind-excel-column-name-given-number%2F
*/


 
// Function to print Excel column name for a given column number

function printString(columnNumber)
{

    // To store result (Excel column name)

        let columnName = [];

  
        while (columnNumber > 0) {

            // Find remainder

            let rem = columnNumber % 26;

  

            // If remainder is 0, then 
            //'Z' must be there in output

            if (rem == 0) {

                columnName.push("Z");

                columnNumber = Math.floor(columnNumber / 26) - 1;

            }

            else // If remainder is non-zero

            {

                columnName.push(String.fromCharCode((rem - 1) + 'A'.charCodeAt(0)));

                columnNumber = Math.floor(columnNumber / 26);

            }

        }

  

        // Reverse the string and print result

        console.log(columnName.reverse().join(""));
}
 
printString(26);
printString(27);
printString(52);
printString(80);
printString(676);
printString(702);
printString(705);
 