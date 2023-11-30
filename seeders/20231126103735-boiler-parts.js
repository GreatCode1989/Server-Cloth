const { faker } = require('@faker-js/faker');
('use strict');

const boilerManufacturers = [
  'Ariston',
  'Palit',
  'Baxi',
  'XFX',
  'Henry',
  'MSI',
  'Buderus',
  'Gainward',
  'NorthWest',
];

const partsManufacturers = [
  'Azure',
  'Armor',
  'Aorus',
  'Tuf',
  'Sapphire',
  'Sensor',
  'Montana',
  'Trio',
  'Asus',
  'Lesly',
];

const getRandomFloat = (min, max, precision) => {
  const random = Math.random() * (max - min) + min;
  return Number(random.toFixed(precision));
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'BoilerParts',
      [...Array(100)].map(() => ({
        boiler_manufacturer:
          boilerManufacturers[Math.random() * boilerManufacturers.length],
        parts_manufacturer:
          partsManufacturers[Math.random() * partsManufacturers.length],
        price: getRandomFloat(1, 10000, 0.01),
        name: faker.lorem.sentence(2),
        description: faker.lorem.sentence(10),
        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr()}?random=${getRandomFloat(30)}`,
          ),
        ),
        vendor_code: faker.internet.password(),
        in_stock: getRandomFloat(1, 10, 0.01),
        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),
        popularity: getRandomFloat(1, 100, 0.01),
        compatibility: faker.lorem.sentence(7),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BoilerParts', null, {});
  },
};
