import axios from 'axios';
import { IS_TEST } from '../constants/is-test';
import { UrlInternal } from '../constants/url-internal';

const instance = axios.create({
  baseURL: IS_TEST
    ? UrlInternal.VITE_BASE_URL
    : 'https://ga-mobile-api.loklok.tv/cms/app',
  headers: {
    lang: 'en',
    versioncode: '11',
    clienttype: 'ios_jike_default',
  },
});

export default instance;
