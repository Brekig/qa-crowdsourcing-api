import { Request, Response } from "express";
import { ReadAllRequest } from "./interface";
/**
 * @verb GET
 * @endpoint /api/v1/prize_give_aways
 * @version v1
 * @description the route will responds with an array of objects containing date and items of
 *     past and future prize give aways
 * @auth none
 * @example
 *     GET /api/v1/prize_give_aways \
 *     --data { }
 */

export default async (req: ReadAllRequest, res: Response) => {
	res.send([
		{
			time: new Date(1625158800000), // 17:00 june 30th,
			items: [],
		},
		{
			time: new Date(1625763600000), // 17:00 july 7th,
			items: [],
		},
		{
			time: new Date(1626368400000), // 17:00 july 15th,
			items: [],
		},
		{
			time: new Date(1626973200000), // 17:00 july 22th,
			items: [],
		},
		{
			time: new Date(1627578000000), // 17:00 july 29th,
			items: [],
		},
		{
			time: new Date(1628182800000), // 17:00 august 5th,
			items: [],
		},
		// á að draga út hérna?
		// {
		// 	time: new Date(1629392400000), // 17:00 august 19th,
		// 	items: [],
		// },
		{
			time: new Date(1629997200000), // 17:00 august 26th,
			items: [],
		},
		{
			time: new Date(1631206800000), // 17:00 september 9th,
			items: [],
		},

		{
			time: new Date(1632416400000), // 17:00 september 23th,
			items: [],
		},

		{
			time: new Date(1633626000000), // 17:00 october 7th,
			items: [],
		},

		{
			time: new Date(1634835600000), // 17:00 october 21th,
			items: [],
		},
	]);
};
