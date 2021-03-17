import { GameRounds, GameRoundsInterface } from "../../";

const validGameRound = {
	currentRound: 1,
	totalRounds: 10,
};

let round: GameRoundsInterface;

beforeEach(async (done) => {
	try {
		await GameRounds.findByIdAndDelete(round._id);
	} catch (e) {
		//
	} finally {
		//
	}
	return done();
});

describe("Creating gamerounds", () => {
	describe("the initial value of currentRound", () => {
		it("should have a default value of 1 when no val passed in", async (done) => {
			round = await GameRounds.create({
				...validGameRound,
				currentRound: undefined,
			});
			expect(round).toHaveProperty("currentRound", 1);
			done();
		});

		it("should have a default value of 1 even when other value passed in creation", async (done) => {
			round = await GameRounds.create({
				...validGameRound,
				currentRound: 2,
			});
			expect(round).toHaveProperty("currentRound", 1);
			done();
		});
	});
	describe("the initial value of totalRounds", () => {
		it("should have a default value of 10 when no val passed in", async (done) => {
			round = await GameRounds.create({
				...validGameRound,
				totalRounds: undefined,
			});
			expect(round).toHaveProperty("totalRounds", 10);
			done();
		});

		it("should have a default value of 1 even when other value passed in creation", async (done) => {
			round = await GameRounds.create({
				...validGameRound,
				totalRounds: 2,
			});
			expect(round).toHaveProperty("totalRounds", 2);
			done();
		});
	});
});
