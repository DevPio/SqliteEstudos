CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "email" text,
  "password" text,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "posts" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "text" int,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "comments" (
  "id" SERIAL PRIMARY KEY,
  "post_id" int,
  "user_id" int,
  "created_at" timestamp DEFAULT (now())
);

