import { SearchResultItem } from '../shared/types';
import axios from '../shared/axios';
import { IS_TEST } from '../constants/is-test';
import { UrlInternal } from '../constants/url-internal';

export const searchKeywords = async (keyword: string): Promise<string[]> =>
  (
    await axios.post(
      IS_TEST
        ? UrlInternal.VITE_SEARCH_TOP_KEYWORDS_URL
        : `search/searchLenovo`,
      {
        searchKeyWord: keyword,
        size: 10,
      }
    )
  ).data.data.searchResults;

export const searchWithKeyword = async (
  keyword: string
): Promise<SearchResultItem[]> =>
  (
    await axios.post(
      IS_TEST
        ? UrlInternal.VITE_SEARCH_WITH_KEYWORD_URL
        : 'search/v1/searchWithKeyWord',
      {
        searchKeyWord: keyword,
        size: 50,
        sort: '',
        searchType: '',
      }
    )
  ).data.data.searchResults;
