import axios from "axios";

const base_url = 'https://www.jeemjam.com/api/'

//Api for register user
export const registeruser = async (data) => {
  console.log(`data`, data);

  try {
    const res = await axios.post(`${base_url}register`, data, {});
    return res;

  } catch (error) {
    console.log(error.message);
    return error;
  }

};


//Api for login user
export const loginuser = async (data) => {
  try {
    const res = await axios.post(`${base_url}login`, data, {});
    return res;

  } catch (error) {
    console.log(error.message)
    return error;
  }

};


//Api for ad posting
export const postadds = async (data) => {

  try {
    const res = await axios.post(`${base_url}createPost`, data, {});
    return res;

  } catch (error) {
    console.log(error.message)
    return error;
  }

};



//Api for Contact US
export const contactUs = async (data) => {
  console.log(`data`, data);

  try {
    const res = await axios.post(`${base_url}contact-us`, data, {});
    return res;

  } catch (error) {
    console.log(error.message);
    return error;
  }

};


// //Api for category ads fetching
// export const categoryFetch = async (data) => {
//   try {
//     const res = await axios.post(`${base_url}category`, data, {});
//     return res;

//   } catch (error) {
//     console.log(error.message)
//     return error;
//   }

// };