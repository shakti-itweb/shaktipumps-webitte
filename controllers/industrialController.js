const getIndustrial = (req, res) => {
    res.render("industrial/industry");
  };
  
  const getIndustrialInfo = (req, res) => {
    res.json({ info: "Industrial information" });
  };
  
  module.exports = {
    getIndustrial,
    getIndustrialInfo,
  };
  