import React, { useState, useEffect } from "react";

const ScheduleForm = ({ onSave, schedule, onCancel }) => {
  const [formData, setFormData] = useState({
    subject: "",
    day: "",
    dayOfWeek: "",
    classPeriod: "",
    classroom: "",
    teacher: "",
    session: "Morning", // default session value
  });
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const daysOfWeek = [
    "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"
  ];

  useEffect(() => {
    if (schedule) {
      setFormData({
        subject: schedule.subject || "",
        day: schedule.day || "",
        dayOfWeek: schedule.dayOfWeek || "",
        classPeriod: schedule.classPeriod || "",
        classroom: schedule.classroom || "",
        teacher: schedule.teacher || "",
        session: schedule.session || "Morning",  // Set session based on schedule
      });
    }
  }, [schedule]);

  const getDayOfWeek = (dateStr) => {
    const date = new Date(dateStr.split("/").reverse().join("-"));
    const dayOfWeek = date.getDay();
    return daysOfWeek[dayOfWeek === 0 ? 6 : dayOfWeek - 1];  // Adjust for Sunday (0)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "day") {
      const dayOfWeek = getDayOfWeek(value);
      setFormData({ ...formData, [name]: value, dayOfWeek });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSave(formData);
      alert("Lịch học đã được lưu thành công!");
      setShowModal(false);  // Close modal after successful save
    } catch (error) {
      alert("Có lỗi xảy ra khi lưu lịch học.");
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);  // Toggle modal visibility
  };

  return (

    <div className="container mt-5">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Theem
      </button>


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Tiêu đề Modal</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Môn học</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  placeholder="Nhập tên môn học"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="dayOfWeek" className="form-label">Ngày trong tuần</label>
                <input
                  type="text"
                  className="form-control"
                  id="dayOfWeek"
                  name="dayOfWeek"
                  value={formData.dayOfWeek}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="day" className="form-label">Ngày (dd/mm/yyyy)</label>
                <input
                  type="text"
                  className="form-control"
                  id="day"
                  name="day"
                  placeholder="Nhập ngày học"
                  value={formData.day}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="classPeriod" className="form-label">Thời gian học</label>
                <input
                  type="text"
                  className="form-control"
                  id="classPeriod"
                  name="classPeriod"
                  value={formData.classPeriod}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="classroom" className="form-label">Địa điểm</label>
                <input
                  type="text"
                  className="form-control"
                  id="classroom"
                  name="classroom"
                  placeholder="Nhập tên lớp học"
                  value={formData.classroom}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="teacher" className="form-label">Giảng viên</label>
                <input
                  type="text"
                  className="form-control"
                  id="teacher"
                  name="teacher"
                  placeholder="Nhập tên giảng viên"
                  value={formData.teacher}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="session" className="form-label">Ca học</label>
                <select
                  id="session"
                  name="session"
                  className="form-select"
                  value={formData.session}
                  onChange={handleChange}
                  required
                >
                  <option value="Morning">Sáng</option>
                  <option value="Afternoon">Chiều</option>
                  <option value="Evening">Tối</option>
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
              <button type="button" class="btn btn-primary">Lưu thay đổi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ScheduleForm;
