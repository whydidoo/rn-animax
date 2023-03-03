const template = require('./svgrPlugin');

module.exports = {
  replaceAttrValues: {
    fillColor: '{props.fill}',
    strokeColor: '{props.stroke}'
  },
  template: template,
};
