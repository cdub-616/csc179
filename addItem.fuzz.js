import { add } from "./addItem.js";
//const target = require("./addItem");

describe("my Fuzzy test", () => {
	it.fuzz("initial fuzzing", (data) => {
		expect(add(data));
	});
});