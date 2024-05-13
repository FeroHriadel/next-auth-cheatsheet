
# COGNITO WITH NEXT-AUTH



### Setup Cognito like this:
<sub>(Cognito tutorial at: https://evoila.com/blog/secure-user-authentication-with-next-js-nextauth-js-and-aws-cognito-2/)
(Next-auth tutorial at: https://www.youtube.com/watch?v=w2h54xz6Ndw&ab_channel=DaveGray)</sub>
- aws / cognito /user pools / create user pool
- choose: cognito user pool & email checkbox & Next btn
- choose: cognito defaults, no MFA, enable self-service account recovery..., email only & Next btn
- choose: Enable self-registration, send email message..., keep original att..., email address & Next btn
- Email provider: Send email with cognito
- userpool name: Fero User Pool, use the cognito hosted ui, use cognito domain, cognito domain: https://fero-user-pool, public client, App client name: Fero Auth Client, generate a client secret, Allowed callback URLs: http:localhost:3000/api/auth/callback/cognito & Next btn
- COGNITO_CLIENT_ID => genral userpool overview / `User pool ID`
- COGNITO_CLIENT_SECRET & COGNITO_CLIENT_ID => general userpool overview / App Integration tab / scroll down to the bottom and click the app client / get the ids from the screen that opens