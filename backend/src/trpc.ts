import { initTRPC } from "@trpc/server";
import _ from 'lodash';

const users = _.times(10, (i) => ({
    id: String(i),
    name: `name ${i}`,
    surname: `surname ${i}`,
    text: _.times(10, () => `<p>Text of paragraf ${1} of user ${i}</p>`).join(''),
}));
const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
    getUsers: trpc.procedure.query(() => {
        return { users: users.map(({ id, name, surname }) => ({ id, name, surname })) };
    })
});

export type TrpcRouter = typeof trpcRouter;