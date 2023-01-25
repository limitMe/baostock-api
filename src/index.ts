import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import AppRoutes from './routes';

const app = new Koa();
const router = new Router();
app.use(cors());

// @ts-ignore
AppRoutes.forEach(route => router[route.method](route.path, route.action));

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);

console.log(`应用启动成功 端口: 3000`);