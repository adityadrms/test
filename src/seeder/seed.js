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

  // Data tambahan
  const hashedPasswordUser = await bcrypt.hash("User123", 10);

  const additionalCompanies = [
    { name: "PT Client_1", address: "Jakarta" },
    { name: "PT Client_2", address: "Bandung" },
  ];
  const createdCompanies = [];

  for (const company of additionalCompanies) {
    const createdCompany = await prismaClient.company.create({
      data: company,
    });
    createdCompanies.push(createdCompany);
  }

  const existingCompany = await prismaClient.company.findFirst({
    where: { name: "PDU" },
  });

  const additionalEmployees = [
    {
      name: "UserClient1",
      email: "userclient1@gmail.com",
      password: hashedPasswordUser,
      role: "USER",
      companyId: createdCompanies.find((c) => c.name === "PT Client_1").id,
    },
    {
      name: "UserClient2",
      email: "userclient2@gmail.com",
      password: hashedPasswordUser,
      role: "USER",
      companyId: createdCompanies.find((c) => c.name === "PT Client_2").id,
    },
    {
      name: "StaffPDU",
      email: "staffpdu@gmail.com",
      password: hashedPasswordUser,
      role: "USER",
      companyId: existingCompany.id,
    },
  ];

  for (const employee of additionalEmployees) {
    await prismaClient.employee.create({ data: employee });
  }

  // Tambahkan data places dan wells
  const companies = await prismaClient.company.findMany();

  for (const company of companies) {
    const places = [];
    for (let i = 1; i <= 4; i++) {
      const place = await prismaClient.place.create({
        data: {
          name: `Place ${i} of ${company.name}`,
          address: `Address of Place ${i}, ${company.address}`,
          latitude: -7.75 + Math.random() * 0.1, // Simulated coordinates
          longitude: 110.37 + Math.random() * 0.1,
          companyId: company.id,
        },
      });
      places.push(place);
    }

    for (let i = 1; i <= 4; i++) {
      const place = places[i - 1];
      await prismaClient.well.create({
        data: {
          name: `Well ${i} of ${company.name}`,
          address: `Address of Well ${i}, ${company.address}`,
          latitude: place.latitude, // Same as associated place
          longitude: place.longitude,
          topic: `UniqueTopic${company.name}${i}`,
          placeId: place.id,
          rig: `Rig ${i} details`,
        },
      });
    }
  }

  console.log("Seeding selesai!");
}

seed()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
