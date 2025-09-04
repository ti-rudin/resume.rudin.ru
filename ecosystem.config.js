module.exports = {
  apps: [{
    name: 'main-front',
    cwd: '/home/rudin/samurai-monorepo/main-front',
    script: 'npm',
    args: 'run dev',
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
