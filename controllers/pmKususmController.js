const getPmKususm = (req, res) => {
    res.render("pmKusum/pm-kusum");
  };

  const getState = (req,res) =>{
    res.render("pmKusum/state/state");
  }

  module.exports = {
    getPmKususm,
    getState
  };
  