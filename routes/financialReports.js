const express = require('express');
const router = express.Router();
// const domesticController = require('../controllers/domesticController');

// // Route for the about page
// router.get('/', domesticController.getDomestic);

// // Route for some about-related information
// router.get('/info', domesticController.getDomesticInfo);

const financialReports = require('../controllers/financialReport');
router.get('/',financialReports.getFinancialReport);
router.get('/chairmanProfile',financialReports.getChairmanProfile);
router.get('/shareholding',financialReports.getShareholding);
router.get('/reportOfGovernance',financialReports.getreportOfCopyGovernance);
router.get('/secratrialAuditReport',financialReports.getauditSecratrialReport);
router.get('/complianceCertificate',financialReports.getcomplianceCertificateReport);
router.get('/kycUpdate',financialReports.getkycUpdateReport);
router.get('/newsAndAnnouncement',financialReports.getNewsAndAnnouncement);
router.get('/boardMeeting',financialReports.getBoardMeeting);
router.get('/investorEducation',financialReports.getInvestorEducation);
router.get('/general-info',financialReports.getGeneralInfo);
router.get('/policies-programs',financialReports.getpoliciesPrograms);
router.get('/qip',financialReports.getqip);
router.get('/postal-ballot',financialReports.getpostalBallot);
router.get('/general-meeting',financialReports.getgeneralMeeting);



///Testing 
router.get('/info',financialReports.getFinancialReportInfo);


module.exports = router;