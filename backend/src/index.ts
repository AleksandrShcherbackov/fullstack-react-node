import express from 'express'
import { trpcRouter } from './trpc'
import * as trpcExpress from '@trpc/server/adapters/express'
import cors from 'cors';

const expressApp = express()
expressApp.use(cors())
expressApp.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  })
)
expressApp.listen(3000, () => {
  console.log('Listening ar 3000')
})
