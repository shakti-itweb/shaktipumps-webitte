const db = require('../database/config');


const home = async (req,res) => {
    // fetch vacancy data from here

    // try{
    //     await db.connect();
    //     vacancyData = await db.request().query(`select * from postjob`)
    // }
    // catch(err){
    //     console.log(err);
    // }
    // finally{
    //     await db.close();
    // }

    try {
        await db.connect();
        const vacancyData = (await db.request().query(`select * from postjob`)).recordset;

        // console.log("Printing vacancyData :: ",vacancyData, typeof vacancyData);
        const InformTech = vacancyData.filter((val)=>{
            return (val.department == 'Inform Tech');
        })

        

        const ResearchAndDev = vacancyData.filter((val)=>{
            return (val.department == 'Research And Dev');
        })

        console.log("Printing R&D :: ", ResearchAndDev);

        

        const HR = vacancyData.filter((val)=>{
            return (val.department == 'HR');
        })

        


        const IB = vacancyData.filter((val)=>{
            return (val.department == 'IB');
        })

        

        const IndustrySales = vacancyData.filter((val)=>{
            return (val.department == 'Industry Sales');
        })


        res.render("career/career", {InformTech, ResearchAndDev, HR, IB, IndustrySales});
        return; //This will prevent from multiple rendering
      } catch (error) {
        console.log("some error occured", error);
      }
      finally{
        await db.close();
      }
    // res.render("career/career");
}

const lifeAtShakti = (req,res) => {
    res.render('career/lifeAtShakti', )
}

const jobDetails = async (req,res) => {
    const jobId = req.query.jobid;
    let jobDetails;
    try {
        await db.connect();
        jobDetails = await db.request().query(`select * from postjob where jobId = ${jobId}`);
        jobDetails = jobDetails.recordset;
        jobDetails = jobDetails.at(0);
        console.log("Printing job details :: ", jobDetails);
        res.render('career/jobDetails', {jobDetails});
        return;
    } catch (error) {
        console.log("Error in try block :: ", error);
    } finally{
        await db.close();
    }
    
    res.render('career/jobDetails' );
    return;
}

module.exports = {home,lifeAtShakti,jobDetails};
