const db = require('../database/config');

const getNewsListing = (req, res) => {
  res.render("newseventListing/news-listing");
};

const getParticularNews = (req,res)=>{
  res.render("newseventListing/news-details");
}

const getNewsListingInfo = (req, res) => {
  res.json({ info: "News Listing information" });
};

const getEventListing = async (req, res) => {

// /images/events/
  try {
    await db.connect();
    let allEvents = await db.request().query(`select * from shakti_events`);
    if(allEvents.rowsAffected == 0){
      console.log("No events found in db");
      throw "No events found in db";
    }else{
      allEvents = await allEvents.recordset;
     
      // Updating event_frm_date and event_to_date to string format
      allEvents = allEvents.map(event => {
        return {
          ...event,
          event_frm_date: String(event.event_frm_date), // Convert to string format
          event_to_date: String(event.event_to_date)    // Convert to string format
        };
      });

      console.log(allEvents);
      res.render("newseventListing/event-listing" , {allEvents});
    }

  } catch (error) {
    console.log("Error :: ", error);
  }finally{
    await db.close();
  }
};

const getParticularEvent = async (req,res)=>{
  const eventId = req.query.id;
  try {
    await db.connect();
    let eventDetails = await db.request().query(`select * from shakti_events where id = ${eventId}`);
    if(eventDetails.rowsAffected == 0){
      throw "Data not found for selected event";
    }else{
      eventDetails = await eventDetails.recordset.at(0);
      console.log(eventDetails);
      let paragraphArray = eventDetails.event_description.split('/n');
      res.render("newseventListing/event-details" , {eventDetails, paragraphArray});
    }
  } catch (error) {
    throw error;
  }finally{
    await db.close();
  }  
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
