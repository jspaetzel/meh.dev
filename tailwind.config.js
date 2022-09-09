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
      theme: {
        extend: {},
      },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
  }