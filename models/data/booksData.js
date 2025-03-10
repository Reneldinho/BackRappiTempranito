import 'dotenv/config.js';
import "../../config/database.js";
import Book from '../Book.js';

let books = [
    {
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "publisher": "Allen & Unwin",
      "yearOfPublication": 1954,
      "pages": 1178,
      "volumes": 3
    },
    {
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "genre": "Romance",
      "publisher": "T. Egerton",
      "yearOfPublication": 1813,
      "pages": 432,
      "volumes": 1
    },
    {
      "title": "1984",
      "author": "George Orwell",
      "genre": "Dystopian",
      "publisher": "Secker & Warburg",
      "yearOfPublication": 1949,
      "pages": 328,
      "volumes": 1
    },
    {
      "title": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "genre": "Science Fiction",
      "publisher": "Pan Books",
      "yearOfPublication": 1979,
      "pages": 224,
      "volumes": 1
    },
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "genre": "Classic",
      "publisher": "J. B. Lippincott & Co.",
      "yearOfPublication": 1960,
      "pages": 281,
      "volumes": 1
    },
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "genre": "Classic",
      "publisher": "Charles Scribner's Sons",
      "yearOfPublication": 1925,
      "pages": 180,
      "volumes": 1
    },
    {
      "title": "Harry Potter and the Sorcerer's Stone",
      "author": "J.K. Rowling",
      "genre": "Fantasy",
      "publisher": "Bloomsbury",
      "yearOfPublication": 1997,
      "pages": 309,
      "volumes": 1
    },
    {
      "title": "Moby-Dick",
      "author": "Herman Melville",
      "genre": "Adventure",
      "publisher": "Richard Bentley",
      "yearOfPublication": 1851,
      "pages": 624,
      "volumes": 1
    },
    {
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "genre": "Classic",
      "publisher": "Little, Brown and Company",
      "yearOfPublication": 1951,
      "pages": 277,
      "volumes": 1
    },
    {
      "title": "Dune",
      "author": "Frank Herbert",
      "genre": "Science Fiction",
      "publisher": "Chilton Books",
      "yearOfPublication": 1965,
      "pages": 412,
      "volumes": 1
    },
    {
      "title": "Little Women",
      "author": "Louisa May Alcott",
      "genre": "Classic",
      "publisher": "Roberts Brothers",
      "yearOfPublication": 1868,
      "pages": 541,
      "volumes": 2
    },
    {
      "title": "One Hundred Years of Solitude",
      "author": "Gabriel García Márquez",
      "genre": "Magical Realism",
      "publisher": "Editorial Sudamericana",
      "yearOfPublication": 1967,
      "pages": 417,
      "volumes": 1
    },
    {
      "title": "The Shining",
      "author": "Stephen King",
      "genre": "Horror",
      "publisher": "Doubleday",
      "yearOfPublication": 1977,
      "pages": 447,
      "volumes": 1
    },
    {
      "title": "The Count of Monte Cristo",
      "author": "Alexandre Dumas",
      "genre": "Adventure",
      "publisher": "Pétion",
      "yearOfPublication": 1844,
      "pages": 1276,
      "volumes": 1
    },
    {
      "title": "The Book Thief",
      "author": "Markus Zusak",
      "genre": "Historical Fiction",
      "publisher": "Alfred A. Knopf",
      "yearOfPublication": 2005,
      "pages": 552,
      "volumes": 1
    }
  ];

Book.insertMany(books);