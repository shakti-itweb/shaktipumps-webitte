const getSolarOEM = (req, res) => {
    res.render("solarOEM/solar-oem");
  };
  
  const getSolarOEMInfo = (req, res) => {
    res.json({ info: "About us information" });
  };
  
  module.exports = {
    getSolarOEM,
    getSolarOEMInfo,
  };
  