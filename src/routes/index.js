const routes = require('express').Router()

routes.get('/', (req, res) => {

    

    return res.status(200).json({
        test: 'OK'
    })
})

module.exports = routes