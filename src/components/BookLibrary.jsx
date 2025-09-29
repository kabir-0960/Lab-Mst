import React, { useState } from "react";

const BookLibrary = () => {
  const [search, setSearch] = useState("");

  // Sample data
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
  ];

  // Filter books by title
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">📚 Book Library</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded-lg w-80 mb-6 shadow-sm"
      />

      {/* Book List */}
      <div className="grid gap-4 w-full max-w-lg">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-gray-600">✍ {book.author}</p>
              <p className="text-gray-500">📅 {book.year}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No books found</p>
        )}
      </div>
    </div>
  );
};

export default BookLibrary;
