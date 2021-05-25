const inquirer = require(`inquirer`);
const fs = require('fs');
const generateMd = require('./generateMd');


inquirer.prompt ([
    
        {
            type: `input`,
            name: `title`,
            message: `What is your project title?`
        },
        
        {
            type: `input`,
            name: `description`,
            message: `Please provide your project's description`
        },
        {
            type: `input`,
            name: `installation`,
            message: `Please provide the installation instructions`
        },
        {
            type: `input`,
            name: `usage`,
            message: `Please provide the project usage`
        },
        {
            type: `list`,
            name: `license`,
            message: `please choose a license for your project.`,
            choices: [`Apache-2.0`, `BSD-2-Clause`, `BSD-3-Clause`, `CDDL-1.0`, `EPL-2.0`, `GPL-2.0`, `LGPL-3.0`, `MIT`, `MPL-2.0`]
        },
        {
            type: `input`,
            name: `contributing`,
            message: `Please provide the contributing parties`
        },
        {
            type: `input`,
            name: `test`,
            message: `Please provide the project tests`
        },
        {
            type: `input`,
            name: `github`,
            message: `Please enter your github user name.`
        },
        {
            type: `input`,
            name: `email`,
            message: `Please enter your email address. `
        },
        {
            type: `input`,
            name: `repo`,
            message: `Please provide a link to your repo.`
        },
        {
            type: `input`,
            name: `deployed`,
            message: `Please provide a link to your deployed project page.`
        },
    ])
    .then((response) => {
        console.log(response);
        const README = generateMd(response);
        const filename = `NEWREADME.md`;
        fs.writeFile(filename, README, (err) =>
          err ? console.log(err) : console.log("Success!")
        );
      });