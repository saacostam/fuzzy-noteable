export const AUTH_CONFIG = {
  // BCRYPT
  SALT_ROUNDS: 10,

  // ACCESS_TOKEN
  ACCESS_TOKEN_EXPIRES_IN: '1h',
  ACCESS_T0KEN_TTL: 1000 * 60 * 60, // ms
  ACCESS_TOKEN_SECRET: process.env.ACCCESS_TOKEN_SECRET,

  // REFRESH_TOKEN
  REFRESH_TOKEN_EXPIRES_IN: '7d',
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
};
