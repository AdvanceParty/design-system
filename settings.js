const MODIFIER_TYPES = {
  DATA: 'data-type',
  CLASS: 'class',
};

module.exports = {
  project: {
    title: 'Advance Party Component Library',
    version: '1.0.0',
    author: 'advanceparty@theroyals.com.au',
  },
  theme: {
    themePath: 'advancePartyTheme',
    loadPath: 'advancePartyTheme/views',
  },
  paths: {
    components: 'src/components',
    docs: 'src/docs',
    staticAssets: 'src/static',
    build: 'styleguide',
  },
  variantModifierType: MODIFIER_TYPES.DATA,
  components: {
    defaultStatus: 'wip',
  },
  docs: {
    defaultStatus: 'draft',
  },
};
