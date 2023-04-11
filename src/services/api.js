import axios from "axios";

// para rodar a API:  json-server --watch -d 180 --host 127.0.0.1 db.json
const api = axios.create({
    baseURL: 'http://192.168.1.3:3000',
});

export default api;
