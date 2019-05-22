module.exports = {
  name: 'link',
  label: 'Links',
  context: {
    href: '#',
    content: 'click me',
  },
  variants: [
    {
      name: 'default',
    },
    {
      name: 'cta',
      label: 'CTA',
      context: {
        variant: 'cta',
        content: 'Call to action',
      },
    },
  ],
};
