import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const prisma = new PrismaClient();
    const newPoll = await prisma.event.create({
      data: {
        title: req.body.title,
        content: req.body.content,
        author: "random",
      },
    });

    res.json({ newPoll });
  }
}
