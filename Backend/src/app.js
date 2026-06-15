const dns = require("dns");
const express = require('express')
const multer = require('multer')
const postModel = require("./models/post.model")
const uploadFile = require("./services/storage.service")
const cors = require('cors')

dns.setServers([
  "1.1.1.1",
  "8.8.8.8"
]);


const app = express(); // created
app.use(express.json())
app.use(cors()) //use cors as middleware

const upload = multer({ storage: multer.memoryStorage() })

//POST/create-post
app.post("/create-post", upload.single("image"), async (req, res) => {
  
  const result = await uploadFile(req.file.buffer)

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption
  })

  return res.status(201).json({
    message: "Post created successfully",
    post
  })

})

//GET/posts
app.get("/posts", async(req, res) => {

  const posts = await postModel.find()

  return res.status(200).json({
    message: "posts fetched successfully",
    posts
  })
})


module.exports = app