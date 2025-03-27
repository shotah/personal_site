module.exports = {
  ...require('gts/.prettierrc.json'),
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  // Add an override for Makefiles
  overrides: [
    {
      files: 'Makefile',
      options: {
        tabWidth: 4, // Optional: Set tab width for Makefiles
        useTabs: true, // Ensure tabs are used instead of spaces
      },
    },
  ],
};
