const servicePage = async (req,res) => {
    res.render('serviceSupport/servicePage.ejs');
}


const tiltCalculator = async (req,res) => {
    res.render('serviceSupport/tiltCalculator.ejs');
}



module.exports = {servicePage,tiltCalculator};