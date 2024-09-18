const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    test('should reder a circle with selected color', () =>{
        const shape = new Circle();
        shape.setColor('blue');
        expect (shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');

    });
});

describe('Triangle', () => {
    test('should reder a circle with selected color', () =>{
        const shape = new Triangle();
        shape.setColor('red');
        expect (shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');

    });
});

describe('Square', () => {
    test('should reder a circle with selected color', () =>{
        const shape = new Square();
        shape.setColor('red');
        expect (shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="red" />');

    });
});
