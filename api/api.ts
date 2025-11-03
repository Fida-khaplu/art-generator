import axios from "axios";


// const BASE_URL = "https://eval.funsol.cloud/api/generation/models"
const BASE_URL ="https://eval.funsol.cloud"



export const getAllInspirations = async () => {
  try {
     console.log("Token",process.env.Token);
    const resp = await axios.get(`${BASE_URL}/api/inspirations`, {
       
        
      params: { pagination: 12, page: 1 },
      headers: {
        Authorization: process.env.NEXT_PUBLIC_TOKEN,
        // Authorization:"Token 4e761db43837cc636c044f5475b24241676b4ace",
      },
    });
    console.log("data =====>>>>>",resp);
    
    return resp.data.data; // ✅ returns the array of inspirations
  } catch (error) {
    console.error("❌ Error fetching inspirations:", error);
    throw error;
  }
};

export const getGenerationModels = async () => {
  try {
     console.log("Token",process.env.Token);
    const resp = await axios.get(`${BASE_URL}/api/generation/models`, {
       
        
      params: { pagination: 12, page: 1 },
      headers: {
        Authorization: process.env.NEXT_PUBLIC_TOKEN,
      },
    });
    console.log("data =====>>>>>",resp);
    
    return resp.data.data; // ✅ returns the array of inspirations
  } catch (error) {
    console.error("❌ Error fetching inspirations:", error);
    throw error;
  }
};


export const generateImage = async (payload: { prompt: string; model: string }) => {
  try {
    console.log("Generating image with payload:", payload);

    const res = await axios.post(`${BASE_URL}/api/generate`, payload, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_TOKEN,
      },
    });

    console.log("Generated image response:", res.data);
    return res.data;
  } catch (err) {
    console.error("Error generating image:", err);
    throw err;
  }
};



