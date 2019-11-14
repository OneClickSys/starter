import axios from '@/axios/axios'

export const checkLogin = async (name, passwd) => {
    const res = await axios.post('/login', {name: name, passwd: passwd});
    console.log(res.data);
    return res.data;
}

