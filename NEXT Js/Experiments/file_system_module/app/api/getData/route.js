import fs from 'fs';
import path from 'path';

export async function GET(req) {
    const filePath = path.join(process.cwd(), '/public/data.json');
    
    try {
        const data = fs.readFileSync(filePath, 'utf8');

        return new Response(data, {
            status: 200,
            headers: {
                'Content-Type': 'application/json', // Set the appropriate content type
            },
        });


    } catch (err) {
        console.error('Error reading the file:', err);
        return new Response("Error reading the file", {
            status: 500,
        });
    }
}