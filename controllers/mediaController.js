const db = require('../database/config');
const { all } = require('../routes/homeRoutes');

let totalPressRelease, last3Release, recentEvent, last4News, last3Blogs, totalBlogs; 

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
            last3Release = last3Release.recordset;


            // last 4 news
            last4News = await db.request().query(`select top 3 * from shakti_news order by createdOn desc;`);
            if(last4News.rowsAffected == 0){
                console.log("Last 4 news not found in db");
                throw "Last 4 news not found in db";
            }else{
                last4News = last4News.recordset;
            }

 

            // most recent event
            recentEvent = await db.request().query(`select top 1 * from shakti_events ORDER BY createdOn Desc;`);
            if(recentEvent.rowsAffected == 0){
                console.log("No data found for most recent event");
                throw "No data found for most recent event";
            }else{
                recentEvent = await recentEvent.recordset.at(0);
            }


            // last3Blogs
            last3Blogs = await db.request().query(`select top 3 * from shakti_blogs order by createdOn desc;`);
            totalBlogs = await db.request().query(`select * from shakti_blogs`);
            if(last3Blogs.rowsAffected.at(0) == 0) {
                console.log("Last 3 blogs not found");
                throw "Last 3 blgos not found";
            }else{
                last3Blogs = last3Blogs.recordset;
                totalBlogs = totalBlogs.rowsAffected.at(0);
            }
    
            // console.log(totalPressRelease,last3Release, recentEvent);
            // console.log(last3Blogs)
            return;
        }
    } catch (error) {
        console.log("Error found -->  :: ", error);
    } finally {
        await db.close(); 
    }
}


const mediaHome = async (req,res) => {
    await fetchCommonData();
    res.render('media/media.ejs', {totalPressRelease, last3Release, recentEvent, last4News,last3Blogs, totalBlogs});
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
    // fetch all blogs from db
    let allBlogs;
    try {
        await db.connect();
        allBlogs = await db.request().query(`select * from shakti_blogs;`);
        if(allBlogs.rowsAffected.at(0) == 0){
            console.log("No blogs found")
        }else{
            allBlogs = allBlogs.recordset;
            console.log("Printing all blogs :: ", allBlogs)
            return res.render('media/blogList.ejs' , {allBlogs});
        }
    } catch (error) {
        console.log("Error:: ", error);
    }finally{
        await db.close();
    }


    // res.render('media/blogList.ejs');
}


const blogDetails = async (req,res) => {

    const blogId = req.query.id;
    try {
        await db.connect();
        let blogDetail = await db.request().query(`select * from shakti_blogs where id = ${blogId}`);
        if(blogDetail.rowsAffected.at(0) == 0) {
            console.log("Blog details not found in db");
            throw "Blog details not foudn in db";
        }else{
            blogDetail = blogDetail.recordset.at(0);
            console.log(blogDetail);

            let paragraphArray = blogDetail.description.split('/n');
            let headingH3 = paragraphArray.filter((string)=>{
                return string.startsWith('[h3]');
            })

            console.log(paragraphArray, headingH3)
            return res.render('media/blogDetails.ejs', {blogDetail, paragraphArray, headingH3});
        }
    } catch (error) {
        console.log(error);
    }finally{
        await db.close();
    }
    
}


const newsListing = async (req,res) => {
    try {
        await db.connect();

        // fetch all news from db
        const allNews = await db.request().query(`select * from shakti_news order by createdOn desc;`);
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