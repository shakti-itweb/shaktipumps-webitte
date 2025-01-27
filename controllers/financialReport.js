const db = require("../database/pumpTable");

const getFinancialReport = async (req, res) => {
    await db.connect();
    const quarterlyResults = await db.request().query(`select * from quarterlyResults ORDER BY year DESC, quater;`);
    const annualReturns = await db.request().query(`select * from annualReturn  order by year desc `);
    const relatedPartyDisclosure = await db.request().query(`select * from relatedPartyDisclosure `);
    const annualReport = await db.request().query(`select * from annualReport ORDER BY year DESC`);
    const BRSR = await db.request().query(`select * from BRSR ORDER BY year DESC`);
    const resultRelease = await db.request().query(`select * from resultRelease ORDER BY year DESC`);
    const investorPresentation = await db.request().query(`select * from investorPresentation ORDER BY year DESC`);
    const subsidiaryResults = await db.request().query(`select * from subsidiaryResults order by year desc `);
    const conferenceCall = await db.request().query(`select * from conferenceCall`);
    res.render("financialReports/financial-report",{quarterlyResults,annualReturns,relatedPartyDisclosure,annualReport,BRSR,resultRelease,investorPresentation,subsidiaryResults,conferenceCall});
  };



  const getChairmanProfile = async (req, res) => {
    res.render("financialReports/chairman-profile");
  };

  const getShareholding = async (req, res) => {
    await db.connect();
    const shareholding = await db.request().query(`select * from shareholding order by year DESC`);
    res.render("financialReports/shareHoldingPattern",{shareholding});
  };

  const getreportOfCopyGovernance = async (req, res) => {
    await db.connect();
    const reportOfCopyGovernance = await db.request().query(`select * from reportOfCopyGovernance ORDER BY year DESC`);
    res.render("financialReports/reportOfCopyGovernance",{reportOfCopyGovernance});
  };

  const getauditSecratrialReport = async (req, res) => {
    await db.connect();
    const secretarialAuditReport = await db.request().query(`select * from secretarialAuditReport ORDER BY year DESC`);
    const annualSecretarialAuditReport = await db.request().query(`select * from annualSecretarialAuditReport ORDER BY year DESC`);
    res.render("financialReports/secratrialAuditReport",{secretarialAuditReport,annualSecretarialAuditReport});
  };

  const getcomplianceCertificateReport = async (req, res) => {
    await db.connect();
    const complianceCertificate = await db.request().query(`select * from complianceCertificate ORDER BY year DESC`);
    const reconciliationCertificate = await db.request().query(`select * from reconciliationCertificate ORDER BY year DESC`);
    res.render("financialReports/complianceCertificate",{complianceCertificate,reconciliationCertificate});
  };
  
  const getkycUpdateReport = async (req, res) => {
    await db.connect();
    const kycUpdation = await db.request().query(`select * from kycUpdation`);
    res.render("financialReports/kycUpdation",{kycUpdation});
  };

  const getNewsAndAnnouncement = async (req, res) => {
    await db.connect();
    const creditRating = await db.request().query(`select * from creditRating ORDER BY year DESC`);
    const disclosureUnderReg30 = await db.request().query(`select * from disclosureUnderReg30`);
    const newspaperPublication = await db.request().query(`select * from newspaperPublication ORDER BY year DESC`);
    res.render("financialReports/newsAndAnnouncements",{creditRating,disclosureUnderReg30,newspaperPublication});
  };

  const getBoardMeeting = async (req, res) => {
    await db.connect();
    const OutcomeofBoardMeeting = await db.request().query(`select * from OutcomeofBoardMeeting`);
    const intimationofBoardMeeting = await db.request().query(`select * from intimationofBoardMeeting`);
    res.render("financialReports/boardMeeting",{OutcomeofBoardMeeting,intimationofBoardMeeting});
  };

  const getInvestorEducation = async (req, res) => {
    await db.connect();
    const unpaidDividendInvestors = await db.request().query(`select * from unpaidDividendInvestors`);
    const IEPFShares = await db.request().query(`select * from IEPFShares`);
    const IEPFAmount = await db.request().query(`select * from IEPFAmount`);
    res.render("financialReports/investorsEducation",{unpaidDividendInvestors,IEPFShares,IEPFAmount});
  };

  const getGeneralInfo = async (req, res) => {
    await db.connect();
    const generalInfo = await db.request().query(`select * from generalInfo`);
    res.render("financialReports/general-info",{generalInfo});
  };

  const getpoliciesPrograms = async (req, res) => {
    await db.connect();
    const policiesPrograms = await db.request().query(`select * from policiesPrograms`);
    const otherPolicies = await db.request().query(`select * from otherPolicies`);
    
    res.render("financialReports/policies-programs",{policiesPrograms,otherPolicies});
  };
  
  const getFinancialReportInfo = (req, res) => {
    res.json({ info: "financial report information" });
  };


  
  module.exports = {
    getFinancialReport,
    getFinancialReportInfo,
    getShareholding,
    getreportOfCopyGovernance,
    getauditSecratrialReport,
    getcomplianceCertificateReport,
    getkycUpdateReport,
    getNewsAndAnnouncement,
    getBoardMeeting,
    getInvestorEducation,
    getChairmanProfile,
    getGeneralInfo,
    getpoliciesPrograms
  };
  