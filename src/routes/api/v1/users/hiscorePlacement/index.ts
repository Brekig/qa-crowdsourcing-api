import { Response } from "express";
import { HiscorePlacementRequest } from "./interface";
/**
 * Route for getting hiscorePlacement of current user
 */
export default async (req: HiscorePlacementRequest, res: Response) => {
	console.log("req.params!!!", req.params);
	if (req.params) {
		try {
			const { loadDirection, countUp, countDown } = req.params;

			res.send(
				await req.body.user.getHighscoreListExpand(
					loadDirection,
					countUp,
					countDown
				)
			);
		} catch (error) {
			res.status(400).send({ message: error.message });
		}
	} else {
		try {
			res.send(await req.body.user.getHighscoreList());
		} catch (error) {
			res.status(400).send({ message: error.message });
		}
	}
};
