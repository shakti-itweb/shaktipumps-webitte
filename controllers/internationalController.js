const getInternational = (req, res) => {
    res.render("international/international");
  };
  
  const getInternationalInfo = (req, res) => {
    res.json({ info: "About us information" });
  };
  
  module.exports = {
    getInternational,
    getInternationalInfo,
  };
  