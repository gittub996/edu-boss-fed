import axios from 'axios'
import { config } from 'vue/types/umd'

// 创建axios的实例
const request = axios.create({
    timeout: 8000
        // baseUrl:
        // header:
})

function getBaseURL(url) {
    if (url.startsWith('/boss')) {
        return 'http://eduboss.lagou.com'
    }
    return 'http://edufront.lagou.com';
}
request.interceptors.request.use(config => {
    config.baseURL = getBaseURL(config.url);
    return config;
})