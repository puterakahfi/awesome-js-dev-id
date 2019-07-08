<template>
  <div class="card random-dev">
    <div class="card-front">
      <p class="tag is-7 has-margin-top-20 has-margin-left-15 has-text-grey-light">Random Developer</p>

      <div class="card-image has-padding-50">
        <figure class="image">
          <img
            src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/static_assets_rpm6.svg"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media has-margin-bottom-5">
          <div class="media-left">
            <figure class="image is-64x64">
              <img class="is-rounded" :src="selectedDev.profile_image" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-3">{{ selectedDev.name }}</p>
            <span class="tags has-margin-top-5">
              <p class="tag" v-for="skill in selectedDev.skills" :key="skill">{{ skill }}</p>
            </span>
          </div>
        </div>

        <div class="content has-text-grey">{{ selectedDev.description}}</div>
      </div>
    </div>
  </div>
</template>


<static-query>
{
  randomDev: allDevs (filter: { published: { eq: true }}){
    edges {
      node {
        id
        name
        description
        tags
        skills
        profile_image
        links{
          label
          url
        }
      }
    }
  }
}
</static-query>



<script>
export default {
  data() {
    return {
      selectedDev: []
    };
  },
  created() {
    let allDevs = this.$static.randomDev.edges;
    const randomKey = Math.floor(Math.random() * allDevs.length);
    const b = allDevs.find((value, index) => index === randomKey);
    return (this.selectedDev = b.node);
  }
};
</script>
