import { PrismaClient } from "@prisma/client";

// Type assertion for global object to inform TypeScript about the prisma property
declare const global: {
    prisma?: PrismaClient;
};

let prisma: PrismaClient;

// Check if Prisma instance exists, if not, create a new one
if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();

} else {
    
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    
    prisma = global.prisma;
}

export default prisma;
