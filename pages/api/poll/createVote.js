import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const prisma = new PrismaClient();
    const ifVoteExists = await prisma.eventVote.findMany({
      where: {
        email: req.body.email,
      },
      include: {
        event: true,
      },
    });
    console.log("ifVoteExists", ifVoteExists);
    const newVote = await prisma.eventVote.create({
      data: {
        email: req.body.email,
        event: req.body.event,
      },
    });

    res.json({ newVote });
  }
}
