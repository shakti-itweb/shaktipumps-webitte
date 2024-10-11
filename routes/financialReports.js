const express = require('express');
const router = express.Router();
// const domesticController = require('../controllers/domesticController');

// // Route for the about page
// router.get('/', domesticController.getDomestic);

// // Route for some about-related information
// router.get('/info', domesticController.getDomesticInfo);

const financialReports = require('../controllers/financialReport');
router.get('/',financialReports.getFinancialReport);
router.get('/shareholding',financialReports.getSubsidiaryResult);
router.get('/reportOfGovernance',financialReports.getreportOfCopyGovernance);
router.get('/secratrialAuditReport',financialReports.getauditSecratrialReport);
router.get('/complianceCertificate',financialReports.getcomplianceCertificateReport);
router.get('/kycUpdate',financialReports.getkycUpdateReport);
router.get('/newsAndAnnouncement',financialReports.getNewsAndAnnouncement);
router.get('/boardMeeting',financialReports.getBoardMeeting);
router.get('/info',financialReports.getFinancialReportInfo);


module.exports = router;