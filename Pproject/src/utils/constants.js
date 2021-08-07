export const EMAIL_FORMAT_REGEX = /^[a-z0-9_]+@[a-z]+.[a-z]{2,4}$/; // TODO add
export const PASSWORD_FORMAT_REGEX = ''; // TODO add
export const PHONE_NUMBER_FORMAT_REGEX = /^[0-9]*$/; // TODO add

export const APP_PAGE_URLS = {
  register: 'register',
  login: 'login',
  main: 'main',
  locations: 'locations',
  bills: 'bills',
  account: 'account',
  addLocation: 'addLocation',
};

export const USER_TYPE = {
  owner: 1,
  tenant: 2,
};

export const API_URLS = {
  login: '/signin',
  currentUser: '/currentUser',
  register: '/register',
  locations: '/users/:userId/locations',
  addLocation: '/locations',
  update: '/users/:userId',
};

export const LOCATION_RENTAL_STATUSES = {
  notRented: 0,
  rented: 1,
  pending: 2,
};

export const BUTTON_TYPES = {
  primary: 'primary',
  secondary: 'secondary',
  remove: 'delete',
};

export const API_REQUEST_METHODS = {
  POST: 'post',
  GET: 'get',
  PATCH: 'patch',
};