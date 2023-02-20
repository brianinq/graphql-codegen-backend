import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});

  await prisma.user.create({
    data: {
      name: "Jack",
      messages: {
        create: [
          { body: "A Note for Jack" },
          { body: "Another Note for Jack" },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "Bryan",
      messages: {
        create: [
          { body: "A Note for Bryan" },
          { body: "Another Note for Bryan" },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "Adams",
      messages: {
        create: [
          { body: "A Note for Adams" },
          { body: "Another Note for Adams" },
        ],
      },
    },
  });
}

main().then(() => {
  console.log("✅Seeding done");
});
