// path: ./config/plugins.js

module.exports = ({ env }) => ({
  "users-permissions": {
    enabled: true,
    config: {
      jwt: {
        expiresIn: "5m", // 5 ~ 60 // -> set to 1min
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
