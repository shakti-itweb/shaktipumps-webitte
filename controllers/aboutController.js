const getAboutPage = (req, res) => {
  res.render("aboutus/aboutUs");
};

const getAboutInfo = (req, res) => {
  res.json({ info: "About us information" });
};

module.exports = {
  getAboutPage,
  getAboutInfo,
};
