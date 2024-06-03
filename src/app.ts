import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import { donorRoutes } from "./routes/donor";

const app = fastify({
  logger: true
});

app.register(fastifyCors, {
  origin: true
})

app.register(donorRoutes)


export default app