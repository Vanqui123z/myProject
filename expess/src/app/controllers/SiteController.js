const st = require("../models/Student")

class SiteController {

    index = async (req, res) => {
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
    search = async (req, res) => {
        try {
            var ten = req.query.sinhvien;
            let student;
            if (!ten) {
                 student = await st.find();
            } else {
                 student = await st.find({ name: { $regex: ten, $options: "i" } })
            }
            res.render("main", {
                contentFile: '../home',
                points: student,
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).send("error:" + error.message)
        }
    }
}


module.exports = new SiteController;