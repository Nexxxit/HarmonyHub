import { test, expect, describe } from "vitest";
import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  test("Отображение логотипа", () => {
    render(<Header />)
    const logo = screen.getByRole("img", { name: /логотип/i })
    expect(logo).toHaveAttribute('src')
  });

  test('Отображение названия проекта', () => {
    render(<Header />)
    expect(screen.getByRole("heading", {name: 'HarmonyHub'})).toBeInTheDocument();
  })
});
