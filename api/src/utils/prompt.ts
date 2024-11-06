import { Product } from "../entities/Product.entity";
interface RecipeQuery {
  recipequery?: string;
}

export const getPrompt = (currentStock: Product[], query: string) => {
  const productNames = currentStock.map((product) => product.name).join(", ");

  return `
Reset your memory and start with a clean history.\n\n
Soy el dueño de un minimarket local. Este es mi inventario de productos: ${productNames}.

Mi cliente quiere preparar "${query}", dame los ingredientes básicos para prepararlo, no quiero cantidades solamente nombres.\n

Tu respuesta debe contener 3 arrays en formato JavaScript:\n

1. Un array con todos los ingredientes necesarios para preparar el plato.\n
2. Un array con los ingredientes que yo poseo en mi inventario y que también están en el primer array.\n
3. Un array con las instrucciones de preparación, resumidas en un **máximo de 5 pasos**.\n
\n
Formato de tu respuesta:\n
\n
allIngredients\n
["aquí van todos los ingredientes, cada item entre doble comillas"]\n
\n
owned\n
["aquí van los ingredientes que yo tengo en mi inventario y que también aparecen en el array anterior, cada item entre doble comillas"]\n
\n
instructions\n
["aquí van las instrucciones de preparación, cada item entre doble comillas"]
`;
};

export const getIngredientsPrompt = (query: RecipeQuery) => {
  return `
Soy el dueño de un minimarket local.\n
\n
Mi cliente quiere preparar "${query.recipequery}". ¿Qué ingredientes necesitaría para prepararlo?\n
\n
Tu respuesta debe contener 2 arrays en formato JavaScript:\n
\n
1. Un array con todos los ingredientes necesarios para preparar el plato.\n
2. Un array con las instrucciones de preparación, resumidas en un máximo de 5 pasos.\n
\n
Formato de tu respuesta:\n
\n
allIngredients\n
["aquí colocarás los ingredientes, cada item entre doble comillas"]\n
\n
instructions\n
["aquí van las instrucciones de preparación, cada item entre doble comillas"]
`
}

