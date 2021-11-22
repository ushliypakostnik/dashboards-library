import axios from 'axios';

axios.defaults.withCredentials = false;

export default {
  getDashboards(api) {
    console.log('API getDashboards, API_URL: ', api);
    return this.get(`${api}api/dashboards`);
  },

  getDashboard(api, dashboard) {
    console.log('API getDashboard, API_URL: ', api, dashboard);
    return this.get(`${api}api/dashboard${dashboard}`);
  },

  // ----------------------
  // general API interfaces
  // ----------------------

  // axios get interface
  get(url) {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
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
  post(url, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data)
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
  delete(url) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url)
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
