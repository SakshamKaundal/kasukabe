const router = require('express').Router();

router.route('/register').get((req, res) => {
    res.send("User Routes Working fine");
})

module.exports = router;