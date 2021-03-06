const express = require('express');
const parser = require('body-parser');
const logger = require('morgan');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app
  .use(parser.urlencoded({ extended: true }))
  .use(parser.json())
  .use(logger('dev'))
  .use(express.static(path.join()))
