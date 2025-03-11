import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./app/actions/authActions";
import { compare } from "bcryptjs";
import { loginSchema } from "./lib/schemas/LoginSchema";

const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      name: "credentials",
      async authorize(credentials) {
        // Validate credentials using the login schema
        const validated = loginSchema.safeParse(credentials);

        if (validated.success) {
          const { email, password } = validated.data;

          // Retrieve user from the database
          const user = await getUserByEmail(email);

          // Check if user exists and the password matches
          if (!user || !(await compare(password, user.passwordHash))) {
            return null;
          }

          return user;
        }

        return null;
      },
    }),
  ],
};

export default authConfig;
