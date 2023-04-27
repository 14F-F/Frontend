<script setup>
import Book from "./Book.vue";
const props = defineProps(["targylista"])
</script>

<template>
  <!-- grid -->
  <div class="container text-center">
    <div class="row justify-content-md-center">
      <div class="col-sm-6 col-md-4" v-for="targy in targylista">
        <Book :targy="targy"></Book>
      </div>
    </div>
  </div>
  <!-- table -->
  <hr>
  <table class="container text-center">
    <tr v-for="targy in targylista">
      <td><img :src="targy.img_url" alt=""></td>
      <td>{{ targy.title }}</td>
      <td>{{ targy.author }}</td>
      <td>{{ targy.description }}</td>
    </tr>
  </table>
</template>
