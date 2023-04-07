import axios from "axios";

/* 
// Rodar com IPV4: json-server --watch -d 180 --host 192.168.10.143(SEU IP) db.json
*/

const api = axios.create({
  baseURL: "http://192.168.10.143:3000/",
});

export default api;
