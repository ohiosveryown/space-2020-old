<!-- layout -->
<template>
  <div class="slot-wrapper">

    <h1>This is random...</h1>

  </div>
</template>


<!-- style -->
<style lang='scss'>
  @import '../style/grid.scss';
  @import '../style/reset.scss';
  @import '../style/util.scss';
  @import '../style/type.scss';

</style>


<!-- logic -->
<script>
  export default {
    props: [ 'page' ],
    head() {

    },
    mounted() {

      let posts = [
        '/posts/test-one.html',
        '/posts/test-one.html',
        '/random.html'
      ]

      let post = posts[Math.floor(Math.random()*posts.length)]
      console.log(this.$route.path)
      console.log('from posts ' + post)
      console.log(post)
      if ( post === this.$route.path ) {
        console.log('they the same')
      } else {
        this.$router.push('/')
        console.log('they different')
      }

      // if (post === this.$router.path) {
      //   console.log('sameeee')
      // } else {
      //   this.$router.push(post)
      // }

      // if ( window.location.href === 'http://localhost:3000/random.html' ) {
      //   this.$router.push('/posts/test-one.html')
      // }

    },
  }
</script>