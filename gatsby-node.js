require('ts-node').register();

const { createNodes, createPages } = require('./src/utils/create-pages');

exports.onCreateNode = createNodes;
exports.createPages = createPages;
