// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let x;
  switch (license.toString()) {
    case 'CC0 1.0 Universal':
      x = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case 'LGPL':
      x = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case 'MIT':
      x = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Apache License, Version 2.0':
      x = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case 'Boost':
      x = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
  }
  return x;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let x;
  switch (license.toString()) {
    case 'CC0 1.0 Universal':
      x = "[License: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case 'LGPL':
      x = "[License: LGPL v3]](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case 'MIT':
      x = "[License: MIT](https://opensource.org/licenses/MIT)"
      break;
    case 'Apache License, Version 2.0':
      x = "[License](https://opensource.org/licenses/Apache-2.0)"
      break;
    case 'Boost':
      x = `[License](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
  }
  return x;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let x;
  switch (license.toString()) {
    case 'CC0 1.0 Universal':
      x = "This work is covered under the CC0 1.0 Universal license.";
      break;
    case 'LGPL':
      x = "This work is covered under the GNU Lesser General Public License.";
      break;
    case 'MIT':
      x = `This work is covered under the MIT License.`;
      break;
    case 'Apache License, Version 2.0':
      x = `This work is convered under the Licensed under the Apache License, Version 2.0`;
      break;
    case 'Boost':
      x = `This work is covered under the Boost Software License - Version 1.0 `;
      break;
  }
  return x;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.name}

  <h2>Description:</h2> ${data.description}

  <h2>Table of Contents:</h2> 

  [Installation](#install)

  [Usage](#usage)

  [License](#license)

  [Contributing](#contributing)

  [Tests](#tests)

  [Questions](#questions)


  <h3><a name="install">Installation:</a></h3>

  ${data.install}

  <h3><a name="usage">Usage:</a></h3>

  ${data.usage}

  <h3><a name="liscense">License:</a></h3>

  ${renderLicenseSection(data.license)}

  Full license information can be found here: ${renderLicenseLink(data.license)}

  <h3><a name="contributing">Contributing:</a></h3> 

  ${data.contribute}

  <a name="tests"><h3>Tests:</h3></a> 

  ${data.instructions}

  <a name="questions"><h3>Questions:</h3></a>  

  gitHub Name: ${data.gitHub}

  gitHub Link: <a href="https://github.com/${data.gitHub}">https://github.com/${data.gitHub}</a>

  eMail: ${data.email}

`;
}

module.exports = generateMarkdown;
