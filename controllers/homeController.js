

//Showing data from a home page
const getHomePage = (req, res) => {
    res.render('index');  // Renders index.ejs
  };
  

  const getHomeData = (req, res) => {
    res.json({ message: "Welcome to the home data API" });
  };
  
  // Exporting the functions as a module
  module.exports = {
    getHomePage,
    getHomeData
  };
  