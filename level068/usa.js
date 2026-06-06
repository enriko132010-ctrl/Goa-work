export const products = ["Cars", "Phones", "Computers"];

export function exportProducts() {
  return "USA exports: " + products.join(", ");
}
