import { HomeSection, TopSearched } from '../shared/types';

import axios from '../shared/axios';
import { IS_TEST } from '../constants/is-test';
import { UrlInternal } from '../constants/url-internal';

export const getHome = async (page: number = 0): Promise<HomeSection[]> =>
  (
    await axios.get(
      IS_TEST ? UrlInternal.VITE_HOME_PAGE_URL : 'homePage/getHome',
      {
        params: {
          page,
        },
      }
    )
  ).data.data.recommendItems.filter((item) => !item.bannerProportion);

export const getTopSearched = async (): Promise<TopSearched[]> =>
  (
    await axios.get(
      IS_TEST
        ? UrlInternal.VITE_SEARCH_LEADERBOARD_URL
        : 'search/v1/searchLeaderboard'
    )
  ).data.data.list;
