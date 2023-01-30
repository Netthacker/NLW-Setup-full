import Fastify from "fastify"
import cors from '@fastify/cors'
import {PrismaClient} from "@prisma/client"

const app = Fastify()
const prisma = new PrismaClient()

//para o frontend ver a aplicação precisa do dessa linha abaixo
app.register(cors,{
  origin: ['*']
})

app.get('/', async () =>{
  const habits = await prisma.habit.findMany({})
  return habits
})

app.listen({
  port: 3333,
}).then(() =>{
  console.log('HTTP Server running !')
})