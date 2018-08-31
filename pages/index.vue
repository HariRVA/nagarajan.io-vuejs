<template>
  <section id="projects">
    <ProjectPreview
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :previewText="post.previewText"
      :thumbnailUrl="post.thumbnailUrl"
      :id="post.id"
    />
  </section>
</template>

<script>
  import ProjectPreview from "@/components/Projects/ProjectPreview";
export default {
  components:{
    ProjectPreview
  },
  data() {
    return {
      posts: [{
          title: 'I am cool af',
          previewText: 'I got a cat!',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
          id: '0'
        },
        {
          title: 'I am cool af',
          previewText: 'I got a another cat!',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
          id: '1'
        }
      ]};
  }
};
</script>

<style>
  .container{
    margin-top: 4.5rem;
  }


  #projects{
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 35rem){
    #projects{
      flex-direction: row;
    }
  }
</style>

