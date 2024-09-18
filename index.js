const inquirer = require('inquirer').default;
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');


function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter three characters for your logo:',
      validate: input => input.length <= 3 || 'Please enter no more than three characters.'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hex code):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for your logo:',
      choices: ['Circle', 'Triangle', 'Square']
    },
    
    
  ]);
}


function generateSVG({ text, textColor, shape, shapeColor }) {
  let shapeInstance;


  switch (shape) {
    case 'Circle':
      shapeInstance = new Circle();
      break;
    case 'Triangle':
      shapeInstance = new Triangle();
      break;
    case 'Square':
      shapeInstance = new Square();
      break;
  }


  shapeInstance.setColor(shapeColor);

  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
}


function runApp() {
  promptUser().then(answers => {
    const svgContent = generateSVG(answers);

  
    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
  });
}

runApp();
