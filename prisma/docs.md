# DB Docs

The ORM used is [Prisma](https://www.prisma.io).

## Workflow [[Source](https://medium.com/@1neel.sabne/connect-mongodb-using-prisma-orm-in-nestjs-9ae2e2776de2)]

1. Updates to the DB schema are done in the `schema.prisma` file, following the ORM specifications for a mongoDB.
2. To sync the schema with the database we run `npx prisma db push`.
   1. The Prisma CLI will automatically create the necessary collection in the DB.
3. The DB can be explored using: `npx prisma studio`.
4. To sync the prisma client API with the update schema we run: `npx prisma generate`.

<b style="color: lightcoral">
🛑 Maybe some of this command can be merged into a single custom npm command.
</b>
