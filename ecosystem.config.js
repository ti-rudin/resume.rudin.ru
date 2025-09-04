module.exports = {
  apps: [{
    name: 'resume-rudin',
    cwd: '/home/rudin/resume.rudin.ru',
    script: 'npm',
    args: 'run serve',
    env: {
      NODE_ENV: 'production',
      PORT: 3011,
      VITE_ALLOWED_HOSTS: 'resume.rudin.ru,localhost',
      VITE_MAIN_FRONTEND_DOMAIN: 'resume.rudin.ru'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}
