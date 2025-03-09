import { Elysia } from 'elysia';
import { todoRoute } from './todo';
import cors from '@elysiajs/cors';
import betterAuthView from '~/utils/auth-view';
import { swagger } from '@elysiajs/swagger'


export const app =
    new Elysia({ prefix: '/api' })
      .use(cors())
      .use(swagger())
      .use(betterAuthView)
      .use(todoRoute)
      .compile();

export type App = typeof app;

console.log(`🛡️ Server is running on http://localhost:3000`);
console.log('📌 Registered Routes:', app.routes.map(route => route.path));

// .use(cors({ origin: "*" }))
// .ws("/sync", {
//   open(ws: ElysiaWS<any, Route, any>) {
//     clients.add(ws);
//    // ws.send(JSON.stringify({ event: "connection", message: "Connected to sync" }));
//   },
//   message(ws, message) {
//     console.log("Received:", message);
//   },
// })