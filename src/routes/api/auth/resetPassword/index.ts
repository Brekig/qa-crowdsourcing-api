import { Users, AuthTokens } from "../../../../models";
import { Response } from "express";
import { ResetPasswordRequest } from "./interface";
import { isProd } from "../../../../utils/secrets";

/**
 * Route to reset password
 */

export default async (req: ResetPasswordRequest, res: Response) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await Users.findByCreds(email, password);
        
        res.cookie("token", token, {
			expires: AuthTokens.getExpiry(),
			httpOnly: true,
			sameSite: "none",
			secure: isProd,
		})
			.status(200)
			.send(user);
	} catch (error) {
		res.status(400).send({ message: "Innskráning gekk ekki" });
	}
};
