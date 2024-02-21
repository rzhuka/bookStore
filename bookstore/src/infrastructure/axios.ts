import axios, { AxiosResponse } from "axios";
import { headers } from "config/api";

// First step it is to create axios instances 
const axiosInstance = axios.create({
    headers
});
// For manipulation before sending the request for example to evaluate authorization token or to refresh expired token we use intercetors request 

//To evaulate response we use interceptors response
axiosInstance.interceptors.response.use(response => {
    
    if (!response.data.success) {
        processFailedResponse(response);
    }
    return response;
}, error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log('axiosInstance.interceptors.response error => ', error);
    return Promise.reject(error);
});

export default axiosInstance;


function processFailedResponse(response: AxiosResponse) {
   
       // handle failed esponse
}


