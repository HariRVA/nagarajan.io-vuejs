<template>
  <div class="project">
    <div class="post-preview-content">
      <h3>{{ projectName }}</h3>
      <a :href=linkURL>{{linkText}}</a>
      <p>{{ projectDescription }}</p>
    </div>
  </div>


</template>

<script>
  export default{
    props: {
      projectName: {
        type: String,
        required: true
      },
      projectDescription: {
        type: String,
        required: true
      },
      linkURL: {
        type: String,
        required: true
      },
      linkText: {
        type: String,
        required: true
      },
      id: {
        type: Number,
        required: false
      }

    }
  }

</script>

<style scoped>
 .project{
   max-width: 300px;
   box-shadow: 0 10px 10px 5px rgba(0,0,0,0.2);
   background-color: rgba(2,136,209,.2);
   margin: 1em;
   padding: 1em;
 }

 /* On mouse-over, add a deeper shadow */
 .project:hover {
   box-shadow: 0 20px 20px 10px rgba(0,0,0,0.2);
 }

 @media (max-width: 440px){
   .project{
     max-width: 90%;
     margin-right: auto;
     margin-left: auto;
     margin-top: 0.5em;
   }
 }
</style>
