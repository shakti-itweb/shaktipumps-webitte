const getInfrastructurePage = (req, res) => {
    res.render("infrastructure/infrastructurePage");
  };
  
  const getInfrastructureInfo = (req, res) => {
    res.json({ info: "About us information" });
  };
  
  module.exports = {
    getInfrastructurePage,
    getInfrastructureInfo,
  };
  