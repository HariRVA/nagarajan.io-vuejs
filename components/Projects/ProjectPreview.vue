<template>
  <nuxt-link
    :to="id">
    <article class="post-preview">
      <div
        :style="{backgroundImage: 'url(' + thumbnailUrl + ')'}"
        class="post-preview-thumbnail">
        <div class="spacer"></div>
      <div class="post-preview-content">
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
  export default{
    props: {
      title: {
        type: String,
        required: true
      },
      previewText: {
        type: String,
        required: true
      },
      thumbnailUrl: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: true
      }

    }
  }

</script>

<style scoped>
  a {
    text-decoration: none;
    color: black;

  }

  .post-preview {
    border-radius: 3px;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,5);
    width: 20rem;
    height: 20rem;
    margin: 1rem;
  }

  .post-preview-thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  .spacer{
    padding-top: 12rem;
  }
  .post-preview-content{
    width: 100%;
    height: 8rem;
    background: rgba(1,1,1,.30);
  }

  .post-preview-content h1 {
    width: 100%;
    color: white;
    text-align: center;
  }

  .post-preview-content p {
    color: ghostwhite;
    padding: 0.5rem;
  }

  @media  (min-width: 35rem){
    .post-preview {
      width: 25rem;
    }
  }
</style>
