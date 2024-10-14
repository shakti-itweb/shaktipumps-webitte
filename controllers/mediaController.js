const db = require('../database/config');
const { all } = require('../routes/homeRoutes');

let totalPressRelease, last3Release, recentEvent; 

const fetchCommonData = async () => {
    try {
        await db.connect();
        const queryResponse = await db.request().query(`select * from press_release`);
        if(queryResponse.rowsAffected == 0) {
            console.log("No Data found");
            throw "No data found for press release";
        }else{
            
            totalPressRelease = queryResponse.rowsAffected.at(0);
    
            last3Release = await db.request().query(`SELECT TOP 3 * FROM press_release ORDER BY createdOn DESC;`)
            last3Release = await last3Release.recordset;

            // most recent event
            recentEvent = await db.request().query(`select top 1 * from shakti_events ORDER BY createdOn Desc;`);
            if(recentEvent.rowsAffected == 0){
                console.log("No data found for most recent event");
                throw "No data found for most recent event";
            }else{
                recentEvent = await recentEvent.recordset.at(0);
            }
    
            // console.log(totalPressRelease,last3Release, recentEvent);
            console.log(last3Release)
            return;
        }
    } catch (error) {
        console.log("Error found :: ", error);
    } finally {
        await db.close(); 
    }
}









const mediaHome = async (req,res) => {
    fetchCommonData();
    res.render('media/media.ejs', {totalPressRelease, last3Release, recentEvent});
    // res.render('media/media.ejs');
}


const newsDetails = async (req,res) => {
    const newsId = req.query.id;
    try {
        await db.connect();
        let newsDetail = await db.request().query(`select * from shakti_news where id = ${newsId}`);
        if(newsDetail.rowsAffected == 0){
            console.log("No details found for given news id ", newsId);
            throw `No details found for given news id ${newsId}`;
        }else{
            newsDetail = await newsDetail.recordset.at(0);
            let paragraphArray = newsDetail.description.split('/n');
            console.log(newsDetail);
            // console.log(paragraphArray);
            res.render('media/newsDetails.ejs', {newsDetail, paragraphArray});
        }
    } catch (error) {
        console.log("Error catch :: ", error);
    }finally{
        await db.close();
    }
    
    
}


const listBlog = async (req,res) => {
    res.render('media/blogList.ejs');
}


const blogDetails = async (req,res) => {
    res.render('media/blogDetails.ejs');
}


const newsListing = async (req,res) => {
    try {
        await db.connect();

        // fetch all news from db
        const allNews = await db.request().query(`select * from shakti_news;`);
        if(allNews.rowsAffected == 0){
            console.log("No news found of some error occured");
            throw "some error occured or no news found in db";
        }else{
            const allNewsObj = await allNews.recordset;
            // console.log("Printing news fetch from db :: ", allNewsObj);
            res.render('media/newsListing.ejs' , {allNewsObj});        
        }
    } catch (error) {
        
    }finally{
        await db.close();
    }


    // res.render('media/newsListing.ejs');
}


const pressRelease = async (req,res) => {
    // fetch data from database
    try {
        await db.connect();
        const queryResponse = await db.request().query(`select * from press_release`);
        if(queryResponse.rowsAffected == 0) {
            console.log("No Data found");
        }else{

            const totalPressRelease = queryResponse.recordset.length;

            const financialYear24 = queryResponse.recordset.filter((val)=>{
                return (val.financial_year.split('-').at(0) == '2024');
            })

            const financialYear23 = queryResponse.recordset.filter((val)=>{
                return (val.financial_year.split('-').at(0) == '2023');
            })

            const financialYear22 = queryResponse.recordset.filter((val)=>{
                return (val.financial_year.split('-').at(0) == '2022');
            })

            // console.log(financialYear24,financialYear23, financialYear22)

            res.render('media/pressRelease.ejs', {financialYear24, financialYear23, financialYear22, totalPressRelease} );
        }
    } catch (error) {
        console.log("Error found :: ", error);
    } finally {
        await db.close(); 
    }


    
}

module.exports = {mediaHome,newsDetails,listBlog, blogDetails, newsListing , pressRelease}