import { UrlInternal } from './../constants/url-internal';
import { AdvanceSearchItem, SearchConfig } from '../shared/types';

import axios from '../shared/axios';
import { IS_TEST } from '../constants/is-test';

export const getSearchConfig = async (): Promise<SearchConfig[]> =>
  (
    await axios.get(
      IS_TEST ? UrlInternal.VITE_SEARCH_CONFIG_URL : 'search/list'
    )
  ).data.data;

export const advanceSearch = async (
  params: string,
  configs: { [key: string]: any },
  sort: string
): Promise<AdvanceSearchItem[]> =>
  (
    await axios.post(
      IS_TEST ? UrlInternal.VITE_SEARCH_ADVANCED_URL : 'search/v1/search',
      {
        size: 20,
        params,
        ...configs,
        sort,
      }
    )
  ).data.data.searchResults;
