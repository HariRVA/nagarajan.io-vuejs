<template>
  <div id="container">
    <TheTop />

    <section id="social">
      <div class="sectionTitle">
        <h1>
          Where you can find me
        </h1>
      </div>
      <Social/>
    </section>

    <section id="projects">
      <div class="sectionTitle">
        <h1>
          Where I've been so far
        </h1>
      </div>
      <Experiences
        v-for="post in posts"
        :key="post.id"
        :CompanyName="post.CompanyName"
        :JobTitle="post.JobTitle"
        :previewText="post.previewText"
        :thumbnailUrl="post.thumbnailUrl"
        :id="post.id"
      />
    </section>

    <section id="photos">
      <div class="sectionTitle">
        <h1>
          The memories I've captured
        </h1>
      </div>
      <p>
        I love taking photos. I mainly use my Pixel 2 as my camera.
      </p>
      <div id="gallery">
      <Photos/>
      </div>
    </section>


  </div>
</template>

<script>
  import Experiences from "@/components/Experiences/Experiences";
  import Photos from "@/components/Photos/Photos";
  import TheTop from '@/components/Top/TheTop'
  import Social from '@/components/Social/Social'

  export default {
  components:{
    Experiences,
    Photos,
    TheTop,
    Social

  },
  data() {
    return {
      posts: [{
        CompanyName: 'Capital One',
        JobTitle: 'Software Engineer',
          previewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Capital_One_logo.svg/2000px-Capital_One_logo.svg.png',
          id: '0'
        },
        {
          CompanyName: 'Virginia Department of Transportation',
          JobTitle: 'Business Intelligence Analyst',
          previewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
          thumbnailUrl: 'http://www.timesnews.net/image/2018/06/05/x700_q30/vdotlogo-jpg-1.jpg',
          id: '1'
        },
        {
          CompanyName: 'CoStar Group',
          JobTitle: 'Data Quality Analyst',
          previewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
          thumbnailUrl: 'https://g.foolcdn.com/art/companylogos/medium/CSGP.png',
          id: '1'
        },
        {
          CompanyName: 'United States Marine Corps',
          JobTitle: 'Supply Admin',
          previewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
          thumbnailUrl: 'https://www.hqmc.marines.mil/portals/134/Mixed%20Media/EGA%202.jpg',
          id: '1'
        }
      ]};
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


  #projects{
  }

  #photos{
    margin-top: 3rem;
    background-color: lightgrey;
  }

  #social{
    background-color: lightgrey;
  }

  #photos h1{

  }

  #projects h1{
    color: rgb(51, 51, 51);
  }

  #photos p{
    margin-left: 1rem;
    margin-right: 1rem;
  }
  #gallery{
    width: 100%;
  }

  .sectionTitle{

    border-bottom-color: rgb(51, 51, 51);
    border-bottom-style: solid;
    margin-top: 3rem;
  }
  .sectionTitle h1{
    font-weight: 700;
    font-size: 36px;
    margin: 0;
  }

  @media (max-width: 440px){
    #projects{
      flex-direction: column;
    }
    .sectionTitle h1{
      font-size: 24px;
    }
  }
</style>

