import axios from 'axios';

axios.defaults.withCredentials = false;

export default {
  getDashboards(api) {
    console.log('API getDashboards, API_URL: ', api);
    return this.get(api, 'api/dashboards');
  },

  // ----------------------
  // general API interfaces
  // ----------------------

  // axios get interface
  get(api, url) {
    return new Promise((resolve, reject) => {
      console.log(`${new Date().toISOString()} | API request, GET: ${url}`);
      axios
        .get(api + url)
        .then(
          (response) => {
            console.log('response: ', response);
            resolve(response.data);
          },
          (err) => {
            console.log('err: ', err);
            reject(err);
          },
        )
        .catch((error) => {
          console.log('error: ', error);
          reject(error);
        });
    });
  },

  // axios post interface
  post(api, url, data) {
    return new Promise((resolve, reject) => {
      // console.log(`${new Date().toISOString()} | API request, POST: ${url}`);
      axios
        .post(api + url, data)
        .then(
          (response) => {
            resolve(response);
          },
          (err) => {
            reject(err);
          },
        )
        .catch((error) => {
          reject(error);
        });
    });
  },

  // axios delete interface
  delete(api, url) {
    return new Promise((resolve, reject) => {
      // console.log(`${new Date().toISOString()} | API request, DELETE: ${url}`);
      axios
        .delete(api + url)
        .then(
          (response) => {
            resolve(response.data);
          },
          (err) => {
            reject(err);
          },
        )
        .catch((error) => {
          reject(error);
        });
    });
  },
};
