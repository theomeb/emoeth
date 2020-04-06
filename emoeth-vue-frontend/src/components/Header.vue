<template>
    <div class="header" style="display: flex">
      <vs-button to="/">Home</vs-button>
      <vs-button danger to="/about">About me</vs-button>
      <vs-button>Blog</vs-button>
    </div>
</template>

<script>
  export default {
    name: "Header",
    data: () => ({
      activeItem: 0
    })
  }
</script>

<style scoped>

</style>
