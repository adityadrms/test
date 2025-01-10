const bcrypt = require("bcrypt");
const { prismaClient } = require("../app/database");

async function seed() {

  const hashedPassword = await bcrypt.hash("Hashedpassword456", 10);

  const company = await prismaClient.company.create({
    data: {
      name: "PDU",
      address: "UGM Yogyakarta",
    },
  });

  await prismaClient.employee.create({
    data: {
      name: "AdminPDU",
      email: "adminpdu@gmail.com",
      password: hashedPassword, 
      role: "ADMIN",
      companyId: company.id,
    },
  });

  console.log("Seeding selesai!");
}

seed()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
