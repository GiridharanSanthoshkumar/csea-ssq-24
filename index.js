import express from "express";
import bodyParser from "body-parser";

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let data=[];
    

    

app.get("/",(req,res)=>{
    console.log(data);
    res.render("index.ejs",{cmts:data});
});
app.post("/adcmt",(req,res)=>{
    const cmt={
        comment:req.body.cmt,


    }
    data.push(cmt);
    console.log(data);
    console.log(req.body.cmt);
    res.redirect("/");
});
app.post("/addpost",(req,res)=>{
    let reply=req.body.rep;
    let comm=req.body.cmt;
    let findobj=data.find((d)=>{(d.commennt===comm)});
    
});
app.listen("3000",()=>{
    console.log("server started at 3000");
})
