// import { SendVericficationSms } from "../../../../Utills/SendSms";
// import { FourDigitKey } from "../../../../Utills/GenCustomKey";
import { Varyfication } from "../../../../generated/prisma-client/index";
import { Context } from "../../../../types/Context";
import {
  MutationStartPhoneVerificationArgs,
  PhoneVerificationResponse
} from "../../../../types/graph";

export const StartPhoneVerification = async (
  parent: any,
  args: MutationStartPhoneVerificationArgs,
  ctx: Context,
  info: any
): Promise<PhoneVerificationResponse> => {
  try {
    // TODO if User is already veryfied return
    // after complete phone verication we are removing verification.
    // if the user ask for verificaion but never verified and ask for verfication code again
    // remove the old verification and create new
    const exitsVerification: Varyfication = await ctx.prisma.query.varyfication(
      {
        where: { payload: args.phone }
      }
    );
    if (exitsVerification) {
      await ctx.prisma.mutation.deleteVaryfication({
        where: { payload: args.phone }
      });
    }
    // const VerificationKey = FourDigitKey;
    const VerificationKey = "12345";
    // Sms Costs Mony so i am using fix number

    const NewVarification: Varyfication = await ctx.prisma.mutation.createVaryfication(
      {
        data: {
          payload: args.phone,
          target: "PHONE",
          key: VerificationKey,
          user: {
            connect: {
              id: ctx.request.userId
            }
          }
        }
      }
    );

    // Update users phone
    // TODO Check if this part is neccesary
    const user = await ctx.prisma.mutation.updateUser({
      where: { id: ctx.request.userId },
      data: {
        phone: args.phone,
        varyfication: {
          connect: {
            id: NewVarification.id
          }
        }
      }
    });

    // Send The code To Phone
    //? uncomment if you want to send sms
    // await SendVericficationSms(NewVarification.payload, NewVarification.key);
    return {
      ok: true,
      error: null
    };
  } catch (error) {
    return {
      ok: false,
      error: `Server Error Unable To send Code To phone ${error.message}`
    };
  }
};
