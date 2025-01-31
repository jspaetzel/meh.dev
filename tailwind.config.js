module.exports = {
    content: [
      './_drafts/**/*.markdown',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.markdown',
      './*.md',
      './*.html',
    ],
    theme: {
      extend: {
          typography: ({ theme }) => ({
              DEFAULT: {
                  css: {
                      table: {
                          width: '100%',
                          borderCollapse: 'collapse',
                      },
                      'thead th': {
                          backgroundColor: theme('colors.gray.100'),
                          border: `1px solid ${theme('colors.gray.200')}`,
                          padding: theme('spacing.2'),
                          textAlign: 'left',
                      },
                      'tbody td': {
                          border: `1px solid ${theme('colors.gray.200')}`,
                          padding: theme('spacing.2'),
                          '&:first-child': {
                              paddingInlineStart: theme('spacing.4'),
                          },
                      },
                      'tbody tr:nth-child(even)': {
                          backgroundColor: theme('colors.gray.100'),
                      },
                  },
              },
          }),
      },
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
}