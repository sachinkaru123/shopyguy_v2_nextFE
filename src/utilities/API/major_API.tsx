  import axios from "axios";

  const setCSRFtoken = async () => {
    try {
      await axios.get("/sanctum/csrf-cookie"); // No need for withCredentials here as it's already set
      console.log("CSRF token set");
    } catch (error) {
      console.error("Error fetching CSRF token:", error);
    }
  };

  export default{
      setCSRFtoken,
  }