<template>
  <div id="container">
    <TheTopAlt />

    <section id="social">
      <Social/>
    </section>


<!--    <section id="posts">
      <div class="sectionTitle">
        <h1>
          My latest thoughts
        </h1>
      </div>
      <div id="postContent">
        <posts
          v-for="Post in Posts"
          :key="Post.ID"
          :title="Post.title"
          :excerpt="Post.excerpt"
          :link="Post.link"
          :thumb="Post.thumb"
        />
      </div>
    </section>-->



    <section id="footer">
      <Copyright />
    </section>

  </div>
</template>

<script>
  import Experiences from "@/components/Experiences/Experiences";
  import Photos from "@/components/Photos/Photos";
  import TheTopAlt from '@/components/TopAlt/TheTopAlt'
  import Social from '@/components/Social/Social'
  import Copyright from '@/components/Copyright/Copyright'
  import Posts from '@/components/Posts/Posts'
  export default {
  components:{
    Experiences,
    Photos,
    TheTopAlt,
    Social,
    Copyright
  },
    async asyncData({ app }) {
      //const Posts = await app.$axios.$get('https://iuedqpqpla.execute-api.us-east-1.amazonaws.com/default/getBlogPots');
      const Experience = await app.$axios.$get('https://bykv699qcf.execute-api.us-east-1.amazonaws.com/default/get_experience');


      return { Experience }
    },

  data() {
    return {
    };
  }
};
</script>

<style scoped>



  #container {
    position: absolute;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 100%;
    top: 0;
    left: 0;


  }

  section{
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }


  #posts{
    padding-bottom: 2rem;
    background-color: rgba(0,91,159, .4);
    display: flex;
  }

  #postContent{
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1.5rem;
    max-width: 45rem;
  }
  #projects{
    background-color: rgba(0,91,159, 0.5);
  }

  #photos{
    background-color: rgba(0,91,159, 0.6);
  }

  #social{
  }



  #footer{
    background-color: darkblue;
    color: ghostwhite;
  }

  #photos p{
    margin-left: 1rem;
    margin-right: 1rem;
    max-width: 40rem;
    color: honeydew;
  }
  #gallery{
    width: 100%;
    max-width: 60rem;
  }

  .sectionTitle{

    border-bottom-color: white;
    border-bottom-style: solid;
    margin-top: 3rem;
  }
  .sectionTitle h1{
    font-weight: 700;
    font-size: 36px;
    margin: 0;
    color: white;
  }

  @media (max-width: 440px){
    #projects{
      flex-direction: column;
    }
    .sectionTitle h1{
      font-size: 24px;
    }

    #photos p{
      max-width: 95%;
      margin-left: 10vw;
      margin-right: 10vw;
    }

    #postContent{
      flex-direction: column;
    }
  }
</style>

