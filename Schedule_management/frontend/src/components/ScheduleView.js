import React, { useEffect, useState } from "react";
import ScheduleForm from "./ScheduleForm";
import DayColumn from "./DayColumn";
import { fetchSchedules, addSchedule, updateSchedule, deleteSchedule } from "../services/api";


// lấy dữ liệu từ api
const ScheduleView = () => {
  const [scheduleData, setScheduleData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSchedules();
      setScheduleData(data);
    };
    fetchData();
  }, []);

  // Danh sách các ngày trong tuần chuyển dổi từ csdl 
  const daysOfWeek = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];
  const normalizeDay = (day) => {
    const mapping = {
      "Monday": "Thứ 2",
      "Tuesday": "Thứ 3",
      "Wednesday": "Thứ 4",
      "Thursday": "Thứ 5",
      "Friday": "Thứ 6",
      "Saturday": "Thứ 7",
      "Sunday": "Chủ nhật",
    };
    return mapping[day] || day;
  };


  // Nhóm lịch học theo ngày trong tuần
  const groupedSchedules = daysOfWeek.map((day) => ({
    dayOfWeek: day,
    schedules: scheduleData.filter((schedule) => normalizeDay(schedule.dayOfWeek) === day),
  }));

  // Danh sách các buổi trong tuần
  const normalizeSession = (session) => {
    const mapping = {
      "Morning": "Sáng",
      "Afternoon": "Chiều",
      "Evening": "Tối",
    };
    return mapping[session] || session;
  };

  // Hàm để lấy ngày của tuần
  const getDateForDayOfWeek = (dayOffset) => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const diff = (dayOffset - dayOfWeek + 7) % 7; // Tính toán sự chênh lệch giữa ngày hiện tại và ngày cần lấy
    const targetDate = new Date(today);
    const he = targetDate.setDate(today.getDate() + diff); // Tính ngày dựa trên sự chênh lệch
    return targetDate.toLocaleDateString("vi-VN"); // Trả về ngày theo định dạng Việt Nam
  };

 

// them xoa sua

  const handleAddOrUpdateSchedule = async (schedule) => {
    if (editingSchedule) {
      // Sửa lịch học
      await updateSchedule(editingSchedule._id, schedule);
    } else {
      // Thêm lịch học
      await addSchedule(schedule);
    }
    setIsFormOpen(false);
    setEditingSchedule(null);
    const updatedData = await fetchSchedules();
    setScheduleData(updatedData);
  };

  const handleDeleteSchedule = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa lịch học này?")) {
      await deleteSchedule(id);
      const updatedData = await fetchSchedules();
      setScheduleData(updatedData);
    }
  };

  const handleEditSchedule = (schedule) => {
    setEditingSchedule(schedule);
    setIsFormOpen(true);
  };


  return (
    <div className="wrapper">
   
   <button onClick={() => setIsFormOpen(true)} className="add-button">Thêm Lịch Học</button>
      {isFormOpen && (
        <ScheduleForm
          onSave={handleAddOrUpdateSchedule}
          onCancel={() => {
            setIsFormOpen(false);
            setEditingSchedule(null);
          }}
          schedule={editingSchedule}
        />
      )}

      <div className="table-responsive">
        <table className="fl-table table table-bordered text-center no-footer dtr-inline" width="100%" role="grid">
          <thead>
            <tr role="row">
              <th>Ca học</th>
              {groupedSchedules.map((group, index) => (
                <th key={index}>
                  <span>{group.dayOfWeek}</span><br />
                  {getDateForDayOfWeek(index + 1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["Sáng", "Chiều", "Tối"].map((session) => (
              <tr role="row" key={session}>
                <td className="ses"><b>{session}</b></td>
                {groupedSchedules.map((group, index) => (
                  <td key={`${group.dayOfWeek}-${session}`}>
                    <DayColumn          
                    schedules={group.schedules.filter(
                        (schedule) => normalizeSession(schedule.session) === session
                      )}
                    onEdit={handleEditSchedule}
                    onDelete={handleDeleteSchedule}
                       
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleView;
