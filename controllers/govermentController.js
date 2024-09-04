const getGoverment = (req, res) => {
    res.render("goverment/goverment");
  };
  
  const getGovermentInfo = (req, res) => {
    res.json({ info: "About us information" });
  };
  
  module.exports = {
    getGoverment,
    getGovermentInfo,
  };
  