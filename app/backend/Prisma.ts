import { PrismaClient } from '@prisma/client';

//sets up prisma client to connect to the prisma database
let prisma: PrismaClient;
prisma = new PrismaClient();
export default prisma;