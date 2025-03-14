export const randomNumber = (length = 4): number => {
    // Calculate the minimum and maximum values based on the length
    const min = Math.pow(10, length - 1); // e.g., 1000 for 4 digits
    const max = Math.pow(10, length) - 1; // e.g., 9999 for 4 digits

    // Generate a random number within the range
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
