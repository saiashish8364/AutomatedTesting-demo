import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
describe("<Greeting>", () => {
  test("renders Hello World as test", () => {
    //Arrange
    render(<Greeting />);
    //Act
    //...nothing
    //Assert
    const hello = screen.getByText("Hello");
    expect(hello).toBeInTheDocument();
  });
});
