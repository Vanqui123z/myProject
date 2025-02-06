const InforStudentModal = require('../models/InforStudent');
const StudentModal = require('../models/Student');


class FormController {
    show (req, res) {
        res.render('main', {
            contentFile: '../form',
        }
        )
    }
    add (req, res) {
    // lưu vào InforStudent
        const { name, age, hometown, school, academic_performance, conduct, math, liter, eng } = req.body;

    const InforStudent = new InforStudentModal({
        name,
        age,
        hometown,
        school,
        academic_performance,
        conduct
    });
    InforStudent.save()
    // lưu vào Student

        .then(() => {
            const student = new StudentModal({ name, math, liter, eng });
            return student.save();
        })
        .then(res.redirect("/"))
        .catch(err => res.status(500).json({ message: "Lỗi khi lưu!", error: err }));
}
    


    delete= async (req, res) => {
            try {
              await InforStudentModal.deleteOne({name: req.params.name });
              await StudentModal.deleteOne({name: req.params.name });
              res.redirect('/');
            } catch {
            }
          };
    

     edit = async (req,res)=>{
            try {
                const infStudent = await InforStudentModal.findOne({name: req.params.name});
                const student = await StudentModal.findOne({name: req.params.name});

                const points = {
                    infStudent: infStudent,
                    student: student
                };
                    res.render('main', {
                        contentFile: '../edit',
                        points: points,
                    });               
                
            } catch (error) {
                return res.status(500).json({ message: "L��i khi lưu!", error: error });
                
            }
        }
    update =async(req,res)=>{

            try{
            await InforStudentModal.findOneAndUpdate({name : req.params.name},req.body,{new:true});
            await StudentModal.findOneAndUpdate({name : req.params.name},req.body,{new:true});
            res.redirect("/");


            }catch(error){
                return res.status(500).json({ message: "L��i khi lưu!", error: error });
            }
            
        }
}

module.exports = new FormController;



