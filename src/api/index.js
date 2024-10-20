import axios from "axios";
import { req } from '../intercept/request'
import { res } from '../intercept/response'

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


req()
res()
// 二维码 key 生成接口
export const loginQrKey = async () => {
    return axios.get('http://localhost:3000/login/qr/key', {
        params: {
            timestamp: Date.now()
        }
    })
}
// 二维码生成接口
export const loginQrCreate = (key) => {
    return axios.get('http://localhost:3000/login/qr/create', {
        params: {
            qrimg: true,
            key,
            timestamp: Date.now()
        }
    })
}
// 二维码检测扫码状态接口
export const loginQrCheck = (key) => {
    return axios.get('http://localhost:3000/login/qr/check', {
        params: {
            key,
            timestamp: Date.now()
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
// 登录状态接口
export const LoginStatus = (cookie) => {
    // console.log(cookie);
    return axios.get('http://localhost:3000/login/status', {
        params: {
            // limit:30,
            // offset:0,
            // uid:12463923735,
            timestamp:Date.now(),
            // cookie:encodeURIComponent('MUSIC_A_T=1726482496984; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/api/feedback; HTTPOnly;MUSIC_U=00211E210DB4BED676B88B9FCE9EB8D0BF10419A102342A5011E69CF16E6904A9812876E1FCFE8243766A7AB051B1A02B663D2BF80FF9F1CCF2E1F98A206BA03BA34FE83FA7BA5DE0F25458CBAA360EEF7A950BC13F15487A419328984C4D4C8372CD5C1140630725B753097520DCDE33B3DDC5299B0154E2B76E6AF75B97281C0D260E68CCB9D26DC445F75144262775D8C2715443C38B873B5F96186D3882579478DAD9355D75916FA0A3495725E349D7D829EBD42312130BB69E416CD41558B15C0399359ADE9143021F75AC3E1B0B6F248030728DA72FB601E7B14247BF7C725D8AA74B3047B62A2D0AA3EAAEDC2F775DAD77C024281BE6F14AA027E758DB532F24FC462F30DB9B7C50E7905818CFC88A16824131C53F2E7E4C04D07C0EF7835C18C072952AE83A63647873C650A33; Max-Age=15552000; Expires=Thu, 17 Apr 2025 09:52:01 GMT; Path=/; HTTPOnly;MUSIC_R_T=1726482497262; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/wapi/feedback; HTTPOnly;MUSIC_R_T=1726482497262; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/api/feedback; HTTPOnly;MUSIC_A_T=1726482496984; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/neapi/feedback; HTTPOnly;MUSIC_R_T=1726482497262; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_A_T=1726482496984; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/eapi/clientlog; HTTPOnly;MUSIC_R_T=1726482497262; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_A_T=1726482496984; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/eapi/feedback; HTTPOnly;MUSIC_A_T=1726482496984; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/weapi/feedback; HTTPOnly;MUSIC_R_T=1726482497262; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/api/clientlog; HTTPOnly;MUSIC_A_T=1726482496984; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/weapi/clientlog; HTTPOnly;NMTID=00O79jvQXWt6_kqvkS7o28MMr120GwAAAGSpDDnag; Max-Age=315360000; Expires=Tue, 17 Oct 2034 09:52:01 GMT; Path=/;;__csrf=b196ba69f3d92fa3615d15b2685a3892; Max-Age=1296010; Expires=Sun, 03 Nov 2024 09:52:11 GMT; Path=/;;MUSIC_R_T=1726482497262; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/neapi/feedback; HTTPOnly;MUSIC_R_T=1726482497262; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/wapi/clientlog; HTTPOnly;MUSIC_R_T=1726482497262; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/weapi/clientlog; HTTPOnly;MUSIC_A_T=1726482496984; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/openapi/clientlog; HTTPOnly;MUSIC_A_T=1726482496984; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/neapi/clientlog; HTTPOnly;MUSIC_SNS=; Max-Age=0; Expires=Sat, 19 Oct 2024 09:52:01 GMT; Path=/;MUSIC_A_T=1726482496984; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/api/clientlog; HTTPOnly;MUSIC_R_T=1726482497262; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/openapi/clientlog; HTTPOnly;MUSIC_A_T=1726482496984; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/wapi/clientlog; HTTPOnly;MUSIC_R_T=1726482497262; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/weapi/feedback; HTTPOnly;MUSIC_R_T=1726482497262; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/neapi/clientlog; HTTPOnly;MUSIC_A_T=1726482496984; Max-Age=2147483647; Expires=Thu, 06 Nov 2092 13:06:08 GMT; Path=/wapi/feedback; HTTPOnly')
            cookie:encodeURIComponent(cookie)
        }
    })
}
// 12463923735
