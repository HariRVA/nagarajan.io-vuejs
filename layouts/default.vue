<template>
  <div>
    <TheTop />
    <TheHeader />
    <main class="main-content">
      <nuxt/>
    </main>
  </div>
</template>

<script>
  import TheHeader from '@/components/TheHeader/TheHeader'
  import TheTop from '@/components/Top/TheTop'

  export default {
    components: {
      TheHeader,
      TheTop
    }
  }
</script>

<style>
  html {
    font-family: "Open Sans", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

  body {
    margin: 0;
    width: 100%;
  }

  .main-content{
    position: relative;
  }

</style>

