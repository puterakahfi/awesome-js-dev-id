<template>
  <Layout class="container has-margin-top-50">
    <div class="columns">
      <div class="column is-8" data-aos="fade-down">
        <div class="has-margin-top-5">
          <div class="field is-grouped is-grouped-multiline">
            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-dark">gridsome</span>
                <span class="tag is-info">
                  <a class="has-text-white" target="_blank" href="https://gridsome.org/">0.6.5</a>
                </span>
              </div>
            </div>

            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-dark">buefy</span>

                <span class="tag is-success">
                  <a class="has-text-white" target="_blank" href="https://buefy.org/">0.7.8</a>
                </span>
              </div>
            </div>

            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-dark">github</span>
                <span class="tag is-primary">
                  <a
                    class="has-text-white"
                    target="_blank"
                    href="https://github.com/puterakahfi/awesome-js-dev-id"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <h1 class="title is-1">Javascript Indonesia Developer Directory</h1>

          <h1
            class="subtitle is-4 has-text-grey has-margin-bottom-20"
          >Daftar developer/programmer javascript terkece asal Indonesia</h1>

          <h6
            class="subtitle is-7 has-margin-bottom-10 has-text-grey-light"
          >masukkan nama untuk melakukan pencarian (fitur masih dalam tahap pengembangan)</h6>
          <div class="field has-addons has-margin-top-5">
            <input class="input is-fullwidth" type="text" disabled placeholder="Developer name" />
          </div>
          <Devs class="has-margin-top-50" :devs="devs" />
        </div>
      </div>
      <div class="column is-4" data-aos="flip-left">
        <RandomDev class="has-margin-20" />
      </div>
    </div>
  </Layout>
</template>


<page-query>
{
  devs: allDevs (filter: { published: { eq: true }},sortBy: "name", order: ASC){
    edges {
      node {
        id
        name
        description
        profile_image
        tags
        skills
        links{
          label
          url
        }
      }
    }
  }
}
</page-query>

<script>
import RandomDev from "~/components/RandomDev";
import Devs from "~/components/Devs";
export default {
  data() {
    return {
      search: "",
      devs: []
    };
  },
  components: {
    Devs,
    RandomDev
  },
  mounted() {
    this.devs = this.$page.devs.edges;
    this.$snackbar.open(`Website ini masih dalam proses development`);
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.sticky {
  position: sticky;
  top: 0;
}

.scrolling {
  float: right;
  width: 50%;
  padding: 20px;
}

.random-dev {
  background-color: #fff;
  box-shadow: 0 0 25px rgba(103, 119, 239, 0.1);
  border-radius: 10px;
}
</style>
