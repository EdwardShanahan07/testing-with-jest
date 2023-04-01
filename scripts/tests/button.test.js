/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() => {
  document.body.innerHTML = `<p id="par"></p>`;
});

describe("Test DOM Content", () => {
  test("expects p content to change", () => {
    buttonClick();
    expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
  });
});
