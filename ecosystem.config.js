module.exports = {
  apps: [
    {
      name: "myapp",
      script: "./index.js",
      instances: 2,
      exec_mode: "cluster",
      watch: true,
      increment_var: "PORT",
      env: {
        PORT: 5000,
        NODE_ENV: "development",
      },
    },
  ],
};
