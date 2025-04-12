import { test, expect, describe, vi, beforeEach } from "vitest";
import { render, screen, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Hobbies from "./Hobbies";

describe("Hobbies component", () => {
  const testData = [
    { id: 1, name: "Музыка" },
    { id: 2, name: "Программирование" },
  ];

  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    render(<Hobbies hobbiesData={testData} />);
  });

  test("Отображает основные элементы", () => {
    expect(
      screen.getByRole("heading", { name: "Мои увлечения" })
    ).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(testData.length);
  });

  const testButton = (name: RegExp, count: number, testId: string) => {
    const buttons = screen.getAllByRole("button", { name });
    expect(buttons).toHaveLength(count);

    buttons.forEach((button) => {
      expect(button).toBeVisible();
      expect(button).toBeEnabled();
      expect(within(button).getByTestId(testId)).toBeVisible();
    });
  };

  test("Отображает изначальные интерактивные элементы", () => {
    testButton(/удалить/i, testData.length, "trash-icon");
    testButton(/редактировать/i, testData.length, "edit-icon");
    testButton(/добавить/i, 1, "plus-icon");
  });

  test("Удаляет увлечение", async () => {
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(testData.length);

    const deleteBtn = screen.getAllByRole("button", { name: /удалить/i })[0];

    await userEvent.click(deleteBtn);

    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(listItems.length - 1);
      expect(screen.queryByText("Музыка")).not.toBeInTheDocument();
    });
  });

  test("Редактирует увлечение", async () => {
    const editBtn = screen.getAllByRole("button", {
      name: /редактировать/i,
    })[0];
    await user.click(editBtn);

    const input = await screen.findByRole("textbox", {
      name: /редактировать увлечение/i,
    });
    const saveButton = screen.getByRole("button", { name: /сохранить/i });

    await userEvent.clear(input);
    await userEvent.type(input, "Игры");
    await userEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText("Игры")).toBeInTheDocument();
      expect(screen.queryByText(testData[0].name)).not.toBeInTheDocument();
    });

    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });

  test("Добавляет увлечение", async () => {
    const listItems = screen.getAllByRole("listitem");
    const addBtn = screen.getByRole("button", { name: /добавить/i });

    await user.click(addBtn);

    const input = await screen.findByPlaceholderText("Новое увлечение");

    const saveButton = screen.getByRole("button", { name: /сохранить/i });
    expect(saveButton).toBeVisible();
    expect(saveButton).toBeDisabled();

    await userEvent.type(input, "Игры");
    expect(saveButton).toBeEnabled();

    await userEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(
        listItems.length + 1
      );
      expect(screen.getByText("Игры")).toBeInTheDocument();
    });

    expect(
      screen.queryByPlaceholderText("Новое увлечение")
    ).not.toBeInTheDocument();
  });

  test("Кнопки содержат иконки", () => {
    const deleteBtn = screen.getByRole("button", { name: /удалить/i });
    const trashIcon = within(deleteBtn).getByTestId("trash-icon");
    expect(trashIcon).toBeVisible();

    const editBtn = screen.getByRole("button", { name: /редактировать/i });
    const editIcon = within(editBtn).getByTestId("edit-icon");
    expect(editIcon).toBeVisible();

    const addBtn = screen.getByRole("button", { name: /добавить/i });
    const plusIcon = within(addBtn).getByTestId("plus-icon");
    expect(plusIcon).toBeVisible();
  });
});
