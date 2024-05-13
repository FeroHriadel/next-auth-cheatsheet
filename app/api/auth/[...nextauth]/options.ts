import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import Cognito from "next-auth/providers/cognito";
import CredentialsProvider from 'next-auth/providers/credentials';



export const options: NextAuthOptions = {
    providers: [ 
        GitHubProvider({ //OAuth Provider example 1
            clientId: process.env.GITHUB_CLIENT_ID!, //create github app at: `https://github.com/settings/apps` => New GitHub App to get clientId & clientSecret
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        }),
        Cognito({ //OAuth Provider example 2
            clientId: process.env.COGNITO_CLIENT_ID!, //setup cognito like this: https://evoila.com/blog/secure-user-authentication-with-next-js-nextauth-js-and-aws-cognito-2/
            clientSecret: process.env.COGNITO_CLIENT_SECRET!, //aws/cognito/user pools/Fero User Pool/App Integration/click the client name at the bottom to see secret & client id
            issuer: process.env.COGNITO_ISSUER! //https://cognito-idp.{region}.amazonaws.com/{PoolId}
        }),
        CredentialsProvider({ //your own custom provider
            name: 'Credentials',
            credentials: { //add credentials you want to have. Here: username & password
                username: {label: 'Username', type: 'text', placeholder: 'any-username-placeholder'},
                password: {label: 'Password', type: 'text', placeholder: 'any-password-placeholder'}
            },
            async authorize (credentials, req) {
                //get data from db here
                //docs: https://next-auth.js.org/providers/credentials
                const userFromDB = {id: '42', name: 'David', password: 'davidspassword'};
                if (credentials?.username === userFromDB.name && credentials?.password === userFromDB.password) return userFromDB
                else return null
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET!,
    callbacks: {
        async jwt({ account, token, user }) {
            console.log('*************jwt  callback:')
            console.log('account: ', account); //account has id_token with all cognitouser's info :) You can do sthg with it here
            console.log('token: ', token);
            console.log('user: ', user);
            return token; //token.account = account sadly doesn't seem to work :(
        },
        async session({session, token}) {
            (session as any).token = token;
            console.log('********************returned session: ', session);
            return session
        }
    }
    // pages: { //pages that next-auth will redirect you to. You can leave blank and it will create some for you at /auth/signin and more...
    //     signIn: '/auth/signin',
    //     signOut: '/auth/signout',
    //     error: '/auth/error',
    //     newUser: '/auth/signup'
    // },
    // session: {
    //     strategy: 'jwt' //or 'database'. No need to add => 'jwt' is the default
    // },
}