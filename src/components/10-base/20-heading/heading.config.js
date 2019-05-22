module.exports = {
  name: 'heading',
  label: 'Headings',
  default: 'page-title',
  variants: [
    {
      name: 'page-title',
      label: 'Page Title',
      context: {
        variant: 'page',
        level: '1',
        content: 'This is a page Title',
      },
    },
    {
      name: 'page-subtitle',
      label: 'Page Subtitle',
      context: {
        variant: 'page',
        level: '2',
        content: 'This is a page subtitle',
      },
    },
    {
      name: 'section-title',
      label: 'Section Title',
      context: {
        variant: 'section',
        level: '1',
        content: 'This is a section subtitle',
      },
    },
    {
      name: 'section-subtitle',
      label: 'Section Subtitle',
      context: {
        variant: 'section',
        level: '2',
        content: 'This is a section subtitle',
      },
    },
    { name: 'h1', label: 'Level 1', context: { level: '1' } },
    { name: 'h2', label: 'Level 2', context: { level: '2' } },
    { name: 'h3', label: 'Level 3', context: { level: '3' } },
    { name: 'h4', label: 'Level 4', context: { level: '4' } },
    { name: 'h5', label: 'Level 5', context: { level: '5' } },
    { name: 'h6', label: 'Level 6', context: { level: '6' } },
  ],
};
