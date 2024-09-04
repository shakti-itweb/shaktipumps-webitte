const getDomestic = (req, res) => {
    res.render("domestic/domestic");
  };
  
  const getDomesticInfo = (req, res) => {
    res.json({ info: "About us information" });
  };
  
  module.exports = {
    getDomestic,
    getDomesticInfo,
  };
  