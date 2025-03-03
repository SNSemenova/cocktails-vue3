export const getCocktail = async (id: string) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`,
  );
  const data = await response.json();
  return data;
};
