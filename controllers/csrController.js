const getCsrPage = (req, res) => {
    res.render("csractivity/shaktiFoundation");
  };
  
  const getCsrInfo = (req, res) => {
    res.json({ info: "About us information" });
  };
  
  module.exports = {
    getCsrPage,
    getCsrInfo,
  };
  