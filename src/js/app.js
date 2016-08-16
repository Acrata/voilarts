var App = Vue.extend({});

var postList = Vue.extend({
    template:'#post-list-template',
    data: function(){
        return {
            posts: '',
            message: 'Hola  won!'
        }
    },

    ready: function(){
        posts = this.$http.get('http://localhost/voilarts/wp-json/wp/v2/artists-api');

        posts.then(function(posts){
            this.$set('posts', posts.data);
            console.log(posts);
        })
    }
})



var router = new VueRouter();

router.map({
    '/':{
        component: postList
    }
});

router.start(App, '#app');
