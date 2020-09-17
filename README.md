
# Team-Generator
[![Github Status](https://img.shields.io/badge/build-passing-green.svg)](https://shields.io/)
![npm](https://img.shields.io/npm/v/npm)
[![Awesome Project](https://img.shields.io/badge/%F0%9F%A4%A9-Awesome%20project-blueviolet.svg)](https://shields.io/)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)]
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage) 
- [Contributing](#contributing)
- [Test](#test)
- [Credits](#credits)
- [License](#license) 
- [Questions](#questions)
## Description:

   This CLI application generates and saves an html file based on the user input.
When the application starts the user will be prompted to input the details of a team. The team can have only one manager and any combination of engineers and interns. First the user will enter manager's details, and then the details of all the team members.After manager's details are input , the user can choose to populate details for new team member or exit the prompt. After the user exits the prompt, the html file will be generated in the /output folder.

The system will get the array of user answers, transform it into array of objects of respective classes (Manager, Engineer or Intern), and then generate an html based on such team array.

![Screenshot](./develop/Generated-Team.jpg) 
## Installation:

This App uses node and npm. It requires node.js to be installed locally. and these commnds are necessary for the App to run correctly:
  `$ npm install` 
  `$ npm install inquirer`
  `$ npm install jest`
## Usage:

This Node CLI app can be used to quickly generate a neatly formatted webpage of ID cards containing employee summaries of the personnel that outfit your software team. The app generates a HTML and CSS file that will be overwritten with each use for convenience.
## Contributing:

For any feedback or contributions, please feel free to reach out.
## Test:

This app went through much unit-testing and you can run further tests, as I did, with the command:$ npm run test
## Credits:

The Coding Boot Camp at UT provided the starter code and templates, I was then able to resolve the missing pieces of the code.
## License:

For more information about the License, click on the link below.
- [License](https://opensource.org/licenses/)
## Questions:

For questions about the Generator you can go to my 
    GitHub page at the following Link: 
- [GitHub Profile](https://github.com/noureddine-semahi)
For additional questions please reach out to my email at: kabyldorado@hotmail.com.
## Link to the video:

To view the demo video, you can follow this link:
 -[ScreenCastify Video](https://drive.google.com/file/d/1g9kzKOqVpCYztbaU8Yy-URdxJty0SQMi/view)
