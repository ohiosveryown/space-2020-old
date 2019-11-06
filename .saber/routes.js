
    export default [
      {
              path: "/posts/test-one.html",
              meta: {
                __relative: '_posts/test-one.md',
                __pageId: 'c15ae782'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-test-one-md" */ "/Users/pence/Desktop/projects/space/space-2020/pages/_posts/test-one.md?saberPage=c15ae782")
                
              }
            },
{
              path: "/posts/test-two.html",
              meta: {
                __relative: '_posts/test-two.md',
                __pageId: 'af43b2ce'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-test-two-md" */ "/Users/pence/Desktop/projects/space/space-2020/pages/_posts/test-two.md?saberPage=af43b2ce")
                
              }
            },
{
              path: "/",
              meta: {
                __relative: 'index.md',
                __pageId: '048e1f73'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--index-md" */ "/Users/pence/Desktop/projects/space/space-2020/pages/index.md?saberPage=048e1f73")
                
              }
            },
{
              path: "/random.html",
              meta: {
                __relative: 'random.vue',
                __pageId: '12f675ca'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--random-vue" */ "/Users/pence/Desktop/projects/space/space-2020/pages/random.vue?saberPage=12f675ca")
                
              }
            },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/Users/pence/Desktop/projects/space/space-2020/node_modules/saber/vue-renderer/app/404.vue")
        }
      }
    ]