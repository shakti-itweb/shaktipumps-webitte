const express = require('express');
const env = require("dotenv");
const app = express();
const path = require('path');
const homeRoutes = require('./routes/homeRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const csrRoutes = require('./routes/csrRoutes');
const infraRoute = require('./routes/infrastructureRoutes');
const domesticRoute = require('./routes/domesticRoutes');
const goverment = require('./routes/govermentRouter');
const international = require('./routes/internationalRoutes');
const newseventListing = require('./routes/newseventlistingRoutes');
const investorNotice = require('./routes/noticeInvestorRoutes');
const patent = require('./routes/patentRoutes');
const pmKusum = require('./routes/pmKusumRoutes');
const career = require('./routes/careerRoutes');
const contact = require('./routes/contactRoutes');
const media = require('./routes/mediaRoutes');
const industrial = require('./routes/industrialRouter');
const product = require('./routes/productRoutes');
const solaroem = require('./routes/solarOEMRouter')
const serviceSupport = require('./routes/serviceSupport');

env.config();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
// Set trust proxy if your app is behind a proxy (like Heroku, AWS, etc.)
app.set('trust proxy', true); // Important for getting the correct IP address
app.use(express.static(path.join(__dirname,'public')));
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
app.use('/newseventListing',newseventListing); //Contain both event as well as news
app.use('/noticeInvestor',investorNotice);//Contain both notice as well as investor
app.use('/patent',patent);
app.use('/pmKusum',pmKusum);
app.use('/career', career);
app.use('/contact', contact);
app.use('/media', media);


app.use('/industrial',industrial);
app.use('/product',product);
app.use('/solaroem',solaroem);
app.use('/service-support', serviceSupport);



app.get('/check',(req,res)=>{
    // res.send("Your are rendreing from HTML");
    // return res.render("test")
    return res.render("homepage");
})




const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`You are listining at ${port}`);
})