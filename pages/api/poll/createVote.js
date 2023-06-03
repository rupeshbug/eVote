import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const prisma = new PrismaClient();
    const ifVoteExists = await prisma.eventVote.findFirst({
      where: {
        email: req.body.email,
        eventId: req.body.event,
      },
    });

    if (ifVoteExists) {
      return res.status(400).json({ msg: "You already voted" });
    }
    await prisma.eventVote.create({
      data: {
        email: req.body.email,
        eventOptionId: req.body.eventVoteId,
        eventId: req.body.event,
      },
    });

    res.status(200).json({ msg: "created successfully" });
  }
}
