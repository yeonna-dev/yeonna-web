import { readdirSync } from 'fs';
import { Router } from 'express';

const router = Router();

export function routes()
{
  const routeFiles = readdirSync(__dirname);
  for(const routeFile of routeFiles)
  {
    if(routeFile === 'index.js')
      continue;

    const { method, path, handler } = require(`./${routeFile}`).default;
    router[method](path, handler);
  }

  return router;
}
