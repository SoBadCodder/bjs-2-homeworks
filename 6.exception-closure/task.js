function parseCount(inputData) {
    let toInt = Number.parseInt(inputData);
    if (Number.isNaN(toInt)) {
        throw new Error("Невалидное значение");
    }
    return toInt;
}

function validateCount(inputVar) {
    try {
        return parseCount(inputVar);
    } catch (err) {
        return err;
    }
}
class Triangle {
    constructor(a, b, c) {
        this.firstSide = a;
        this.secondSide = b;
        this.thirdSide = c;
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter() {
        return parseFloat((this.firstSide + this.secondSide + this.thirdSide).toFixed(3));
    }
    getArea() {
        let p = this.getPerimeter() / 2;
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