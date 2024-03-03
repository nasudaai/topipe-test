import { pipeline } from 'node:stream/promises';

import { writeFile, createReadStream, createWriteStream } from 'node:fs';
import App from './render.js';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';

const { pipe } = renderToPipeableStream(App());
const dest = createWriteStream('dest.html', 'utf8');
//pipe(process.stdout);
pipe(dest);

/**
await pipeline(
  createReadStream('./server.js'),
  createWriteStream('./s.js')
)
**/
