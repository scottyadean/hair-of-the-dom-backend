const Post = require('../models/Post')

module.exports = {
    /**
     * @name posts
     * @example 
     * {get} /posts
     * @description returns array of post objects
     * @returns array<object>
     */
    posts(req, res, next){  
        Post.find().limit(1000).then((posts)=>{
                res.send({results: posts, success:true, errors: []})
            }).catch((err)=>{
                res.status(401).send({results: [], success:false, errors: [err.message]})
                next()
            })
    },


   /**
    * @description display a single post
    * @example /post/:slug
    * @method get
    * @param {string} slug post slug name
    */
   post(req, res, next){
        const props = req.body;
        const id   = req.params.id
        Post.findOneAndUpdate({slug: id}, {$inc: { views: 1 } })
        .then(post=>res.send({results: post, success:true, errors: []}))
        .catch((err)=>{
            res.status(422).send({result: null, success:false, errors: [err.message]})
            next();
        });
    },

}