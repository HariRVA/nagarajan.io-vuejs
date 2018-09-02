<template>
  <div id="socialLinks">
    <nav class = "main-nav">
      <ul class = "nav-links">
        <nuxt-link tag="li" to="#Top" class="nav-link"><a><img src="~/assets/icons/facebook.png"></a></nuxt-link>
        <nuxt-link tag="li" to="#Top" class="nav-link"><a><img src="~/assets/icons/instagram.png"></a></nuxt-link>
        <nuxt-link tag="li" to="#Top" class="nav-link"><a><img src="~/assets/icons/linkedin.png"></a></nuxt-link>
        <nuxt-link tag="li" to="#Top" class="nav-link"><a><img src="~/assets/icons/twitter.png"></a></nuxt-link>
        <nuxt-link tag="li" to="#Top" class="nav-link"><a><img src="~/assets/icons/youtube.png"></a></nuxt-link>

      </ul>
    </nav>
  </div>
</template>

<style>

  #socialLinks {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 1rem;
    height: 10rem;
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
  }

  .nav-link {
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
  }

  @media (max-width: 440px) {
    .nav-link img{
      height: 50px;
      width: 50px;
    }

    #socialLinks{
      height: 3rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      padding-bottom: 1.5rem;
    }


    .nav-link{
      padding: 0;
      margin: 0.2rem;
    }

  }
</style>
