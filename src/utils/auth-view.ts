import { Elysia } from 'elysia';
import { auth } from './auth';

export default new Elysia()
  .group('/auth', (app) =>
    app
      .post('/signUp', async ({ request }) => {
        console.log('🔹 Signup Request Received');
        try {
          console.log('🔹 Forwarding request to BetterAuth...');
          const response = await auth.handler(request);
          console.log('✅ BetterAuth Response:', response);
          return response;
        } catch (error) {
          console.error('❌ Error in BetterAuth handler:', error);
          return 'Internal Server Error';
        }
      })
      .post('/login', async ({ request }) => {
        console.log('🔹 Login Request Received');
        return await auth.handler(request);
      })
      .get('/session', async ({ request }) => {
        console.log('🔹 Session Check');
        return await auth.handler(request);
      })
  );
//
//
// import { Elysia } from 'elysia';
// import { auth } from './auth';
//
// const betterAuthView = new Elysia()
//   .group('/auth', (app) =>
//     app.all('/*', async ({ request, set }) => {
//       console.log(`🔹 Incoming request: ${request.method} ${request.url}`);
//
//       if (!['POST', 'GET'].includes(request.method)) {
//         set.status = 405;
//         console.log('❌ Rejected request: Method Not Allowed');
//         return 'Method Not Allowed';
//       }
//
//       try {
//         console.log('🔹 Forwarding request to BetterAuth...');
//         const response = await auth.handler(request);
//         console.log('✅ BetterAuth Response:', response);
//         return response;
//       } catch (error) {
//         console.error('❌ Error in BetterAuth handler:', error);
//         set.status = 500;
//         return 'Internal Server Error';
//       }
//     })
//   );
//

//export default betterAuthView;
