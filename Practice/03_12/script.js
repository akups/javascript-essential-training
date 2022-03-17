/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";
//import Desk from "./Desk.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

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

const littleRedRidingHood = new Book(
  " Little Red Riding Hood",
  "Katherine McEwen",
  "January 1, 2010 00:00:00 UTC",
  " HarperCollins",
  "fiction",
  "paper back"
);

console.log("The Little Red Riding Hood book object:", littleRedRidingHood);
console.log("Date published:", littleRedRidingHood.publishedOn);
console.log("Days since published:", littleRedRidingHood.bookAge());
