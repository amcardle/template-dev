import { fireEvent, render } from "@testing-library/svelte";
import { describe, expect, test } from "@jest/globals";
import Index from "../routes/index.svelte";
import { IndexKind } from "typescript";

test("example test", () => {
  expect(1 + 1).toEqual(2);
});

test("function in component", () => {
  const { component } = render(Index);
  expect(component.addition(1, 2)).toEqual(3);
});
