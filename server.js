const express = require('express');
const env = require("dotenv");
const app = express();
const path = require('path')
const homeRoutes = require('./routes/homeRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const csrRoutes = require('./routes/csrRoutes');
const infraRoute = require('./routes/infrastructureRoutes')
const domesticRoute = require('./routes/domesticRoutes');
const goverment = require('./routes/govermentRouter');
const international = require('./routes/internationalRoutes')
env.config();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine', 'ejs');
app.set('views',path.resolve("./views"));

//Path for calling a routes
app.use('/', homeRoutes);  
app.use('/about', aboutRoutes);
app.use('/csr',csrRoutes);
app.use('/infrastructure',infraRoute);
app.use('/domestic',domesticRoute);
app.use('/goverment',goverment);
app.use('/international',international);


app.get('/check',(req,res)=>{
    // res.send("Your are rendreing from HTML");
    // return res.render("test")
    return res.render("homepage")
})

const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`You are listining at ${port}`)
})