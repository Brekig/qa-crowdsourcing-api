import { Response } from "express";
import { HiscorePlacementRequest } from "./interface";
/**
 * Route for getting lower user hiscorePlacement of current user
 * when scrolled down
 */
export default async (req: HiscorePlacementRequest, res: Response) => {
	try {
		// const { user, verificationCode } = req.body;

		// false = scroll downward direction
		// #TODO: figure out counting how often he has scrolled
		res.send(await req.body.user.getHightscoreListExpand(false, 2, 2));
	} catch (error) {
		res.status(400).send({ message: error.message });
	}
};
