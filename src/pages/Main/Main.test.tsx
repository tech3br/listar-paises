import { render } from "@testing-library/react";
import React from "react";
import Main from "./main";

describe("Testando o componente Main", () => {
  it("should render correctly", () => {
    const wrapper = render(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});

test("o header foi renderizado?", () => {
  const { getByText } = render(<Main />);
  const x = getByText("Desafio Tecnico Softplan - Daniel Filgueira da Silva");
  expect(x).toEqual(x);
});
