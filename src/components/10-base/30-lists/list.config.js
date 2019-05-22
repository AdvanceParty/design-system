module.exports = {
  name: 'list',
  label: 'Types',
  default: 'ul',
  context: {
    items: [
      { content: 'List item 1.' },
      { content: 'Second list item.' },
      { content: 'List item the third.' },
      {
        content:
          "This list item is much longer than the other, which can really screw up your layout systems if you don't plan for it, eh?",
      },
      { content: 'Last item in the list.' },
    ],
  },
  variants: [
    {
      name: 'ul',
      label: 'Unordered List',
      context: {
        type: 'ul',
      },
    },
    {
      name: 'ol',
      label: 'Ordered List',
      context: {
        type: 'ol',
      },
    },
  ],
};
