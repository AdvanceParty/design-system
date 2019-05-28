const variantModifierType = require('../settings').variantModifierType;

module.exports = {
  asModifier: function(value) {
    return value ? `${variantModifierType}="${value}"` : '';
  },
};
