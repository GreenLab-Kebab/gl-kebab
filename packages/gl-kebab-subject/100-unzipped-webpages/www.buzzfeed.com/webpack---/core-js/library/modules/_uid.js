var id = 0,
    px = Math.random();
module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_uid.js
// module id = 36
// module chunks = 1 2