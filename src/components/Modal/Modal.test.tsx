import { render } from "@testing-library/react";
import React from "react";
import Modal from "./Modal";

describe("Testando o componente Modal", () => {
  it("should render correctly", () => {
    const wrapper = render(
      <Modal
        open
        textEdit={"editar"}
        textClose={"fechar"}
        handleClose={() => {}}
        handleEdit={() => {}}
        titleModal={"teste"}
        contentModal={"teste"}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
