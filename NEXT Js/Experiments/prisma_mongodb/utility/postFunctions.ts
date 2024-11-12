import prisma from "./prisma";

export const fetchAllPosts = async () => {
    try {
        return await prisma.post.findMany({
            include: {
                comments: true,
            }
        })
    } catch (error) {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);

    } finally {
        await prisma.$disconnect();
    }
}



export const createPost = async (): Promise<void> => {
    await prisma.post.update({
        where: {
            slug: 'my-first-post',
        },
        data: {
            comments: {
                createMany: {
                    data: [
                        { comment: 'Great post!' },
                        { comment: "Can't wait to read more!" },
                    ],
                },
            },
        },
    });
}


