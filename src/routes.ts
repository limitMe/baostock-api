import { main } from './controller/home';

export default [
  {
    path: '/',
    method: 'get',
    action: main
  }
];