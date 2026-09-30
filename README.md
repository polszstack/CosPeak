# CosPeak Universe Lab

A Next.js and React showcase that explains how the universe works through visual cards, trivia, and exploration ideas.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## MySQL

The app runs from local React data by default. To use MySQL later, create a database and run:

```bash
mysql -u your_user -p your_database < db/schema.sql
```

Then set `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`, and `MYSQL_DATABASE`.
