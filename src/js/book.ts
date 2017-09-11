// this is the typescript implementation to compile typescript
// it will involve the usage of typescript.

import Paper from "./paper";
class Book extends Paper{

    data;

    page(index:String):Number {
        return this.data.indexOf(index);
    }
}

let book = new Book(["data", "sims", "comms", "nudity", "fabrication", "holy"]);

console.log(book.transform);
console.log(book.page("sims"));
console.log(book.data);
console.log(book.transform);
console.log(book.data);
