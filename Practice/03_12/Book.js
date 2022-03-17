export default class Book {
  constructor(title, author, publishedOn, publisher, genre, cover) {
    this.title = title;
    this.author = author;
    this.publishedOn = publishedOn;
    this.publisher = publisher;
    this.genre = genre;
    this.cover = cover;
  }
  bookAge() {
    let now = new Date();
    let published = new Date(this.publishedOn);
    let elapsed = now - published; // elapsed time in milliseconds
    let daysSincePublished = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSincePublished;
  }
}
