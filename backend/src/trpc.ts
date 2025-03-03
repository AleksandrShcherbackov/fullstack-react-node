import { initTRPC } from "@trpc/server";

const users = [
    { id: 0, name: 'Alex', surname: 'Ivanov' },
    { id: 1, name: 'Ivan', surname: 'Petrov' },
    { id: 2, name: 'Petr', surname: 'Sergeev' },
];

const trpc = initTRPC.create();
export const trpcRouter = trpc.router({
    getUsers: trpc.procedure.query(() => {
        return { users };
    })
});

export type TrpcRouter = typeof trpcRouter;