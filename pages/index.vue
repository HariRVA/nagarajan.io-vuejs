<template>
  <div id="container">
    <TheTopAlt />

    <section id="social">
      <Social/>
    </section>


    <section id="posts">
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


    </section>

    <section id="projects">
      <div class="sectionTitle">
        <h1>
          What am I doing
        </h1>
      </div>
      <Experiences
        v-for="Experience in Experiences"
        :key="Experience.id"
        :CompanyName="Experience.CompanyName"
        :JobTitle="Experience.JobTitle"
        :previewText="Experience.previewText"
        :thumbnailUrl="Experience.thumbnailUrl"
        :id="Experience.id"
      />
    </section>

    <section id="photos">
      <div class="sectionTitle">
        <h1>
          Some cool photos
        </h1>
      </div>
      <p>
        The best camera is the one you have with you. I'm a huge fan of mobile photography and I take tons of pictures. Right now my
        phone camera of choice is the Google Pixel 2. Some other phones I've used here are: iPhone 8+, Samsung Galaxy S9, Essential PH-1 and
        Google Pixel. My favorite subjects include beautiful Richmond landscapes, food, cats, and my family and friends.
      </p>
      <div id="gallery">
      <Photos/>
      </div>
    </section>

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
    Copyright,
    Posts

  },
    async asyncData({ app }) {
      const Posts = await app.$axios.$get('https://iuedqpqpla.execute-api.us-east-1.amazonaws.com/default/getBlogPots');

      return { Posts }
    },

  data() {
    return {
      Experiences: [{
        CompanyName: 'Capital One',
        JobTitle: 'Software Engineer',
          previewText: 'Capital One is a technology focused bancorp. Right now, I\'m working on what many software engineers would consider an ideal project. Engineering solutions ' +
          'to be used by other software engineers.',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Capital_One_logo.svg/2000px-Capital_One_logo.svg.png',
          id: '0'
        },
        {
          CompanyName: 'Virginia Department of Transportation',
          JobTitle: 'Business Intelligence Analyst',
          previewText: 'My role here was half technical and half business. I created all sorts of metrics aggregation, distribution and dashboarding solutions. ' +
          'However, where I was really able to shine was finding new ways to turn bland data into information that could be used to drive business and policy decisions.',
          thumbnailUrl: 'https://www.timesnews.net/image/2018/06/05/x700_q30/vdotlogo-jpg-1.jpg',
          id: '1'
        },
        {
          CompanyName: 'CoStar Group',
          JobTitle: 'Data Quality Analyst',
          previewText: 'CoStar is THE real estate data company, this company\'s data powers the majority of all commercial real estate transactions in the country. ' +
          'I built an automation platform that maintained nearly a third of the tenant database. ',
          thumbnailUrl: 'https://g.foolcdn.com/art/companylogos/medium/CSGP.png',
          id: '2'
        },
        {
          CompanyName: 'United States Marine Corps',
          JobTitle: 'Supply Administration and Operations Specialist',
          previewText: 'I joined the Marine Corps at 17 years old. It was one of the best decisions I\'ve ever made. My programming and technical skills come from a ' +
          'variety of places. But the Marine Corps is where I learned how to commit to something from start to finish, how to ' +
          'take a group of individuals with different goals and talents and put them together into a team with a singular mission, and how to take a high level strategic vision ' +
          'and turn it into an actionable plan.',
          thumbnailUrl: 'https://www.hqmc.marines.mil/portals/134/Mixed%20Media/EGA%202.jpg',
          id: '3'
        }]

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
    background-image: url("~/assets/images/bg.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

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

  #photos h1{

  }

  #footer{
    background-color: darkblue;
    color: ghostwhite;
  }

  #projects h1{
    color: rgb(51, 51, 51);
  }

  #photos p{
    margin-left: 1rem;
    margin-right: 1rem;
    max-width: 40rem;
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

    #postContent{
      flex-direction: column;
    }
  }
</style>

