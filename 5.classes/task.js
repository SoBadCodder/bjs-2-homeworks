class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }
    fix() {
        this.state *= 1.5;
    }
    set state(state) {
        this._state = state;
        if (state < 0) this._state = 0;
        if (state > 100) this._state = 100;
    }
    get state() {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++)
            if (this.books[i][type] === value) return this.books[i];
        return null;
    }
    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++)
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1).pop();
            }
        return null;
    }
}
class Student {
    constructor(name) {
        this.name = name;
    }
    addMark(mark, nameSubject) {
        if (mark > 0 && mark < 6) {
            if (this[nameSubject] === undefined) this[nameSubject] = [mark];
            else this[nameSubject].push(mark);
        } else console.log("Ошибка, оценка должна быть числом от 1 до 5")
    }
    getAverageBySubject(nameSubject) {
        if (this[nameSubject] === undefined) return "Несуществующий предмет";
        else return this[nameSubject].reduce(function (sum, current) {
            return sum + current
        }, 0) / this[nameSubject].length;
    }
    getAverage() {
        let sum = 0,
            count = 0;
        for (let key in this) {
            if (this[key] !== this.name) {
                for (let i = 0; i < this[key].length; i++) {
                    sum += parseInt(this[key][i]);
                    count++;
                }

            }
        }
        return sum / count;
    }
    exclude(reason) {
        console.log(`Исключен за ${reason}`);
    }
}