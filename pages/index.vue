<template>
  <div id="container">
    <TheTop />

    <section id="social">
      <Social/>
    </section>

    <section id="projects">
      <div class="sectionTitle">
        <h1>
          What am I doing
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
          Some cool photos
        </h1>
      </div>
      <p>
        The best camera is the one you have with you. I'm a huge fan of mobile photography and I take tons of pictures. Right now my
        phone camera of choice is the Google Pixel 2. Some other phones I've used here are: iPhone 8+, Samsung Galaxy S9, Essential PH-1 and
        Google Pixel. My favorite subjects include beautiful Richmond landscapes, my girlfriend May, cats, and my family and friends.
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
          previewText: 'Capital One is a bancorp that is also tech company. They are constantly trying to be disruptive by bringing modern technologies to the banking industry ' +
          ' and defining new user experiences. Right now, I\'m working on what many software engineers would consider an ideal project. Engineering solutions ' +
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
          'This is where I learned how very simple processes and programs can make huge business and financial impacts on an organization.',
          thumbnailUrl: 'https://g.foolcdn.com/art/companylogos/medium/CSGP.png',
          id: '2'
        },
        {
          CompanyName: 'United States Marine Corps',
          JobTitle: 'Supply Admin',
          previewText: 'I joined the Marine Corps at 17 years old. It was one of the best decisions I\'ve ever made. My programming and technical skills come from a ' +
          'variety of places. But the Marine Corps is where I learned how to commit to something from start to finish, how to ' +
          'take a group of individuals with different goals and talents and put them together into a team with a singular mission, and how to take a high level strategic vision ' +
          'and turn it into an actionable plan.',
          thumbnailUrl: 'https://www.hqmc.marines.mil/portals/134/Mixed%20Media/EGA%202.jpg',
          id: '3'
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
  }

  #photos h1{

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

