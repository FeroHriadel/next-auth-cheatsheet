import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import { NextAuthOptions } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { options } from "./options";



const handler = NextAuth(options);

export {handler as GET, handler as POST};

/**
 * $ npm run dev
 * POSTMAN => GET http://localhost:3000/api/auth/providers   => will show you auth setup obj
*/