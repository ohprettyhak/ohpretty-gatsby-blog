require('ts-node').register();

const { createNodes, createPages } = require('./src/lib/createPages');

exports.onCreateNode = createNodes;
exports.createPages = createPages;
