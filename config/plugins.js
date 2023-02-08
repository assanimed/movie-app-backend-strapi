// path: ./config/plugins.js

module.exports = ({ env }) => ({
  "users-permissions": {
    enabled: true,
    config: {
      jwt: {
        expiresIn: "1m",
      },
    },
  },
  upload: {
    config: {
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64,
      },
    },
  },
});
