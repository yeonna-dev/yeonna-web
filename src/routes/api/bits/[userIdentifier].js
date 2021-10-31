import { findUserBits, UserNotFound } from 'yeonna-core';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params })
{
  const { userIdentifier } = params;
  try
  {
    const bits = await findUserBits({ userIdentifier });
    return { body: bits };
  }
  catch(error)
  {
    return {
      status: error instanceof UserNotFound ? 404 : 500
    };
  }
}
