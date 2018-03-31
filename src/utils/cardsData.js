import faker from 'faker';

const CARDS_NUMBER = 10;

function genCard () {
  return {
    id: faker.random.number(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    website: faker.internet.domainName(),
    company: {
      name: faker.company.companyName(),
      catchPhrase: faker.company.catchPhrase(),
      bs: faker.company.bs()
    },
    address: {
      street: faker.address.streetName(),
      suite: 'Apt. ' + faker.random.number(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),
      geo: {
        lat: faker.address.latitude(),
        lng: faker.address.longitude()
      }
    }
  };
}

export const fetchCards = () => {
  const result = [];
  for (let i = 0; i < CARDS_NUMBER; i++) {
    result.push(genCard());
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(JSON.stringify(result)), 2000);
  });
};
