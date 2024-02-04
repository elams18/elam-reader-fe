<script setup>
// Inside a component
import { booksStore } from "@/stores/books";
import { onMounted, ref } from "vue";

onMounted(async () => {
  user.value = getUser();
  books.value = await store.getBooks();
  console.log(books.value);
});

const store = booksStore();
const user = ref("");
const books = ref([]);

function getUser() {
  return store.user["readerName"];
}

function addFavorite(bookId) {
  const book = store.getBook(bookId);
  return book;
}

async function confirmDelete(bookId) {
  const deleteConfirm = window.confirm(
    "Are you sure you want to delete from library?",
  );
  if (deleteConfirm) {
    await store.deleteBook(bookId);
    await store.initializeStore();
    books.value = await store.getBooks();
  }
}
</script>

<template>
  <header>
    <h1>Library</h1>
    <hr />
    <h2>Hello {{ getUser() }}</h2>
  </header>

  <main>
    <div class="wrapper">
      <ul v-for="(book, index) in books" :key="index">
        <li>Title: {{ book.title }}</li>
        <li>Author: {{ book.author }}</li>
        <button @click="addFavorite(book.bookId)">Add favorite</button>
        <button @click="confirmDelete(book.bookId)">Delete from Library</button>

        <!--later will be a vue route-->
        <!-- Other book details... -->
      </ul>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .wrapper * {
    flex-direction: row;
  }
}
</style>
