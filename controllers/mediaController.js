const mediaHome = async (req,res) => {
    res.render('media/media.ejs');
}


const newsDetails = async (req,res) => {
    res.render('media/newsDetails.ejs');
}


const listBlog = async (req,res) => {
    res.render('media/blogList.ejs');
}


const blogDetails = async (req,res) => {
    res.render('media/blogDetails.ejs');
}


const newsListing = async (req,res) => {
    res.render('media/newsListing.ejs');
}


const pressRelease = async (req,res) => {
    res.render('media/pressRelease.ejs');
}

module.exports = {mediaHome,newsDetails,listBlog, blogDetails, newsListing , pressRelease}