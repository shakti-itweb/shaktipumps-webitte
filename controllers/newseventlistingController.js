const getNewsListing = (req, res) => {
  res.render("newseventListing/news-listing");
};

const getParticularNews = (req,res)=>{
  res.render("newseventListing/news-details");
}

const getNewsListingInfo = (req, res) => {
  res.json({ info: "News Listing information" });
};

const getEventListing = (req, res) => {
  res.render("newseventListing/event-listing");
};

const getParticularEvent = (req,res)=>{
  res.render("newseventListing/event-details");
}

const getEventListingInfo = (req, res) => {
  res.json({ info: "Event Listing information" });
};

module.exports = {
  getNewsListing,
  getParticularNews,
  getNewsListingInfo,
  getEventListing,
  getParticularEvent,
  getEventListingInfo
};
