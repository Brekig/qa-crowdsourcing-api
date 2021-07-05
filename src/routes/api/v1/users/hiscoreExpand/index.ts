import { Response, Request } from "express";
// import { HiscorePlacementRequest } from "./interface";
/**
 * Route for getting higher hiscorePlacement of current user when scrolled up
 */
export default async (req: Request, res: Response) => {
	try {
		console.log("en er eg her");
		// loadDirection, countScrollUp, countScrollDown
		res.send(await req.body.user.getHighscoreListExpand(false, 3, 3));
	} catch (error) {
		console.log("eg er her");
		res.status(400).send({ message: error.message });
	}
};
