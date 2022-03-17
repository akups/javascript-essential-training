import Book from "./Book";

const littleHouseOnThePrairie = new Book(
  " Little House On The Prairie",
  "Laura Ingalls Wilder",
  "May 11, 2004 00:00:00 UTC",
  " HarperCollins",
  "fiction",
  "paper back"
);

console.log(
  "The Little House On The Prairie book object:",
  littleHouseOnThePrairie
);
console.log("Date published:", littleHouseOnThePrairie.publishedOn);
console.log("Days since published:", littleHouseOnThePrairie.bookAge());
