const express = require("express");
const cookiesParser = require('cookie-parser');
const sessions = require("express-session");
const cookie = require("express-session/session/cookie");
const app = express();
const port = 5000;

const sessionOptions = {
    secret:"secretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAage: 7*24*60*60*1000,
        httpOnly: true
    }
}
// app.use(cookiesParser("code"));
app.use(sessions(sessionOptions));

// app.use('/err',(req,res)=>{
//     console.log("main");
//     abcd  = acbd ;
// })
// app.use('/err', (err, req, res, next)=>{
//     console.log("err midllware Error : ",err);
//     // next();
// })

app.get('/', (req, res) => {
    const {name} = req.query
    req.session.name = name
    console.log(req.session.name);
    res.redirect('/hello');
})

app.get('/hello',(req,res)=>{
    req.session.count = 1
    if (req.session.count) {
        req.session.count++
    }else{
        req.session.count = 1
    }
    res.send(`Hello, ${req.session.name}, ${req.session.count}`);
})
// app.get('/user', (req, res) => {
//     res.cookie("name","Gaurav Kumar");
//     console.log(req.cookies);
//     res.send("I am User");
// })

// app.get('/post',(req, res)=>{
//     const {name} = req.cookies;
//     res.send(`name: ${name}`);
// })

// app.get('/signcookies',(req,res)=>{
//     res.cookie("color","red",{signed: true});
//     res.send("signcookies");
// })

// app.get('/veryfiy',(req,res)=>{
//     console.log(req.signedCookies);
// })

app.listen(port, ()=>{
    console.log("The server is run on Port:5000");
})