import { DiscoveryItem } from '../shared/types';
import axios from '../shared/axios';
import { IS_TEST } from '../constants/is-test';
import { UrlInternal } from '../constants/url-internal';

export const getDiscoveryItems = async (page = 0): Promise<DiscoveryItem[]> => {
  const data = (
    await axios.get(
      IS_TEST
        ? UrlInternal.VITE_PREVIEW_VIDEOS_URL
        : 'recommendPool/getVideoFromRecommondPool',
      {
        params: {
          page,
        },

        headers: { deviceid: Math.random().toString(36).slice(-8) },
      }
    )
  ).data.data;

  const sources = (
    await axios.post(
      IS_TEST
        ? UrlInternal.VITE_PREVIEW_VIDEO_MEDIA_URL
        : 'media/bathGetplayInfo',
      data.map((item) => ({
        category: item.category,
        contentId: item.id,
        episodeId: item.mediaInfo.id,
        definition: item.mediaInfo.definitionList.slice(-1)[0].code,
      }))
    )
  ).data.data.map((item: any) => item.mediaUrl);

  return data.map((item: any, index: number) => ({
    ...item,
    mediaUrl: sources[index],
  }));
};
