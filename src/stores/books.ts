import { defineStore } from "pinia";
import axios from 'axios';
import {Book} from "@/models/book";

export const booksStore = defineStore("books", {
  state: () => {
    return {
      books: [] as Book[],
      readerId: "363f5b94-b0ae-41ff-bcac-bc44b6922219",
      user: {},
      url: import.meta.env.VITE_APP_API_URL,
    };
  },
  actions: {
     async getBooks() {
      try {
        const booksURL = this.url  + "/books";

        const response = await axios.get(booksURL);
        const books = response.data;
        this.books = books;

        return books;
      } catch (error) {
        console.error("Error fetching books:", error);
        throw error; // Rethrow the error to handle it elsewhere if needed
      }
    },
    async initializeStore() {
       const readerURL = this.url + "/reader?reader_id=" + this.reader_id;
        const reader = await axios.get(readerURL);
        if(reader.status == 200){
          this.user = reader.data[0];
          return this.user;
        }
      console.log("user not found");
    },
    // async initializeStore(){
    //       const readerURL = this.url + "/reader?reader_id=" + this.reader_id;
    //     const reader = await axios.get(readerURL);
    //     if(reader.status == 200){
    //       this.user = reader.data[0];
    //       return this.user;
    //     }
    //   console.log("user not found");
    // },
  },
});
