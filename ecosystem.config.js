const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

module.exports = {
  apps: [{
    name: process.env.APP_NAME || 'resume-app',
    cwd: process.cwd(),
    script: 'npm',
    args: 'run serve',
    env: {
      NODE_ENV: process.env.NODE_ENV || 'production',
      PORT: process.env.PORT || 4011,
      VITE_ALLOWED_HOSTS: process.env.VITE_ALLOWED_HOSTS || 'all',
      VITE_MAIN_FRONTEND_DOMAIN: process.env.VITE_MAIN_FRONTEND_DOMAIN || 'http://localhost:4011'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}
