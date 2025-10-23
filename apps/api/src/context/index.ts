import { db } from "@src/database";
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { UserRole } from "generated/prisma";

export interface SessionUser {
  id: string;
  role: UserRole;
}

export const createTRPCcontext = async ({
  req,
  res,
}: CreateExpressContextOptions) => {
  const { sessionToken } = req.cookies;

  return {
    sessionToken,
    db,
    res,
    auth: undefined as SessionUser | undefined,
  };
};

export type ITRPCContext = Awaited<ReturnType<typeof createTRPCcontext>>;
