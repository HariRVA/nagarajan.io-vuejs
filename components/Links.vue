<template>

    <div id="links">

      <div
        :style="{backgroundImage: 'url(' + thumbnailUrl + ')'}"
        class="post-preview-thumbnail">
      </div>
      <div class="post-preview-content">
        <h3>{{ CompanyName }}</h3>
        <h6> {{ JobTitle }}</h6>
        <p>{{ previewText }}</p>
      </div>

    </div>

</template>



<style scoped>

  a {
    text-decoration: none;
    color: black;

  }

  .post-preview {
    width: 80%;
    max-width: 40rem;
    min-height: 15rem;
    margin: 1rem;
    display: flex;
    flex-direction: row;
  }

  .post-preview-thumbnail {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 90%;
    width: 24rem;
    height: 15rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,5);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 20%;
    background-color: white;

  }

  .post-preview-thumbnail:before{
    display: block;
    padding-top: 100%;
  }


  .spacer{
    padding-top: 12rem;
  }
  .post-preview-content{
    width: 100%;
    margin-left: 1rem;
    margin-top: 2rem;
  }

  .post-preview-content h3 {
    font-size: 24px;
    font-weight: 400;
    width: 100%;
    color: whitesmoke;
    text-align: left;
    margin: 0px;
    margin-bottom: 5px;
  }
  .post-preview-content h6 {
    font-size: 15px;
    font-weight: 700;
    width: 100%;
    color: red;
    text-align: left;
    margin: 0px;
    margin-bottom: 5px;
  }

  .post-preview-content p {
    color: honeydew;
    margin: 0;
    margin-top: 10px;
    font-weight: 400;
    font-size: 15px
  }

  @media (max-width: 440px) {
    .post-preview {
      min-height: 20rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .post-preview-thumbnail {
      width: 80%;
      height: 10rem !important;
      min-height: 8rem;
      max-height: 8rem;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      margin-top: 0.5rem;
    }

    .post-preview-content{
      margin-left: 0rem;
      margin-top: 0.5rem;
      max-width: 95%;
    }

  }


</style>
