const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middleware/error.handler');

const app = express();
const port = 8080;

app.use(express.json());
const whitelist = ['http://127.0.0.1:5500/'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) !== 1) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};

app.use(cors(options));

app.get('/', (req, resp) => {
  resp.send('hola mi server en express');
});

app.get('/nueva_ruta', (req, resp) => {
  resp.send('hola soy una nueva ruta');
});

routerApi(app);


app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port' + port);
});
