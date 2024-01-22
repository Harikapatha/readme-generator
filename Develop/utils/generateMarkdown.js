const licenses = [
  {
    name: 'Apache 2.0 License',
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    link: 'https://opensource.org/licenses/Apache-2.0'
  },
  {
    name: 'Boost Software License 1.0',
    badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    link: 'https://www.boost.org/LICENSE_1_0.txt'
    },
  {
    name: 'BSD 3-Clause License',
    badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    link: 'https://opensource.org/license/bsd-3-clause/'
  },
  {
    name: 'BSD 2-Clause License',
    badge: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    link: 'https://opensource.org/license/bsd-3-clause/' 
  }
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License') {
    return '';
  } else {
    for (const choice of licenses) {
      if (license === choice.name) {
        return choice.badge;
      }
    }
  };
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license === 'No License') {
    return '';
  } else {
    for (const choice of licenses) {
      if (license === choice.name) {
        return `This project license section [${choice.name}](${choice.link}).`;
      }
    }
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    credits,
    license,
    contribute,
    tests,
    github,
    email
  } = data;
  
  const licenseBadge = renderLicenseBadge(license);
  const licenseInfo = renderLicenseSection(license);

  return `# ${title}
${licenseBadge}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribute](#contributing)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${licenseInfo}

## Contributing
${contribute}

## Tests
${tests}

## Questions
To contact me with any questions regarding this project:
1. [GitHub Profile](https://github.com/${github})
2. Email me at: <${email}>`;
}

module.exports = generateMarkdown;