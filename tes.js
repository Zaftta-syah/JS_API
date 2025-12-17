// Tugas: Buat sistem manajemen buku perpustakaan menggunakan object
const library = {
  books: [],
  // Menambahkan buku baru ke perpustakaan
  addBook: function (title, author, year, isAvailable = true) {
    const book = {
      title,
      author,
      year,
      isAvailable,
    };
    this.books.push(book);
  },
  // Menampilkan semua buku di perpustakaan
  displayAllBooks: function () {
    this.books.forEach((book) => {
      console.log(` ${book.title} - ${book.author} - ${book.year}`);
    });
  },
  // Mencari buku berdasarkan judul
  findBookByTitle: function (title) {
    const found = this.books.find((book) => book.title === title);
    if (found) {
      console.log(` Ditemukan : ${found.title}`);
    } else {
      console.log(`Buku dengan judul "${title}" tidak ditemukan.`);
    }
  },
  // Meminjam buku dari perpustakaan
  borrowBook: function (title) {
    const book = this.books.find((b) => b.title === title);
    if (book && book.isAvailable) {
      book.isAvailable = false;
      console.log(`Berhasil meminjam : ${title}`);
    } else {
      console.log(`Buku "${title}" tidak tersedia untuk dipinjam.`);
    }
  },
  // Menampilkan buku yang masih tersedia
  displayAvailableBooks: function () {
    const available = this.books.filter((book) => book.isAvailable);
    available.forEach((book) => {
      console.log(` ${book.title}`);
    });
  },
};
// Demonstrasi penggunaan sistem manajemen perpustakaan
console.log("=== Sistem Manajemen Perpustakaan ===");

// A. Menambahkan Buku
console.log("A. Menambahkan Buku");
library.addBook("JavaScript Basics", "John Doe", 2020);
library.addBook("Web Development", "Jane Smith", 2021);
library.addBook("CSS Mastery", "Mike Johnson", 2019);

// B. Menampilkan Semua Buku
console.log("B. Menampilkan Semua Buku");
library.displayAllBooks();

// C. Mencari Buku berdasarkan Judul
console.log("C. Mencari Buku dg Judul -> JavaScript Basics");
library.findBookByTitle("JavaScript Basics");

// D. Meminjam Buku
console.log("D. Meminjam Buku dg Judul -> JavaScript Basics");
library.borrowBook("JavaScript Basics");

// E. Menampilkan Buku yang Masih tersedia
console.log("E. Menampilkan Buku yang Masih tersedia");
library.displayAvailableBooks();
console.log("E. Menampilkan Buku yang Masih tersedia");
library.displayAvailableBooks();