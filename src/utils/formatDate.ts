export const formatDate = (date: Date, checkIfPresent: boolean = false) => {
    const f = (d: Date) =>
        d.toLocaleDateString("en-GB", {
            month: "short",
            year: "numeric",
        });

    const now = f(new Date());
    const formattedDate = f(date);
    return checkIfPresent && formattedDate === now ? "Present" : formattedDate;
};
