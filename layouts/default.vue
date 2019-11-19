<!-- layout -->
<template>
  <div class="slot-wrapper">
    <slot/>
    <ul>
      <li v-for="post in page.posts" :key="post.permalink">
        <saber-link :to='post.permalink'>{{ post.title }}</saber-link>
      </li>
    </ul>

    <saber-link to='/random.html'>
      <button>Go to Random</button>
    </saber-link>
  </div>
</template>


<!-- style -->
<style lang='scss'>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';
  ul { display: flex; flex-direction: column; }

  button {
    margin-top: 2rem;
    padding: 1.2rem 2rem;
  }
</style>


<!-- logic -->
<script>
  export default {
    props: [ 'page' ],
    head() {
      const pageTitle = this.page.title
      return {
        title: pageTitle ?
          `${pageTitle} - ${this.$siteConfig.title}` :
          this.$siteConfig.title
      }
    },

    mounted() {
      // let comingFrom = document.referrer
      // console.log(comingFrom)
    },
  }
</script>