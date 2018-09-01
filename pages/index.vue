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
          previewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
          id: '0'
        },
        {
          title: 'May is bae',
          previewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
          id: '1'
        }
      ]};
  }
};
</script>

<style>

  #projects{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 35rem){
    #projects{
      flex-direction: column;
    }
  }
</style>

