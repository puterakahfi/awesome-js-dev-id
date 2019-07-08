<template>
  <Layout class="container">
    <div class="columns">
      <div class="column is-3 has-margin-left-10 has-margin-right-10" data-aos="flip-left">
        <RandomDev class />
        <h1 class="title is-6 has-margin-top-50 has-text-grey-light">
          <i class="fas fa-users"></i>
          Komunitas javascript indonesia
        </h1>
        <Community />
      </div>
      <div class="column is-8" data-aos="fade-down">
        <div class="has-margin-top-5">
          <div class="field is-grouped is-grouped-multiline">
            <div class="control">
              <img
                class="tag has-background-white"
                src="https://travis-ci.org/puterakahfi/awesome-js-dev-id.svg?branch=master"
              />
            </div>

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
                <span class="tag is-dark">contribute</span>
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
          <h1 class="title is-1 has-margin-top-5">Awesome Javascript Developer Indonesia</h1>

          <h1
            class="subtitle is-5 has-text-grey-light has-margin-bottom-20"
          >Daftar developer/programmer javascript terkece asal Indonesia</h1>

          <h6 class="subtitle is-6 has-margin-bottom-5 has-text-grey-light">
            masukkan nama
            <span
              class="has-text-weight-bold"
            >(fitur pencarian masih dalam tahap pengembangan)</span>
          </h6>

          <b-field>
            <b-input
              placeholder=" masukkan nama (fitur pencarian masih dalam tahap pengembangan)"
              type="search"
              icon-pack="fas"
              icon="search"
              size="is-medium"
            ></b-input>
          </b-field>

          <Devs class="has-margin-top-50" :devs="devs" />
        </div>
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
        company
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
import Community from "~/components/Community";
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
    RandomDev,
    Community
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
  border-radius: 5px;
  box-shadow: none;
  border: solid 1px #f5f5f5;
}
</style>
