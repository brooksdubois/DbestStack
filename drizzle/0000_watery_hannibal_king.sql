CREATE TABLE IF NOT EXISTS "todo" (
	"id" text PRIMARY KEY NOT NULL,
	"data" text NOT NULL,
	"isDone" boolean DEFAULT false NOT NULL
);
