const db = require('../database/config');

// defining global variables
let  last4News, recentEvent;


const fetchCommonData = async (req,res) => {
  try {
    await db.connect();
    last4News = await db.request().query(`select top 4 * from shakti_news order by createdOn desc;`);
    if(last4News.rowsAffected == 0 ){
      console.log("last 4 news not found");
      throw "Last 4 news not found";
    }else{
      last4News = last4News.recordset;
      console.log();
    }


    recentEvent = await db.request().query(`select top 1 * from shakti_events order by createdOn desc;`);
    if(recentEvent.rowsAffected == 0){
      console.log("Recent event not found");
      throw "recent event not found";
    }else{
      recentEvent = await recentEvent.recordset.at(0);
    }
  } catch (error) {
    console.log("Error is :: ", error);
  }finally{
    await db.close();
  }
}


//Showing data from a home page
const getHomePage = async (req, res) => {

  await fetchCommonData();
  var data;
    if(req.query.message == 'dataSaved'){
      data = {
        "message" : "Your query has been recorded"
      }
    }

    res.render('index' , {data, last4News, recentEvent});  // Renders index.ejs
  };
  
  const getHomeData = (req, res) => {
    res.json({ message: "Welcome to the home data API" });
  };
  
  // Exporting the functions as a module
  module.exports = {
    getHomePage,
    getHomeData
  };
  