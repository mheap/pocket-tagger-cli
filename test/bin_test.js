const sinon = require("sinon");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

const program = require("../bin/pocket-tagger");

describe("run()", function() {
  beforeEach(async function() {
    this.sandbox = sinon.createSandbox();
  });

  afterEach(function() {
    this.sandbox.restore();
  });

  it("has a useless test", function() {
    return expect(true).to.be.true;
  });
});

function execute(args) {
  args.unshift("node", "pocket-tagger");
  return program(args);
}
