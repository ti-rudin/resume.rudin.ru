const config = {
  // API настройки
  API_BASE_URL: import.meta.env.PROD
    ? `${import.meta.env.VITE_STRAPI_URL}/api`
    : '/api',

  // App настройки
  APP_NAME: 'Самурай Автосервис',
  APP_VERSION: '1.0.0'
};

export default config;
