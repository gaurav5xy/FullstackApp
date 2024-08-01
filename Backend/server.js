const express = require("express");
const mongoose =  require("mongoose");
const productsRoute = require('./router/prodcts');
const userRoute = require('./router/user');
const cors = require("cors")
const LocalStrategy = require("passport-local");
const User = require("./model/user");
const passport = require("passport");
const session = require("express-session");

const app = express();
const port = 5000;

app.use(cors("http://localhost:5173/"))

app.use(express.urlencoded({extended: true}));
app.use(express.json());

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

app.use(session(sessionOptions))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post("/demouser", async(req, res)=>{
    const {username} = req.body;

    const fakeUser  = new User({
        email: "gaurav@gmail",
        username: username,
    })

   const registereduser = await User.register(fakeUser,"password");
   res.send(registereduser);

})


app.use('/api/products', productsRoute);
app.use('/', userRoute);

main()
.then((res)=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log(err);
})


async function main() {
    await mongoose.connect('mongodb+srv://gaurav_pg:gauravkumar@cluster0.b7b7nvq.mongodb.net/products');
}

app.listen(port, ()=>{
    console.log("server start");
}) 