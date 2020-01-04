<template>
    <div id="content">
      <Intro />
      <Projects />
    </div>
</template>

<script>
  import Intro from '@/components/Intro'
  import Projects from '@/components/Projects/Projects'

  export default {
  components:{
    Intro,
    Projects
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>

  #content{
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    padding-top: 10em;
  }

  @media (max-width: 440px){
    #content{
      padding-top: 0.5em;
    }

  }
</style>

