const getPatent = (req, res) => {
    res.render("patents/patents-listing");
  };
  
  const getPatentInfo = (req, res) => {
    res.json({ info: "About us information" });
  };
  
  module.exports = {
    getPatent,
    getPatentInfo,
  };
  