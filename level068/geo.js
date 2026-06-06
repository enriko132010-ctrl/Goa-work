export const products = ["wine", "food", "fruit"];

export function exportProducts() {
  return "Georgia exports: " + products.join(", ");
}
