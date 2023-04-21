let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next){
    res.json( { "message": "hello from my web server! this is an azure app." } )
})

module.exports = router