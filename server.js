const express =require("express");
const app=express();
const port=process.env.PORT || 6700;

// to tell app,where to find the static files-html/css/js are stored
app.use(express.static("frontend"));

app.listen(port,function(){
    console.log("app running on http://localhost:"+port);
});