import React, { useState, useEffect } from "react";

const ScheduleForm = ({ onSave, onCancel, schedule }) => {
  const [formData, setFormData] = useState({
    day: "",
    dayOfWeek: "",
    classPeriod: "",
    classroom: "",
    subject: "",
    teacher: "",
    session: "Sáng",
  });

  useEffect(() => {
    if (schedule) {
      setFormData(schedule);
    }
  }, [schedule]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="schedule-form">
      <h3>{schedule ? "Sửa Lịch Học" : "Thêm Lịch Học"}</h3>
      <form onSubmit={handleSubmit} >
        <label>
          Ngày:
          <input
            type="text"
            name="day"
            value={formData.day}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Thứ:
          <input
            type="text"
            name="dayOfWeek"
            value={formData.dayOfWeek}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Tiết:
          <input
            type="text"
            name="classPeriod"
            value={formData.classPeriod}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phòng:
          <input
            type="text"
            name="classroom"
            value={formData.classroom}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Môn học:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Giáo viên:
          <input
            type="text"
            name="teacher"
            value={formData.teacher}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Buổi:
          <select
            name="session"
            value={formData.session}
            onChange={handleChange}
            required
          >
            <option value="Sáng">Sáng</option>
            <option value="Trưa">Chiều</option>
            <option value="Tối">Tối</option>
          </select>
        </label>
        <button type="submit">{schedule ? "Lưu" : "Thêm"}</button>
        <button type="button" onClick={onCancel}>
          Hủy
        </button>
      </form>
    </div>
  );
};

export default ScheduleForm;
