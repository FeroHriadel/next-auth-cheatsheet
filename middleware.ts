export { default } from 'next-auth/middleware';



// if you specify no matchers just the one line above will protect all app.



//or specify pages you want to protect:
export const config = {
    matcher: [
        '/protectedpage',
    ]
}