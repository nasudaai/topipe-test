import { writeFile } from 'node:fs/promises';
import React from 'react';
import { renderToString } from 'react-dom/server';

function App() {
  return (
    <>
    <h1>sample</h1>
    <p>add</p>
    </>
  )
}

async function example() {
  const html = renderToString(<App />);

  await writeFile('./t.html', html);
}


example()
