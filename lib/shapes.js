class Shape {
    constructor() {
        this.color = ''
    }



    setColor(color) {
        this.color = color;

    }

    render() {
        throw new Error("Render method must be implemented in the child class.");
    }

}

module.exports = Shape;