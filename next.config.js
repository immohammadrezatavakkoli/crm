module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      { source: '/', destination: '/customers', permanent: true }
    ];
  }
};
