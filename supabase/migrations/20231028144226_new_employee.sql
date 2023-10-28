create table "public"."testTable" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now()
);


alter table "public"."testTable" enable row level security;

CREATE UNIQUE INDEX "testTable_pkey" ON public."testTable" USING btree (id);

alter table "public"."testTable" add constraint "testTable_pkey" PRIMARY KEY using index "testTable_pkey";


