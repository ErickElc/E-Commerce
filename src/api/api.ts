import axios from 'axios'

const urls = ['https://erick-e-commerce-back.herokuapp.com/', 'http://localhost:8877/']

export const apiBack_End = axios.create({
    baseURL: urls[0]
});
