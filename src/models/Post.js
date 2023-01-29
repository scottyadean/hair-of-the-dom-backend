const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const PostBodySchema = new Schema({
    type:{ type: String},
    caption:{type: String},
    content: {type: String, default: ""},
    toggle_to_show:{type: Boolean, default: false},
});


const PostSchema = new Schema({
    slug:{
        type: String, 
        index: true,
        required: true 
    },
    image:{
        type: String
    },
    title: { 
        type: String, 
        required: true,
        unique: true,
    },

    description_sort:{
        type: String
    },
    description: { 
        type: String, 
    },
    catagory: {
        type: String,
    },
    repo_link: {
        type: String,
    },
    post_body:{
        type: [PostBodySchema]
    },
    inactive: { 
        type: Boolean, 
        default: false  
    },

    views: {
        type: Number
    },
    
    created_at: Date,
});


const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');



PostSchema.pre('save', async function (next) {
    // create slug
    const p = this
    if (p.isModified('title')) {
        p.slug = slugify(p.title)
    }
    next()
})



const Post = mongoose.model('post', PostSchema)
module.exports = Post;