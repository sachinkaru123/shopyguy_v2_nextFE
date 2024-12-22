import axios from "../../utilities/instance/axiosInstance";
import NavigationList from "../models/home_API/NavigationList.model"
import SlideData from "../models/home_API/SlideData.model"


// Improved API functions
const getNavigationList = async (): Promise<NavigationList[]> => {
  try {
    const response = await axios.get("/api/home/category-navigation");
    return response.data;
  } catch (error) {
    console.error("Error fetching navigation list:", error);
    throw error;
  }
};

const getSlideDataList = async (): Promise<SlideData[]> => {
  try {
    const response = await axios.get("/api/home/home-sliders");
    return response.data;
  } catch (error) {
    console.error("Error fetching slide data list:", error);
    throw error;
  }
};

export default {
  getNavigationList,
  getSlideDataList,
};
