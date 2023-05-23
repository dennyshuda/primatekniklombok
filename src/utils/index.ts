export function formatMoney(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(price)
    .replace(",00", "");
}
