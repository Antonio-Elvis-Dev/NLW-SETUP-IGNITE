import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from '@fastify/cors'

const app = Fastify();
const prisma = new PrismaClient();


app.register(cors,{
    origin:['http://localhost:3000']
})

app.get("/hello", async () => {
  const habits = await prisma.habit.findMany(
//     {
//     where: {
//       title: {
//         contains: "treinar",
//       },
//     },
//   }
  );

  return habits;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running!");
  });
