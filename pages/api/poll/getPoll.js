import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Process a POST request
    const prisma = new PrismaClient();
    const polls = await prisma.event.findMany({
      include: {
        eventOptions: true,
        EventVote: true,
      },
    });

    res.json({ polls });
  }
}
