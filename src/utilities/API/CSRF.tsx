"use client";
import { useEffect } from "react";
import axios from "axios";

const SetCSRFToken = () => {
  useEffect(() => {
    const fetchCSRFToken = async () => {
      try {
        await axios.get("http://localhost:8000/sanctum/csrf-cookie", { withCredentials: true });
        console.log("CSRF token set successfully");
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };

    fetchCSRFToken();
  }, []); // Runs once on mount

  return null; // No UI rendering required for this component
};

export default SetCSRFToken;
