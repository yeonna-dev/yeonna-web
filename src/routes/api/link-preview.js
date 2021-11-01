import { getLinkPreview } from 'link-preview-js';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function post({ body })
{
  const { url } = body;
  if(!url)
    return { status: 400 };

  try
  {
    const data = await getLinkPreview(url);
    return { body: data };
  }
  catch(error)
  {
    const notFound = (
      error.code === 'ENOTFOUND' ||
      error.message.includes('link-preview-js did not receive a valid a url or text')
    );
    return { status: notFound ? 404 : 500 };
  }
}
