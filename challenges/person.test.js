const { setEmail, setName } = require("./person");

const email = "john@email.fr";
const name = "Doe";
const person = {
  name: "john",
  email: "",
};

describe("Testing person.js", () => {
  test("check is email pattern", () => {
    const patternMail = new RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    );

    expect(email).toMatch(patternMail);
  });

  test("test setEmail function", () => {
    setEmail(person, email);

    expect(person.email).toBe(email);
  });

  test("test setName function", () => {
    setName(person, name);

    expect(person.name).toBe(name);
  });
});
