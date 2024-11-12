import prisma from "./prisma";

export const fetchAllUsers = async () => {
    try {
        return await prisma.user.findMany({
            include: {
                posts: true,
            }
        });
   
    } catch (error) {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
   
    } finally {
        await prisma.$disconnect();
    }
}

export const createUser = async (): Promise<void> => {
    await prisma.user.create({
        data: {
            name: 'Chandan',
            email: "hirechandan@gmail.com",
            posts: {
                create: {
                    title: 'My first post',
                    body: 'Lots of really interesting stuff',
                    slug: "my-first-post",
                }
            }
        }
    });
}
