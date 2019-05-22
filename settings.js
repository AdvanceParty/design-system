const { MODIFIER_TYPES } = require('./constants');

module.exports = {
  project: {
    title: 'Advance Party Component Library',
    version: '1.0.0',
    author: 'advanceparty@theroyals.com.au',
  },
  modifierType: MODIFIER_TYPES.DATA,
  paths: {
    components: 'src/components',
    docs: 'src/docs',
    staticAssets: 'src/static',
    build: 'dist/styleguide',
  },
  components: {
    defaultStatus: 'wip',
  },
  docs: {
    defaultStatus: 'draft',
  },
};
