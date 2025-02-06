const st = require("../models/Student")

class SiteController {

    index = async (req, res)=>{
        try {
            const student = await st.find();
            res.render("main", {
                contentFile: '../home',
                points: student,
            });
        } catch (err) {
            res.status(400).send("error:" + err.message)
        }
    }
    news = (req, res) => {
        res.render('main', {
            contentFile: '../news',
        })
    }
}


module.exports = new SiteController;