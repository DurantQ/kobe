import axios from "axios";

export const HpDragon = () =>
    axios.get('http://localhost:3000/homepage/dragon/ball');
export const HpBanner = () =>
    axios.get("http://localhost:3000/banner");
export const HpRecommend = () =>
    axios.get('http://localhost:3000/recommend/resource');
export const HpRecommendSongs = () =>
    axios.get('http://localhost:3000/recommend/songs');
export const SpsearchDefaultText = () =>
    axios.get('http://localhost:3000/search/default');
export const SpsearchCloud = (data) =>
    axios.post('http://localhost:3000/search', data);


