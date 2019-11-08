import axios from '@/axios/axios'

export const getUserInfo = async (token) => {
    const res = await axios.get('/get_info');
    console.log(token);
    console.log(res.data);
}
