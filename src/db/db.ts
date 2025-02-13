import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  let prisma: undefined | ReturnType<typeof prismaClientSingleton>
}
// @ts-expect-error missing type
const db = globalThis.prisma ?? prismaClientSingleton()

export default db
// @ts-expect-error missing type
if (process.env.NODE_ENV !== "production") globalThis.prisma = db