import axios from "axios";
const SERVER = `http://localhost:5000`

export const basicBmi = bmiRequest => axios.post(`${SERVER}/member/bmi`, bmiRequest)
export const basicCalc = calcRequest => axios.post(`${SERVER}/member/calc`, calcRequest)