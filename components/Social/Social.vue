<template>
  <div id="socialLinks">



    <nav class = "main-nav">
      <input type="checkbox" />

      <span></span>
      <span></span>
      <span></span>

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


<style scoped>

  #socialLinks {
    position: fixed;
    left: 0;
    bottom: 5vh;
    z-index: 5;
    display: block;
  }

  #socialLinks input{
    opacity: 0; /* hide this */
  }

  .main-nav {
  }

  .nav-links{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .nav-link {
    display: list-item;
    margin: 0 1rem;
    padding: 0.1rem auto;
  }


  .nav-link img{
    filter: invert(100%);
    width: 48px;
  }


  @media (max-width: 440px) {

    #socialLinks
    {
      display: block;
      position: fixed;
      top: 25px;
      right: 25px;
      left: unset;
      bottom: unset;
      z-index: 1;

      -webkit-user-select: none;
      user-select: none;
    }

    #socialLinks input
    {
      display: block;
      width: 40px;
      height: 32px;
      position: absolute;
      top: -7px;
      left: -3px;

      cursor: pointer;

      opacity: 0; /* hide this */
      z-index: 2; /* and place it over the hamburger */

      -webkit-touch-callout: none;
    }

    .main-nav {
    }


    .nav-link img{
      width: 48px;
    }

    .nav-link{
      margin-left: 0.5em;
    }
    #socialLinks span
    {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;

      background: #cdcdcd;
      border-radius: 3px;

      z-index: 1;

      transform-origin: 4px 0px;

      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
      background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
      opacity 0.55s ease;
    }

    #socialLinks span:first-child
    {
      transform-origin: 0% 0%;
    }

    #socialLinks span:nth-last-child(2)
    {
      transform-origin: 0% 100%;
    }

    #socialLinks input:checked ~ span
    {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
    }

    #socialLinks input:checked ~ span:nth-last-child(3)
    {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    #socialLinks input:checked ~ span:nth-last-child(2)
    {
      transform: rotate(-45deg) translate(0, -1px);
    }

    #socialLinks input:checked ~ ul
    {
      transform: none;
    }
    .nav-links
    {
      background-color: rgba(0,92,159,0.7);
      height: 100vh;
      position: absolute;
      list-style-type: none;
      -webkit-font-smoothing: antialiased;
      /* to stop flickering of text in safari */

      transform-origin: 0% 0%;
      transform: translate(100%, 0);

      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }
  }
</style>
