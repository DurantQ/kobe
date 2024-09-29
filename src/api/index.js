import axios from "axios";

export const HpDragon = () =>
    axios.get('http://localhost:3000/homepage/dragon/ball');
export const HpBanner = () =>
    axios.get("http://localhost:3000/banner");
export const HpRecommend = () =>
    axios.get('http://localhost:3000/recommend/resource');
export const HpRecommendSongs = () =>
    axios.get('http://localhost:3000/recommend/songs');
export const SearchDefaultText = () =>
    axios.get('http://localhost:3000/search/default');
export const SearchCloud = (data) =>
    axios.post('http://localhost:3000/search', data);


    export const GetScanKey = async (time) => {
        return axios.get('http://localhost:3000/login/qr/key', {
            params: {
                timestamp: time
            }
        })
    }
    // 将key作为参数，获取二维码base64
    export const Scan = (key, time) => {
        return axios.get('http://localhost:3000/login/qr/create', {
            params: {
                qrimg: true,
                key,
            }
        })
    }
    // 获取二维码状态
    export const QrCodeStatus = (key, time) => {
        return axios.get('http://localhost:3000/login/qr/check', {
            params: {
                key,
                timestamp: time
            }
        })
    }
    // 验证账号密码
    export const verify = (phone, password) => {
        return axios.get('http://localhost:3000/login/cellphone', {
            params: {
                phone,
                password
            }
        })
    }