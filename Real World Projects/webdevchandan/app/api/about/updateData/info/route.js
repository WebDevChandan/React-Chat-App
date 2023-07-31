import fs from 'fs';
import path from 'path';

export async function POST(request, response) {
    const textDecoder = new TextDecoder('utf-8');

    let formData = "";

    await new Promise((resolve, reject) => {
        resolve(request.body.getReader().read());
        reject('we have failed');

    }).then(({ value, done }) => {
        //Encoded data
        formData = textDecoder.decode(value);
        console.log(formData);

    }).catch(err => console.log(err));


    const filePath = path.join(process.cwd(), '/public/data/PortfolioData.json');


    try {
        const data = fs.readFileSync(filePath, 'utf8');

        try {
            const ExampleData = JSON.parse(data);

            ExampleData.about.text = formData;

            // Convert the modified object back to JSON string
            const updatedData = JSON.stringify(ExampleData, null, 2);

            //Re-Write the file 
            fs.writeFile(filePath, updatedData, 'utf8', (err) => {
                if (err) {
                    console.error('Error writing to the file:', err);
                    return;
                }
            });

            return new Response(updatedData, {
                status: 200,
                headers: {
                    'Content-Type': 'application/json', // Set the appropriate content type
                },
            });

        } catch (parseErr) {
            console.error('Error parsing the file content as JSON:', parseErr);
        }

    } catch (err) {
        console.error('Error reading the file:', err);
        return new Response("Error reading the file", {
            status: 500,
        });
    }
}


