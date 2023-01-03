/** @type {import('tailwindcss').Config} */
module.exports = {
  //All the files that end with the extension .html inside our root directory. This would going to scan all the html files in the root directory and check which tailwind classes we've used and then it's going to add those classes to our tailwind stylesheet. So instead of adding the entire library to our tailwind stylesheet, it's only going to importing what we're going to be needing. 
  content: ['./*html'],
  theme: {
    // Customise your theme
    extend: {
      // Setting Custom Colors under extend property
      colors: {
        "custom-blue": "#00BAAF",
        "custom-purple": "#6336FA",
      }
    },
    fontFamily:{
      //Setting Custom Font under fontFamily property.
      Poppins: ["Poppins, sans-serif"],
    }
  },
  plugins: [],
}
