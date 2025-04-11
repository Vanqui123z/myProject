import axios from 'axios';

const API_URL = 'http://localhost:5000/api/schedules';

export const fetchSchedules = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi gọi API:', error);
    return [];
  }
};

export const addSchedule = async (schedule) => {
  try {
    const response = await axios.post(`${API_URL}`, schedule);
    console.log("log:", response.data);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi thêm lịch:', error.response || error.message);
    return null;
  }
};

export const updateSchedule = async (id, updatedSchedule) => {
  try {
    const response = await axios.put(`${API_URL}/edit/${id}`, updatedSchedule); // Fixed URL by adding `/`
    return response.data;
  } catch (error) {
    console.error('Lỗi khi cập nhật lịch:', error.response || error.message);
    return null;
  }
};

export const deleteSchedule = async (id) => {
  try {
    await axios.delete(`${API_URL}/delete/${id}`);
    return true;
  } catch (error) {
    console.error('Lỗi khi xóa lịch:', error.response || error.message);
    return false;
  }
};
