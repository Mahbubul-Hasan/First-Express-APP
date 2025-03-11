export const capitalize = (str: string): string => {
    if (!str) return str; // Handle empty string
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const toSlug = (str: string): string => {
    if (!str) return "";
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "") // Remove special characters
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-+/g, "-"); // Remove consecutive hyphens
};
