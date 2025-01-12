<script setup>
import { reactive, ref, onMounted, computed } from "vue"
import { useRoute, useRouter, RouterLink } from "vue-router"
import { useBookStore } from "../stores/book"

const route = useRoute()
const BookStore = useBookStore()
const router = useRouter()

const BookData = reactive({
  name: "",
  author: "",
})

const mode = ref("create")
const bookIndex = ref(-1)

onMounted(() => {
  if (route.name === "book-edit") {
    mode.value = "update"
    bookIndex.value = parseInt(route.params.id)
    const currentBookStore = BookStore.books[bookIndex.value]
    BookData.name = currentBookStore.name
    BookData.author = currentBookStore.author
  }
})

const addBook = () => {
  if (mode.value === "update") {
    BookStore.editBook(BookData, bookIndex.value)
  } else {
    BookStore.addBook(BookData)
  }
  router.push({
    name: "book-list",
  })
}

const DisplayButton = computed(() => {
  if (mode.value === "create") {
    return "Add"
  } else {
    return "Update"
  }
})
</script>

<template>
  BookUpdateView
  <div>Bookname : <input type="text" v-model="BookData.name" /></div>
  <div>Author : <input type="text" v-model="BookData.author" /></div>
  <div>
    <button @click="addBook()">{{ DisplayButton }} Book</button>
  </div>
  <RouterLink :to="{ name: 'book-list' }"> Back to BookStore </RouterLink>
</template>
