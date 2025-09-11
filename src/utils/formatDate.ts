export const formatDate = (date: Date | null) => {
  if (!date) {
    return "Present";
  }

  return date.toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });
};
