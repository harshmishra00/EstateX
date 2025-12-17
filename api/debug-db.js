import prisma from "./lib/prisma.js";

console.log("Starting database connection test...");

async function main() {
    try {
        await prisma.$connect();
        console.log("Successfully connected to the database!");

        // Try a simple query
        try {
            const count = await prisma.user.count();
            console.log(`User count: ${count}`);
        } catch (queryError) {
            console.error("Connection successful, but query failed:", queryError.message);
        }

    } catch (e) {
        console.error("Connection error:", e.message);
        console.error("Full error:", JSON.stringify(e, null, 2));
    } finally {
        await prisma.$disconnect();
    }
}

main();
