/**
 * @typedef LinkPreviewData
 * @property {string} url
 * @property {string} title
 * @property {string} [siteName]
 * @property {string} [description]
 * @property {string} mediaType
 * @property {string} [contentType]
 * @property {string[]} [images]
 * @property {LinkPreviewVideoData[]} [videos]
 * @property {string[]} [favicons]
 */

/**
 * @typedef LinkPreviewVideoData
 * @property {string} [url]
 * @property {string} [secureUrl]
 * @property {string} [type]
 * @property {string} [width]
 * @property {string} [height]
 */

import axios from 'axios';

export const MediaTypes =
{
  TEXT: 'text',
  IMAGE: 'image',
};

export async function getMediaType(url)
{
  /** @type {LinkPreviewData} */
  let content;
  try
  {
    const { data } = await axios.post('/api/link-preview', { url });
    content = data;
  }
  catch(error)
  {
    console.error(error);
  }

  return !content || content.mediaType !== 'image'
    ? MediaTypes.TEXT
    : MediaTypes.IMAGE;
}
