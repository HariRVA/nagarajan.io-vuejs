<template>
    <main>
      <div id="main">
        <nuxt/>
      </div>
    </main>
</template>

<script>

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
    background-image: url("~/assets/images/bg.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  #main{
    align-items: center;
    justify-content: center;
    justify-items: center;
    justify-self: center;
    display: block;
  }
</style>

