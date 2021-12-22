// allows fs to be used from node
const fs = require("fs");
// pulls the function from the other file
const generatePage = require("./src/page-template.js");
// slices out file data from outcome
const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

// creates HTML file
fs.writeFile("./index.html", generatePage(name, github), (err) => {
  if (err) throw new Error(err);

  console.log("Portfolio complete! Check out index.html to see the output!");
});
