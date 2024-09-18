const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Function to prompt the user for input
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
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hex code):',
    }
  ]);
}

// Function to generate SVG content based on user input
function generateSVG({ text, textColor, shape, shapeColor }) {
  let shapeInstance;

  // Create the correct shape instance based on the user’s choice
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

  // Set the shape’s color
  shapeInstance.setColor(shapeColor);

  // Return the full SVG string
  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
}

// Main function to run the app
function runApp() {
  promptUser().then(answers => {
    const svgContent = generateSVG(answers);

    // Write the SVG file
    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
  });
}

runApp();
