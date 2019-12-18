<template>
  <div class="topMain">
    <div class="intro">
      <div class="introRow">
        <div class="introCol">
            <h1 class="name">
              Hi, I'm <span class="highlight">Hari</span>
            </h1>
            <p>
              I'm a Software Engineer from Richmond, VA that likes to build things.
            </p>
        </div>

        <div class="photoCol">
          <img src="~/assets/images/bridgePhoto-large.jpg"
               srcset="~/assets/images/bridgePhoto-small.jpg 270w,~/assets/images/bridgePhoto-large.jpg 540w"
               alt="photo of Hari">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .topMain {
    min-height: calc(100vh);
    top: 0;
    left: 0;
    align-items: center;
    align-content: center;
    justify-items: center;
    display: flex;
    flex-direction: column;
    background-color: rgba(2,136,209,.2);
  }

  .intro {
    padding-top: 10vh!important;
    padding-bottom: 20vh!important;
    margin-top: 10vh;
    margin-bottom: 10vh;
    display: block;
    align-content: center;
    align-items: center;
    width: 80%;
  }

  .introRow{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0em 0em 0em 10em;
    flex-wrap: wrap;
  }

  .introCol{
    max-width: 50%;
    flex-basis: 50%;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .introCol h1{
    font-size: 48px;
    font-weight: 600;
    color: ghostwhite;
    letter-spacing: 1px;
    text-shadow: 0 1px 2px rgba(0,0,0,.2);
    margin: 0;
  }

  .introCol h2{
    margin: 0;
    color: wheat;
    text-shadow: 0 1px 2px rgba(0,0,0,.2);
    font-weight: 300;
    text-transform: uppercase;
    font-size: 16px;
  }

  .introCol p{
    color: whitesmoke;
    text-shadow: 0 1px 2px rgba(0,0,0,.2);
    font-weight: 400;
  }

  .photoCol{
    margin-left: auto;
    margin-right: auto;
    padding: 0px !important;
    max-width: 30%;
    flex-basis: 25%;
    position: relative;
    height: 100%;
    z-index: 0;
  }

  .photoCol:before{
    content: "";
    display: block;
    position: absolute;
    height: 95%;
    width: 95%;
    top: 2%;
    left: 5%;
    z-index: -1;
    background: #b1cfe4;
    -webkit-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    transform: rotate(15deg);
    background-image: url("~/assets/images/bridgePhoto-small.jpg");
    background-size: cover;
    border: 4px double #E77470;
    opacity: 0.4;
  }

  .photoCol:after{
    content: "";
    display: block;
    position: absolute;
    height: 95%;
    width: 95%;
    top: 0;
    left: 0%;
    z-index: -1;
    -webkit-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
    background-image: url("~/assets/images/bridgePhoto-small.jpg");
    border: 4px double #E77470;
    background-size: cover;
    opacity: 0.4;
  }

  .photoCol img{
    width: 100%;
    -webkit-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    transform: rotate(5deg);
    border: 4px double #E77470;
  }

  .introText{

  }

  .titles{

  }

  .highlight{
    color: red;
  }

  @media (max-width: 440px){
    .titles{
      font-size: 24px;
      line-height: 1.0em;
      font-weight: 600;
      color: white;
      letter-spacing: 1px;
      -webkit-text-stroke: 1px black;
    }

    .intro{
      padding-top: 5vh!important;
      padding-bottom: 5vh!important;
      margin-top: 0vh;
      margin-bottom: 10vh;
      padding-bottom: 5vh!important;
      width: 100%;
    }

    .introCol{
      max-width: 90%;
    }
    .introRow{
      padding: 0em 0em 0em 0em;
      flex-direction: column-reverse;
      align-items: center;
      max-width: 100%;

    }
    .photoCol{
      max-width: 50%;
      margin-left: 1em;
      margin-right: 1em;
    }
    .photoCol img{
    }

  }
</style>
