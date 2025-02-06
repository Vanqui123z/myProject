const InforStudent = require("../models/InforStudent")

class InforStudentControllers{
    show = async (req,res)=>{
        try {
            const Infstudent = await InforStudent.findOne({name: req.query.name});
            console.log("inf",Infstudent)
                res.render('main', {
                    contentFile: '../inforStudent',
                    points: Infstudent,
                });

           
            
        } catch (error) {
            
        }
    }
    
}

module.exports = new InforStudentControllers;