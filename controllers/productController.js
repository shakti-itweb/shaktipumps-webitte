const db = require("../database/pumpTable");

const getProduct = (req, res) => {
  res.render("product/product");
};

const getProductInfo = (req, res) => {
  res.json({ info: "product information" });
};

const getfetchProductsForListing = async (req, res) => {
  console.log("Printing product type before going to actual content",req.params.pageValue);
    const pageType = req.params.pageValue;
  try {
    if (pageType == "pumps") {
        await db.connect();
        const queryResponse = await db.request().query(`select * from pumpTable`);
        console.log(queryResponse);
      res.render("product/product-listing",queryResponse);
      return; //This will prevent from multiple rendering
    }else if (pageType == "motor") {
        await db.connect();
        const queryResponse = await db.request().query(`select * from motor`);
        console.log(queryResponse);
      res.render("product/product-listing",queryResponse);
      return; //This will prevent from multiple rendering
    }else if (pageType == "solarpumps") {
        await db.connect();
        const queryResponse = await db.request().query(`select * from solarPump`);
        console.log(queryResponse);
      res.render("product/product-listing",queryResponse);
      return; //This will prevent from multiple rendering
    }if (pageType == "controllers") {
        await db.connect();
        const queryResponse = await db.request().query(`select * from controller`);
        console.log(queryResponse);
      res.render("product/product-listing",queryResponse);
      return; //This will prevent from multiple rendering
    }else if (pageType == "inverters") {
        await db.connect();
        const queryResponse = await db.request().query(`select * from inverter`);
        console.log(queryResponse);
      res.render("product/product-listing",queryResponse);
      return; //This will prevent from multiple rendering
    }else if (pageType == "other") {
        await db.connect();
        const queryResponse = await db.request().query(`select * from specialApplication`);
        console.log(queryResponse);
      res.render("product/product-listing",queryResponse);
      return; //This will prevent from multiple rendering
    }
  } catch (error) {
    console.log("some error occured", error);
  }
  res.render("product/product-listing");
};

const getfetchProductDetails = async (req, res) => {
  // console.log(req.params.pageValue);
    const table = req.params.table;
    const id = req.params.item;
    console.log("Printing table and id for a particular product",table,id);
  try {
    if (table == "pumps") {
        await db.connect();
        console.log("In pumps");
        const queryResponse = await db.request().query(`select * from pumpTable where id=${id}`);
        console.log(queryResponse);
      res.render("product/product-details",queryResponse);
      return; //This will prevent from multiple rendering
    }else if (table == "motor") {
        await db.connect();
        console.log("In motor");
        const queryResponse = await db.request().query(`select * from motor where id=${id}`);
        console.log(queryResponse);
      res.render("product/product-details",queryResponse);
      return; //This will prevent from multiple rendering
    }else if (table == "solarpumps") {
        await db.connect();
        console.log("In solarpumps");
        const queryResponse = await db.request().query(`select * from solarPump where id=${id}`);
        console.log(queryResponse);
      res.render("product/product-details",queryResponse);
      return; //This will prevent from multiple rendering
    }if (table == "controllers") {
        await db.connect();
        console.log("In controller");
        const queryResponse = await db.request().query(`select * from controller where id=${id}`);
        console.log(queryResponse);
      res.render("product/product-details",queryResponse);
      return; //This will prevent from multiple rendering
    }else if (table == "inverters") {
        await db.connect();
        console.log("In inverter");
        const queryResponse = await db.request().query(`select * from inverter where id=${id}`);
        console.log(queryResponse);
      res.render("product/product-details",queryResponse);
      return; //This will prevent from multiple rendering
    }else if (table == "specialApplications") {
        await db.connect();
        console.log("In other");
        const queryResponse = await db.request().query(`select * from specialApplication where id=${id}`);
        console.log(queryResponse);
      res.render("product/product-details",queryResponse);
      return; //This will prevent from multiple rendering
    }
  } catch (error) {
    console.log("some error occured", error);
  }
  // res.render("product/product-details");
};

module.exports = {
  getProduct,
  getProductInfo,
  getfetchProductsForListing,
  getfetchProductDetails
};
