import { expect, test, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/vue";
import DrinkView from "../src/components/DrinkView.vue";

const drink = {
  strDrink: "margarita",
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
  strInstructions:
    "Rub the rim of the glass with the lime slice to make the salt stick to it.",
  idDrink: "11007",
  strCategory: "Ordinary Drink",
  strAlcoholic: "Alcoholic",
  strGlass: "Cocktail glass",
};

afterEach(async () => {
  cleanup();
});

test("renders cocktail name", async () => {
  render(DrinkView, {
    props: {
      drink,
    },
  });

  expect(screen.queryByText("margarita")).toBeTruthy();
});

test("renders cocktail image", async () => {
  render(DrinkView, {
    props: {
      drink,
    },
  });

  const image = screen.getByRole("img");
  expect(image.getAttribute("src")).toBe(drink.strDrinkThumb);
  expect(image.getAttribute("alt")).toBe(drink.strDrink);
});

test("renders cocktail instructions", async () => {
  render(DrinkView, {
    props: {
      drink,
    },
  });

  expect(screen.queryByText(drink.strInstructions)).toBeTruthy();
});
