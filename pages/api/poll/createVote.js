import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const prisma = new PrismaClient();
    const ifVoteExists = await prisma.eventVote.findFirst({
      where: {
        email: req.body.email,
        event: req.body.event,
      },
      include: {
        event: true,
      },
    });

    if (ifVoteExists) {
      return res.status(400).json({ msg: "You already voted" });
    }
    const newVote = await prisma.eventVote.create({
      data: {
        email: req.body.email,
        eventOptionId: req.body.eventVoteId,
      },
    });

    res.json({ newVote });
  }
}
