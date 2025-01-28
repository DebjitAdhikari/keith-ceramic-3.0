import axios from "axios";

async function WhykeithPost(formData) {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/whykeith/create",
      formData
    );
    console.log("res", res);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export default WhykeithPost;