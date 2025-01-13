const { prismaClient } = require("../app/database");

const {
  wellValidation,
  updateWellValidation,
} = require("../validator/well.validation");

const createWellService = async (data) => {
  const { well, placeId } = data;

  if (well && well.length > 0) {
    for (const wells of well) {
      const { error: wellError } = wellValidation.validate(wells);
      if (wellError) {
        throw new Error(
          `Well validation failed: ${wellError.details[0].message}`
        );
      }
    }
  }

  return await prismaClient.$transaction(async (prisma) => {
    const place = await prisma.place.findUnique({
      where: { id: placeId },
    });

    if (!place) {
      throw new Error(`well with ID ${placeId} not found`);
    }
    const createdWells = [];
    for (const wells of well) {
      const createdwell = await prisma.well.create({
        data: {
          name: wells.name,
          address: wells.address,
          latitude: wells.latitude,
          longitude: wells.longitude,
          topic: wells.topic,
          rig: wells.rig,
          placeId: placeId,
        },
      });
      createdWells.push(createdwell);
    }
    return createdWells;
  });
};

//viewAll
const getAllWellService = async () => {
  return await prismaClient.well.findMany({
    include: {
      place: {
        include: {
          company: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
};

// View Id
const getIdWellService = async (wellId) => {
  return await prismaClient.well.findUnique({
    where: { id: wellId },
    include: {
      place: {
        include: {
          company: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
};

//get by company id
const getByCompanyIdWellService = async (companyId) => {
  return prismaClient.well.findMany({
    where: {
      place: {
        companyId: companyId,
      },
    },
    include: {
      place: {
        include: {
          company: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
};

const updateWellService = async (data) => {
  const { well, placeId, wellId } = data;

  const { error: wellError } = updateWellValidation.validate(well);
  if (wellError) {
    throw new Error(`well validation failed: ${wellError.details[0].message}`);
  }

  return await prismaClient.$transaction(async (prisma) => {
    const place = await prisma.place.findUnique({
      where: { id: placeId },
    });

    if (!place) {
      throw new Error(`Place with ID ${placeId} not found`);
    }

    const existingwell = await prisma.well.findUnique({
      where: { id: wellId },
    });

    if (!existingwell || existingwell.placeId !== placeId) {
      throw new Error(
        `well with ID ${wellId} not found or does not belong to the specified company`
      );
    }

    return await prisma.well.update({
      where: { id: wellId },
      data: {
        name: well.name,
        address: well.address,
        latitude: well.latitude,
        longitude: well.longitude,
        rig: well.rig,
        placeId: placeId,
      },
    });
  });
};

const deleteWellservice = async (wellId) => {
  const deletewell = await prismaClient.well.delete({
    where: {
      id: wellId,
    },
  });
  return deletewell;
};

module.exports = {
  createWellService,
  getAllWellService,
  getIdWellService,
  updateWellService,
  deleteWellservice,
  getByCompanyIdWellService,
};
