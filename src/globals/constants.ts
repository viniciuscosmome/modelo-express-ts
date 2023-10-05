export const PORT = process.env.PORT || 5500;
export const IS_PRODUCTION_ENV = process.env.NODE_ENV === 'production';
export const IS_HOMOLOGATION_ENV = process.env.NODE_ENV === 'homologation';
export const IS_DEVELOPMENT_ENV = !IS_PRODUCTION_ENV && !IS_HOMOLOGATION_ENV;
