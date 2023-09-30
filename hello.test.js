const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World, Test de CI/CD by lorenzanacesar");
  });
});
