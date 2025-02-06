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

        .then(savedInforStudent => {
            const student = new StudentModal({ name, math, liter, eng });
            return student.save();
        })
        .then(res.redirect("/"))
        .catch(err => res.status(500).json({ message: "Lỗi khi lưu!", error: err }));
}
    


    delete= async (request, res) => {
            try {
              await InforStudentModal.deleteOne({name: request.params.name });
              await StudentModal.deleteOne({name: request.params.name });
              res.redirect('/');
            } catch {
            }
          };
    };

module.exports = new FormController;



