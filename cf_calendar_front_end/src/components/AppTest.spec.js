import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Students from "./Students";

describe("<AboutPage />", () => {
  it("should link to an unknown route path", () => {
    const wrapper = shallow(<App />);
    const actual = wrapper.find(<Students/>).length;
    const expected = 0;

    expect(actual).toEqual(expected);
  });
});
