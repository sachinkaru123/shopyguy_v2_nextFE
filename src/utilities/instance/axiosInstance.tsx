import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import { MockEndPoints } from '__server__';


// Set default settings for Axios
axios.defaults.baseURL = 'http://localhost:8000'; // Set your backend base URL
axios.defaults.withCredentials = true; // Ensure cookies are sent with requests
//axios.defaults.withXSRFToken=true; // Ensure cookies are sent with requests

// Add a response interceptor
axios.interceptors.response.use(
    (response) => response, // Return response if it's valid
    (error) => {
        // Handle unauthorized access based on the status code
        if (error.response) {
            if (error.response.status === 419) { // CSRF token mismatch
                // Check if the request was made to admin routes
                if (error.config.url.includes('/admin')) {
                    alert('Your session has expired. Please log in as admin.');
                    window.location.href = '/admin/login'; // Redirect to admin login
                } else {
                    alert('Your session has expired. Please log in.');
                    window.location.href = '/customer/login'; // Redirect to customer login
                }
            }
        }
        return Promise.reject(error); // Propagate error
    }
);

export default axios; // Export the configured axios instance


// Remove following 2 lines if you don't want to use MockAdapter 
// export const Mock = new MockAdapter(axiosInstance);
// MockEndPoints(Mock);

// export default axiosInstance;
