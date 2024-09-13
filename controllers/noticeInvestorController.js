const getNoticeListing = (req, res) => {
  res.render("noticeAndInvestor/notice-listing");
};

const getParticularNotice = (req, res) => {
  res.render("");
};

const getInvestorListing = (req,res)=>{
    res.render("noticeAndInvestor/investor-listing");
}

const getParticularInvestor = (req,res)=>{

}

module.exports = {
  getNoticeListing,
  getParticularNotice,
  getInvestorListing,
  getParticularInvestor,
};
