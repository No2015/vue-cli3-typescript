import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import qs from 'qs';

axios.defaults.headers.post.Accept = 'application/json, text/javascript, */*; q=0.01';
axios.defaults.headers.post['X-Requested-With'] = 'xmlhttprequest';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.interceptors.request.use((config) => {
  config.data = qs.stringify(config.data, {arrayFormat: 'brackets'});
  return config;
});

Vue.use(VueAxios, axios);

export default axios;