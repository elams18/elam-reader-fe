<script>
// Inside a component
import {booksStore} from "@/stores/books";
import {onMounted, ref} from "vue";


export default {
  setup() {
    const store = booksStore(); // This will automatically pick up the Pinia store
    const user = ref([])
    const books = ref([]);

    onMounted(async ()=>{
      user.value = await store.initializeStore();
      books.value = await store.getBooks();
    })

    return {
      // any values you want to expose
      user,
      books
    };
  },
  methods: {
    getUserBooks: (store)=> store.store,
  },
};

</script>


<template>
  <header>
    <h1>Library</h1>
    <hr>
    <h2>Hello {{user["readerName"]}}</h2>
  </header>

  <main>
    <div class="wrapper">
      <ul v-for="(book, index) in books" :key="index">
        <li>Title: {{ book.title }}</li>
        <li>Author: {{ book.author }}</li>
        <a target="_blank" href="https://google.com">Read now</a> <!--later will be a vue route-->
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

  .wrapper *{
    flex-direction: row;
  }
}
</style>
