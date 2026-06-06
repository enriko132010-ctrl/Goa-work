class Movie {
    constructor(name, rating, year) {
        this.name = name;
        this.rating = rating;
        this.year = year;
    }

    isGoodMovie() {
        if (this.rating > 2) {
            return `This is a good film, its name is ${this.name}, rating ${this.rating} and it was released in ${this.year}`;
        }

        return "This is not a good movie";
    }
}

const movie1 = new Movie("Interstellar", 5, 2014);
const movie2 = new Movie("Random Movie", 1.5, 2020);

console.log(movie1.isGoodMovie());
console.log(movie2.isGoodMovie());