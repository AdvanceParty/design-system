const modifierType = require('./settings').modifierType;

module.exports = {
  asModifier: function(value) {
    return value ? `${modifierType}="${value}"` : '';
  },
};
