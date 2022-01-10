module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cfb53ef18030da1d1fe6ef5ed8eb1548'),
  },
});
