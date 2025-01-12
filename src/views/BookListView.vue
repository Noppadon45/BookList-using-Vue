<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useBookStore } from "../stores/book"
import { RouterLink } from "vue-router"

const BookStore = useBookStore()
const router = useRouter()
</script>

<template>
  <RouterLink :to="{ name: 'book-create' }">
    <div>CreateBook</div>
  </RouterLink>
  BookListView
  <div>
    <ul>
      <li v-for="(book, index) in BookStore.books">
        {{ index }} {{ book.name }} {{ book.author }}
        <RouterLink :to="{ name: 'book-edit', params: { id: index } }">
          <button>Edit</button>
        </RouterLink>
        <button @click="BookStore.removeBook(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>
