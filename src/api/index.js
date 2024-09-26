import axios from "axios";

export const HpDragon = () =>
    axios.get('http://localhost:3000/homepage/dragon/ball');
export const HpBanner = () =>
    axios.get("http://localhost:3000/banner");
export const HpRecommend = () =>
    axios.get('http://localhost:3000/recommend/resource');
export const HpRecommendSongs = () =>
    axios.get('http://localhost:3000/recommend/songs');
export const LohinRequst = (data) =>{console.log(data);
    axios.post('http://localhost:3000/login/cellphone', data);}
    
export const ScaptCode = (data) =>
    axios.post('http://localhost:3000/captcha/sent', data);



