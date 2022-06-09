import { IS_TEST } from '../constants/is-test';
import { UrlInternal } from '../constants/url-internal';
import axios from '../shared/axios';

export const getCategoryItems = async (categoryId: string, sort: string) =>
  (
    await axios.post(
      IS_TEST ? UrlInternal.VITE_SEARCH_ADVANCED_URL : 'search/v1/search',
      {
        size: 20,
        params: '',
        category: categoryId,
        sort,
      }
    )
  ).data.data.searchResults;
