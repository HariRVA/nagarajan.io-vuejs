<template>
  <header class = "main-header" id>
    <nav class = "main-nav">
      <ul class = "nav-links">
        <nuxt-link tag="li" to="#Top" class="nav-link"><a>Home</a></nuxt-link>
        <nuxt-link tag="li" to="#projects" class="nav-link"><a>Portfolio</a></nuxt-link>
        <nuxt-link tag="li" to="#Blog" class="nav-link"><a>Blog</a></nuxt-link>
        <nuxt-link tag="li" to="#Contact" class="nav-link"><a>Contact</a></nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped>


  .main-header {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(13,44,90, 0.5);
    height: 3rem;
    margin-top: -3rem;
  }

  .main-nav {
    height: 3rem;
  }

  .nav-links{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .nav-link {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    padding: 0.1rem auto;
  }

  .nav-link a{
    display: block;
    text-decoration: none;
    color: #06c4d1;
  }



  .nav-link.nuxt-link-exact-active a{
    color: white;
  }


  .nav-link a:hover,
  .nav-link a:active {
    color: white;
  }
  </style>
