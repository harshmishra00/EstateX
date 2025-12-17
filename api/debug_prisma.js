import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    try {
        console.log("Attempting to fetch posts...");
        const posts = await prisma.post.findMany({
            include: {
                user: {
                    select: {
                        username: true,
                        avatar: true,
                    },
                },
            },
        });
        console.log("Success! Found " + posts.length + " posts.");
        console.log(JSON.stringify(posts[0], null, 2));
    } catch (err) {
        console.error("Error fetching posts:", err);
    } finally {
        await prisma.$disconnect();
    }
}

main();
