import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (e) => {
  return await prisma.user.findMany()
});