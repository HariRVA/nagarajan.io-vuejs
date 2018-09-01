<template>
  <div class="photo">
    <div class="intro">
      <div class="introRow">
        <div class="introCol">
          <h2 class="titles">
            <div class="introText ">
              I'm <span class="highlight"> Hari Nagarajan</span>
            </div>
            <div class="introText">
              Software Engineer
            </div>
            <div class="introText">
              Richmond, VA
            </div>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .photo {
    background-image: url("/bridge.jpg");
    height: calc(100vh + 53px);
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
  }

  .intro {
    padding-top: 10vh!important;
    padding-bottom: 20vh!important;
  }

  .introRow{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 10em 0em 19em 10em;
  }

  .introCol{
    width: 80%;
  }

  .introText{

  }

  .titles{
    font-size: 60px;
    line-height: 1.5em;
    font-weight: 600;
    color: ghostwhite;
    letter-spacing: 1px;
    text-shadow: 0 1px 2px rgba(0,0,0,.2);
  }

  .highlight{
    color: red;
  }

  @media (max-width: 440px){
    .titles{
      font-size: 16px;
      line-height: 1.5em;
      font-weight: 600;
      color: white;
      letter-spacing: 1px;
      -webkit-text-stroke: 1px black;
    }

    .introRow{
      width: 100%;
      display: flex;
      box-sizing: border-box;
      padding: 7em 0em 19em 2.5em;
    }
  }
</style>
