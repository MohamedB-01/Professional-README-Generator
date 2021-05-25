renderBadge = (license) => {
    

    switch (license) {
        
      case 'Apache-2.0':
        response = `[![Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;
      case 'BSD-2-Clause':
        response = `[![BSD-2-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
        break;
      case 'BSD-3-Clause':
        response = `[![BSD-3-Clause](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
        break;
      case 'CDDL-1.0':
        response = `[![CDDL-1.0](https://img.shields.io/badge/License-CDDL%201.0-blue.svg)](https://opensource.org/licenses/CDDL-1.0)`;
        break;
      case 'EPL-2.0':
        response = `[![EPL-2.0](https://img.shields.io/badge/License-EPL%202.0-blue.svg)](https://opensource.org/licenses/EPL-2.0)`;
        break;
      case 'GPL-2.0':
        response = `[![GPL-2.0](https://img.shields.io/badge/License-GPL%202.0-blue.svg)](https://opensource.org/licenses/GPL-2.0)`;
        break;
      case 'LGPL-3.0':
        response = `[![LGPL-3.0](https://img.shields.io/badge/License-LGPL%203.0-blue.svg)](https://opensource.org/licenses/LGPL-3.0)`;
        break;
      case 'MIT':
        response = `[![MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)`;
        break;
      case 'MPL-2.0':
        response = `[![MPL-2.0](https://img.shields.io/badge/License-MPL%202.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)`;
        break;
    }
    return response;

   
};

function generateMd (answers) {
    const readMe = `# ${answers.title} 

    
## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contribution)
- [Tests](#Tests)
- [License](#License)
- [Contact](#Contact)
- [Link to Repository](#Repository)
- [Link to Deployed page](#Deployed)
    
## Description
${answers.description}
        
## Installation
${answers.installation}
        
## Usage
${answers.usage}
        
## Contribution
${answers.contributing}
        
## Tests
${answers.tests}
        
## License
This project is licensed under the terms of the following license: 
    
${renderBadge(answers.license,answers)}
    
        
## Contact
GitHub: [${answers.github}](https://github.com/${answers.github}). 
    
For inquiries, please contact ${answers.email}.
    
## Link to Repository 
${answers.repo}
    
## Link to Deployed page
${answers.deployed}`;
    return readMe;
  }
  
  module.exports = generateMd;