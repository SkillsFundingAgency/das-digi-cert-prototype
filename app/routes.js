//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.get('/digital-certificates/v1/bse-electrotechnical/share-certificate/', function (req, res) {
  res.render('digital-certificates/v1/bse-electrotechnical/share-certificate/index', {
    query: req.query
  });
});