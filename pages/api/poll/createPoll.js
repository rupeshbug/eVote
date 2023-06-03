import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const prisma = new PrismaClient();
    const newPoll = await prisma.event.create({
      data: {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author || "random",
      },
    });

    const newEventOptions = await prisma.eventOptions.createMany({
      data: [
        { title: req.body.option1, eventId: newPoll.id },
        { title: req.body.option2, eventId: newPoll.id },
        { title: req.body.option3, eventId: newPoll.id },
        { title: req.body.option4, eventId: newPoll.id },
      ],
    });

    res.json({ newPoll });
  }
}
