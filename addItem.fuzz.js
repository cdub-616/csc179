import { add } from "./addItem";

describe("my Fuzzy test", () => {
	it.fuzz("initial fuzzing", (data) => {
		expect(add(data));
	});
});