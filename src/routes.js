/* 
 routes
*/
const PostController = require('./controllers/post_controller')


module.exports = (app)=> {

    /* route list */
    app.get('/', (req, res)=>{ 
        let routes = [] 
        app._router.stack.forEach((r) => {
        if (r.route && r.route.path){ routes.push( r.route.path )}
        })
    res.send({vendor: 'resource',routes: routes,})
    });


    app.get('/posts', PostController.posts);
    app.get('/post/:id', PostController.post);


};