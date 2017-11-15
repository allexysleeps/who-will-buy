'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Router = require('./routes');

app
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false}))
	.use(Router)
	.listen(3000);

console.log(`its's alive`);