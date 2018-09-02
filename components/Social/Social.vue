<template>
  <div id="socialLinks">
    <nav class = "main-nav">
      <ul class = "nav-links">
        <li class="nav-link"><a href="https://www.facebook.com/HariNagarajanRVA?" target="_blank"><img src="~/assets/icons/facebook.png"></a></li>
        <li class="nav-link"><a href="https://www.instagram.com/underacorktree/" target="_blank"><img src="~/assets/icons/instagram.png"></a></li>
        <li class="nav-link"><a href="https://www.linkedin.com/in/harinagarajan92" target="_blank"><img src="~/assets/icons/linkedin.png"></a></li>
        <li class="nav-link"><a href="https://twitter.com/HariRVA" target="_blank"><img src="~/assets/icons/twitter.png"></a></li>
        <li class="nav-link"><a><img src="~/assets/icons/youtube.png"></a></li>

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
    margin-top: -115px;
    height: 105px;
  }

  .main-nav {
    height: 105px;
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

  .nav-link img{
    filter: invert(100%);
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
      height: 60px;
      margin-top: -110px;
    }
    .main-nav {
      height: 55px;
    }


    .nav-link{
      padding: 0;
      margin: 0.2rem;
    }

  }
</style>
