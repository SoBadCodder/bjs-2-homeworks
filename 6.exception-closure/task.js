function parseCount(inputData) {
    try {
        let toInt = Number.parseInt(inputData);
        if (Number.isNaN(toInt)) throw new Error("Невалидное значение");
        return toInt;
    } catch (err) {
        throw err;
    }
}

function validateCount(inputVar) {
    try {
        let parseToInt = parseCount(inputVar);
        return parseToInt;
    } catch (err) {
        return err;
    }
}
class Triangle {
    constructor(a, b, c) {
        this.firstSide = a;
        this.secondSide = b;
        this.thirdSide = c;
        if (this.firstSide + this.secondSide <= this.thirdSide || this.firstSide + this.thirdSide <= this.secondSide || this.thirdSide + this.secondSide <= this.firstSide) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter() {
        return parseFloat((this.firstSide + this.secondSide + this.thirdSide).toFixed(3));
    }
    getArea() {
        let p = (this.firstSide + this.secondSide + this.thirdSide) / 2;
        return parseFloat(Math.sqrt(p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getArea() {
                return "Ошибка! Треугольник не существует";
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }

}