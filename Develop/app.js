const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const inputFunction = require("./lib/inputFunction.js");
const render = require("./lib/htmlRenderer");

async function process ()
{
    try {
        const team = await inputFunction.myTeam();
        const genHTML = render(team);
        fs.mkdir(OUTPUT_DIR, (err) => {
            });
        fs.writeFile(outputPath, genHTML,(err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        }); 
    }
    catch (err) {
        throw err;
    }
}
process();