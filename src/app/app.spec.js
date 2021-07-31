import React from "react";
import { render, screen } from "@testing-library/react";
import App from './index'

test("app renders", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});