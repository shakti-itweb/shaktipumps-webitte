const db = require("../database/pumpTable");

const getProduct = (req, res) => {
  res.render("product/product");
};

const getProductInfo = (req, res) => {
  res.json({ info: "product information" });
};

const getfetchProductsForListing = async (req, res) => {
  console.log(req.params.pageValue);
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
        const queryResponse = await db.request().query(`select * from pumpTable`);
        console.log(queryResponse);
      res.render("product/product-listing",queryResponse);
      return; //This will prevent from multiple rendering
    }else if (pageType == "solarpumps") {
        await db.connect();
        const queryResponse = await db.request().query(`select * from pumpTable`);
        console.log(queryResponse);
      res.render("product/product-listing",queryResponse);
      return; //This will prevent from multiple rendering
    }if (pageType == "controllers") {
        await db.connect();
        const queryResponse = await db.request().query(`select * from pumpTable`);
        console.log(queryResponse);
      res.render("product/product-listing",queryResponse);
      return; //This will prevent from multiple rendering
    }else if (pageType == "inverters") {
        await db.connect();
        const queryResponse = await db.request().query(`select * from pumpTable`);
        console.log(queryResponse);
      res.render("product/product-listing",queryResponse);
      return; //This will prevent from multiple rendering
    }else if (pageType == "other") {
        await db.connect();
        const queryResponse = await db.request().query(`select * from pumpTable`);
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
    console.log(table,id);
  try {
    if (table == "pumps") {
        await db.connect();
        const queryResponse = await db.request().query(`select * from pumpTable where pumpId=${id}`);
        console.log(queryResponse);
      res.render("product/product-details",queryResponse);
      return; //This will prevent from multiple rendering
    }else if (table == "motor") {
        await db.connect();
        const queryResponse = await db.request().query(`select * from pumpTable where pumpId=${id}`);
        console.log(queryResponse);
      res.render("product/product-details",queryResponse);
      return; //This will prevent from multiple rendering
    }else if (table == "solarpumps") {
        await db.connect();
        const queryResponse = await db.request().query(`select * from pumpTable where pumpId=${id}`);
        console.log(queryResponse);
      res.render("product/product-details",queryResponse);
      return; //This will prevent from multiple rendering
    }if (table == "controllers") {
        await db.connect();
        const queryResponse = await db.request().query(`select * from pumpTable where pumpId=${id}`);
        console.log(queryResponse);
      res.render("product/product-details",queryResponse);
      return; //This will prevent from multiple rendering
    }else if (table == "inverters") {
        await db.connect();
        const queryResponse = await db.request().query(`select * from pumpTable where pumpId=${id}`);
        console.log(queryResponse);
      res.render("product/product-details",queryResponse);
      return; //This will prevent from multiple rendering
    }else if (table == "other") {
        await db.connect();
        const queryResponse = await db.request().query(`select * from pumpTable where pumpId=${id}`);
        console.log(queryResponse);
      res.render("product/product-details",queryResponse);
      return; //This will prevent from multiple rendering
    }
  } catch (error) {
    console.log("some error occured", error);
  }
  res.render("product/product-details");
};

module.exports = {
  getProduct,
  getProductInfo,
  getfetchProductsForListing,
  getfetchProductDetails
};
