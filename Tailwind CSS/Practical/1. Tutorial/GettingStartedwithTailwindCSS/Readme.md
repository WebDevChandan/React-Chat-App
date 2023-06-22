Steps for installation of TailwindCss for Developers:-

1. Create an 'index.html' file.
2. Create an 'input.css' file under src folder.
3. Create a 'package.json' file using command 'npm init -y'.
4. Run command 'npm install -D tailwindcss' to install tailwind css. Here, -D flag means to save it as Dev dependency.
5. Now we also need to create tailwind configuration file and we can do this with the command 'npx tailwindcss init'
6. Now we need to add the paths to all the files that we want to use tailwind css in tailwind.config.js file. And we do that in content property of tailwind.config.js file.
7. Tailwind works on layers and we need to import three main layers in our input.css file.
8. Now we're gonna have a build process which will scan all of our files at root directory and then it's going to build our css file. So to handle the building process we're going to create a script inside package.json file.

Command:
"tailwindcss -i ./src/input.css -o public/output.css --watch"

Note:
 -i flag is for the input 
 -o flag for the output
 --watch going to watch for any changes within our html file so that each time when we add a new class this is going to rebuild and then it's goin gto add that class that we use to our output.css file uder public folder.  
 -Change the name of the script from "test" to "build:tailwind
9. Now we’ve to execute the build script using this command 'npm run build:tailwind'

 Steps for Deployment of TailwindCss project:-
 1. Run command 'npm install win-node env'
 2.	Write a prod (production) script inside package.json file,
    “prod:tailwindcss”: “NODE_ENV=production npx tailwindcss build ./src/tailwind.css –o ./public/tailwind.css”
 3. Now we’ve to execute the production script using 'npm run prod:tailwindcss' 