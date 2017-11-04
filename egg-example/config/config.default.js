'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.middleware = [];
  config.security = {
    csrf: {
      ignoreJSON: true,
    },
  };
  config.mysql = {
    // database configuration
    client: {
      // host
      host: '127.0.0.1',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '111111',
      // database
      database: 'apple',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1506429553082_8618';

  // add your config here
  config.middleware = [];

  return config;
};
