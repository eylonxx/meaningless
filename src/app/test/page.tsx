import { db } from "@/drizzle/db";
import { users } from "@/drizzle/schema";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  const allUsers = await db.select().from(users);

  const user = session?.user;

  if (!user) {
    return <div>please login</div>;
  }
  return <div>{user.name}</div>;
};

export default page;
