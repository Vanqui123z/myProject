import React from "react";

import ScheduleForm from "./ScheduleForm";

const DayColumn = ({ schedules, onDelete, onEdit }) => {
  
  return (
    <div className="day-column">
      <div className="sessions">
        {schedules.length > 0 ? (
          schedules.map((schedule) => (
            <div key={schedule._id} className="session">
              <p><b>{schedule.subject}</b></p>
              <p>Phòng: {schedule.classroom}</p>
              <p>Tiết: {schedule.classPeriod}</p>
              <p>GV: {schedule.teacher}</p>
             
             <div className="d-flex">
             <div className="m-2" onClick={() => onEdit(schedule)}>
              <ScheduleForm
            
                  button_title="Sửa"
                    
                    
                    
              />
              </div>
              <button className="btn btn-success m-2" onClick={() => onDelete(schedule._id)}>Xóa</button>
             </div>
            </div>
          ))
        ) : (
          <p className="no-session">Không có lịch</p>
        )}
      </div>
    </div>
  );
};

export default DayColumn;