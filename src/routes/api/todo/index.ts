import { eq } from 'drizzle-orm';
import { Elysia } from 'elysia';
import { todo, todoDeleteSchema, todoInsertSchema } from './schema';
import { db } from '../db';
import { t } from "elysia"
// import { ElysiaWS } from 'elysia/dist/ws';

// const clients = new Set<ElysiaWS<any, any, any>>()

export const todoRoute = new Elysia({ prefix: '/todo' })
  .get('', async () => await db.select().from(todo).orderBy(todo.id))
  .post('', async ({ body }) => await db.insert(todo).values(body), {
    body: todoInsertSchema,
  }).patch(
    "/:id",
    async ({ params, body }) => {
      await db
        .update(todo)
        .set({ isDone: body.isDone })
        .where(eq(todo.id, params.id));

      // for (const client of clients) {
      //   client.send(JSON.stringify({ event: "todo:update", id: params.id, isDone: body.isDone }));
      // }

      return { success: true };
    },
    {
      body: t.Object({ isDone: t.Boolean() }),
      params: t.Object({ id: t.String() }),
    }
  ).delete(
    '/:id',
    async ({ params }) => await db.delete(todo).where(eq(todo.id, params.id)),
    { params: todoDeleteSchema }
  );
