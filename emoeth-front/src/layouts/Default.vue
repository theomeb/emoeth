<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav" style="display: flex">
        <vs-button :active="!active" @click="active = false">
          Home
        </vs-button>
        <vs-button :active="active" @click="active = true" danger>
          About
        </vs-button>
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/"><vs-button :active="active" @click="active = true" danger>
          About
        </vs-button></g-link>
      </nav>
    </header>
    <slot /> <!-- the content -->
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  export default {
    data:() => ({
      active: false
    })
  }
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
