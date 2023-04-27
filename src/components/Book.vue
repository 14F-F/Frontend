<script setup>
const props = defineProps(["targy"])
console.log(props.targy)
</script>

<template>
  <div class="card" style="width: 18rem"> 
    <img :src= "targy.img_url" class="card-img-top" alt="nincs kép" />
    <div class="card-body">
      <h5 class="card-title">{{ targy.title }}</h5>
      <h6 class="italic">{{ targy.author }}</h6>
      <p class="card-text">
        {{ targy.description }}
      </p>
      <a href="#" class="btn btn-primary">Részletek</a>
      </div>
  </div>
</template>

<style scoped>

</style>
