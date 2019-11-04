
    export default [
      {
              path: "/posts/test-one.html",
              meta: {
                __relative: '_posts/test-one.md',
                __pageId: 'a211e550'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-test-one-md" */ "/Users/pence/Desktop/saber-blank/pages/_posts/test-one.md?saberPage=a211e550")
                
              }
            },
{
              path: "/posts/test-two.html",
              meta: {
                __relative: '_posts/test-two.md',
                __pageId: '8ffab09c'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-test-two-md" */ "/Users/pence/Desktop/saber-blank/pages/_posts/test-two.md?saberPage=8ffab09c")
                
              }
            },
{
              path: "/",
              meta: {
                __relative: 'index.md',
                __pageId: '6a990868'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--index-md" */ "/Users/pence/Desktop/saber-blank/pages/index.md?saberPage=6a990868")
                
              }
            },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/Users/pence/Desktop/saber-blank/node_modules/saber/vue-renderer/app/404.vue")
        }
      }
    ]