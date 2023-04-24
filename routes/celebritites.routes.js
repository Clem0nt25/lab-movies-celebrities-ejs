// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celebrities = require('../models/Celebrity.model')




router.get('/create', (req, res) => {
    res.render('./celebrities/new-celebrity')
})



/* POST one new celeb */
router.post('/create', async (req, res) => {
    try {
        const newCeleb = await Celebrities.create(req.body)
        res.redirect('/celebrities/celebrities')
    } catch (error) {
        console.log(error)
        res.redirect('/celebrities/create')
    }
})


/* GET all celebs */
router.get('/celebrities', async (req, res) => {

    try {
        const allCelebs = await Celebrities.find()
        res.render('./celebrities/celebrities', {celebs: allCelebs})

    } catch (error) {
        console.log(error)
    }
})





module.exports = router