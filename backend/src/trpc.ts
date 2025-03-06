import { initTRPC } from '@trpc/server'
import _ from 'lodash'
import  { z } from 'zod'

const users = _.times(10, (i) => ({
  id: String(i),
  name: `name ${i}`,
  surname: `surname ${i}`,
  text: _.times(10, (j) => `<p>Text of paragraf ${j} of user ${i}</p>`).join(''),
}))
const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getUsers: trpc.procedure.query(() => {
    return { users: users.map(({ id, name, surname }) => ({ id, name, surname })) }
  }),
  getUserById: trpc.procedure.input((z.object({ id: z.string() }))).query(({ input }) => {
    const user = users.find(({ id }) => id === input.id);
    return { user: user || null }
  }),
})

export type TrpcRouter = typeof trpcRouter
