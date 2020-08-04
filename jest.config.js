module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["**/trials/*.js", "!**/node_modules/**"],
  coverageReporters: ["html", "text-summary"],
  coverageDirectory: "coverage"
};
  