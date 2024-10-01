import axios from "axios";
import {res} from './intercept'
// import { store } from './store'

res()
export const http = async () => {
    return (await axios.get('http://localhost:3003/login'))
}