# Enhanced GPT Playground

An enhanced version of OpenAI's playground (https://platform.openai.com/playground).

**Still a WIP**

To get started, clone the repo and run

```
pnpm install
```

You'll need to add your OpenAI API key to a fresh `.env` file, along with a link pointing to a local or hosted postgres DB:

```
NEXT_PUBLIC_OPENAI_API_KEY="<YOUR-KEY>"
DATABASE_URL="<DB-URL>"
```

Migrate the DB schema by running:

```
npx prisma migrate dev
```

Followed by:

```
npx prisma generate && npx prisma db seed
```

Then run

```
pnpm run dev
```

to start the development server.
