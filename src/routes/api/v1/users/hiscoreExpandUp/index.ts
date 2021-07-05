import { Response, Request } from "express";
import { HiscorePlacementRequest } from "./interface";
/**
 * Route for getting higher hiscorePlacement of current user when scrolled up
 */
export default async (req: Request, res: Response) => {
	try {
		// const { user, verificationCode } = req.body;
		console.log("en er eg her");
		res.send(await req.body.user.getHightscoreListExpand(true, 2, 2));
	} catch (error) {
		console.log("eg er her");
		res.status(400).send({ message: error.message });
	}
};
