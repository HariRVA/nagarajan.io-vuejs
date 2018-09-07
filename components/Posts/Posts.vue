<template>
  <article>

    <div class="post">
      <div class="title">
        <a :href="link">

          <span v-html="title">
        </span>
        </a>
      </div>
      <div class="excerpt">
        <span v-html="excerpt">
        </span>
        <a :href="link">
          Read More!
        </a>
      </div>
    </div>

  <div
    :style="{backgroundImage: 'url(' + thumb + ')'}"
    class="postThumb">
  </div>



  </article>

</template>

<script>
  export default{
    props: {
      excerpt: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      thumb: {
        type: String,
        required: false
      }
    }
  }
</script>

<style scoped>

  article{
    flex-direction: row;
    display: flex;
    margin-bottom: 1rem;

  }

  .post{
    display: flex;
    flex-direction: column;
    margin-left: 0.5em;
    margin-right: 0.5em;
    width: 20rem;
    margin-bottom: 1rem;
  }

  .postThumb{
    -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 1);
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 1);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 20rem;
    width: 20rem;
  }


  .title {
    text-align: left;
  }
  .title a{
    text-decoration: none;
    font-weight: 600;
    font-size: 24px;
    color: whitesmoke;
    text-align: left;
  }

  .excerpt {
    color: honeydew;

  }
  .excerpt p, a{
    color: honeydew;
    margin-bottom: 0;
  }



  @media (max-width: 440px){
    .post{
      margin-bottom: 1rem;
    }
    article{

      flex-direction: column-reverse;
    }
  }
</style>
