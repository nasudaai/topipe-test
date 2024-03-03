import App from './out.js';
import { renderToPipeableStream } from 'react-dom/server';
import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('<h1>html title</h1>')
});

app.get('/render', (req, res) => {
  const { pipe } = renderToPipeableStream(App(), {
    bootstrapScripts: ['main.js'],
    onShellReady() {
      res.setHeader('content-type', 'text/html');
      pipe(res);
    }
  });  
});


app.listen(port, () => {
  console.log(`app listen http://localhost:${port}`)
});
