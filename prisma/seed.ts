import { faker } from '@faker-js/faker';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

function createRandomUser(): Omit<User, 'presets'> {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.helpers.unique(faker.internet.email, [
        firstName,
        lastName,
    ]);

    return {
        id: 1,
        name: firstName,
        email,
        password: faker.internet.password(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
    };
}

async function main() {
    const user1 = createRandomUser();

    const john = await prisma.user.create({
        data: {
            ...user1,
        },
    });

    console.log({ john });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
