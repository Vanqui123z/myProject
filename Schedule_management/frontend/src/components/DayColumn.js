import React from "react";

const DayColumn = ({ schedules }) => {
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
