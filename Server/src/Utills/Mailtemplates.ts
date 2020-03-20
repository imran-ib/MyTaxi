import { ElevenDigitKey } from "./GenCustomKey";
import { Context } from "./../types/Context";
import { User } from "./../types/graph.d";

function WelcomeMessage(user, ctx: Context, VerificationKey) {
  return `
  <div>Hello Mr.${user.fullName.toUpperCase()}</div>
  <div>Welcome in My Portfolio App.</div>
    <div>Please find link to validate your email.
       ${
         process.env.FRONTEND_URL
       }/validateEmail?validateEmailToken=${VerificationKey}
    </div>
  `;
}

function PasswordResetLink(token, user: User, ctx: Context) {
  return `
    <div>hello</div>
    <div>Please find link to reset your password.
    <a href="${process.env.FRONTEND_URL}/user-reset-password?token=${token}">Click Here </a>
    </div>
  `;
}

export { WelcomeMessage, PasswordResetLink };
