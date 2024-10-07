

//Showing data from a home page
const getHomePage = (req, res) => {
  var data;
    if(req.query.message == 'dataSaved'){
      data = {
        "message" : "Your query has been recorded"
      }
    }
    res.render('index' , {data});  // Renders index.ejs
  };
  

  const getHomeData = (req, res) => {
    res.json({ message: "Welcome to the home data API" });
  };
  
  // Exporting the functions as a module
  module.exports = {
    getHomePage,
    getHomeData
  };
  