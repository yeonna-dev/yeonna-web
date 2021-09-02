import { findUserBits, UserNotFound } from 'yeonna-core';

export default
{
  method: 'get',
  path: '/bits/:userIdentifier',
  handler,
};

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 */
async function handler(request, response)
{
  const { userIdentifier } = request.params;
  try
  {
    const bits = await findUserBits({ userIdentifier });
    response.json(bits);
  }
  catch(error)
  {
    response.sendStatus(error instanceof UserNotFound ? 404 : 500);
  }
}
