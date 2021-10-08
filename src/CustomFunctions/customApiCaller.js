import axios from "axios";

//common function for api calling
export async function customHTTPService(type, path, body, header) {
  let url = "https://jsonplaceholder.typicode.com/";
  let res;
  try {
    res = await axios({ url: url + path, type, body, header });
    return new Promise((resolve, reject) => resolve(res));
  } catch (err) {
    // console.log(err.response.status);
    return new Promise((resolve, reject) => reject(err.response.status));
  }
}
