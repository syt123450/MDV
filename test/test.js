import { main } from "../src/main";
import chai from "chai"

describe('Test CountryColorMap', function () {
	it('Should counts total of 228 countries', function () {
		let expectValue = 3;

		let mainObject = new main();

		let result = mainObject.add(1, 2);
		chai.expect(result).to.equal(expectValue);
	});
});