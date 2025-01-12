import { defineStore } from "pinia"

export const useBookStore = defineStore("book", {
  state: () => ({
    books: [{ name: "John", author: "Smith" }],
  }),
  actions: {
    addBook(bookData) {
      this.books.push(bookData)
    },
    editBook(bookData, bookIndex) {
      this.books.splice(bookIndex, 1, bookData)
    },
    removeBook(bookIndex) {
      this.books.splice(bookIndex, 1)
    },
  },
})
