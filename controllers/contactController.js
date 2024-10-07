
const countryList = require('../public/json/countryList.json');
const db = require('../database/config');

const home = async (req,res) => {
    res.render('contact/contactUs.ejs', {countryList});
}

const formSubmission = async (req,res) => {
    let {name , firm_name, email, country, enquiry_for, phone, message} = req.body;
    // name = String(name);
    // firm_name = String(firm_name);
    // email = String(email);
    // enquiry_for = String(enquiry_for);
    // phone
    let forwardedIp = req.headers['x-forwarded-for'] || req.ip;
    forwardedIp = String(forwardedIp);

    console.log("Printing all data");
    console.log("Name :: ", name, typeof name);
    console.log("firm_name :: ", firm_name, typeof firm_name);
    console.log("email :: ", email, typeof email);
    console.log("Country :: ", country, typeof country);
    console.log("enquiry for :: ", enquiry_for, typeof enquiry_for);
    console.log("Phone :: ", phone, typeof phone);
    console.log("message :: ", message, typeof message);
    console.log("Ip :: ", forwardedIp, typeof forwardedIp);


    try {
        await db.connect();
        // console.log(`Printing query :: INSERT INTO inquiries VALUES (
        //                 '${name},'
        //                 '${email},'
        //                 '${country},'
        //                 '${phone},'
        //                 '${message}'
        //                 '${forwardedIp},'
        //                 'www.shaktipumps.com/contact'
        //                 '${enquiry_for},'
        //                 '${firm_name},'
        //                 GETDATE());`)


        const queryRes = await db.request().query(`INSERT INTO inquiries VALUES (
                        '${name}',                  
                        '${email}',       
                        '${country}',                       
                        '${phone}',                
                        '${message}', 
                        '${forwardedIp}',               
                        'www.shaktipumps.com/contact',    
                        '${enquiry_for}',                 
                        '${firm_name}',               
                        GETDATE());`)
        
        if(queryRes.rowsAffected.at(0) == 1){ // data successfully inserted in table    
            console.log("Data successfully inserted into table")
            console.log("Redirecting");
            return res.redirect('/?message=dataSaved')
        }
        

    } catch (error) {
        console.log("Get some error in try :: ", error)
    }finally{
        await db.close();
    }
}

module.exports = {home ,formSubmission}