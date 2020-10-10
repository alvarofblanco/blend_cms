require('dotenv').config();
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '326f6bcd93e847203444e0f648ba9825'),
    },
  },
});
