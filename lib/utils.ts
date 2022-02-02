export function dateFormat(date: string) {
  return new Date(date)
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .split(" ")
    .join(" ")
    .substr(0, 10);
}
