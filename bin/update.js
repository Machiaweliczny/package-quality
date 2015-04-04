#!/usr/bin/env node
'use strict';

/**
 * Update only expired packages (those with nextUpdate previous to current date)
 * (C) 2015 Diego Lafuente.
 */

// requires
require('prototypes');
var update = require('../lib/update.js');
var config = require('../config.js');
var Log = require('log');

// globals
var log = new Log(config.logLevel);


function update()
{
	update.goOver(function(error, result)
	{
		if (error)
		{
			log.error('Could not evaluate all: %s', error);
			process.exit(1);
		}
		log.info('Processed ' + result + ' chunks of approx ' + config.limit + ' elements each.');
		process.exit(0);
	});
}

update();

