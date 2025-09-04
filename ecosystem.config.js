module.exports = {
  apps: [{
    name: 'resume-rudin',
    cwd: '/home/rudin/resume.rudin.ru',
    script: 'npm',
    args: 'run serve',
    env: {
      NODE_ENV: 'production',
      PORT: 3011
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}
