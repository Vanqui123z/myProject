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