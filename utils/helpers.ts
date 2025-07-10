import * as fs from "node:fs";

/**
 * Returns the current quarter in the format 'Q1 YYYY (Jan - Mar)', 'Q2 YYYY (Apr - Jun)', 'Q3 YYYY (Jul - Sep)', or 'Q4 YYYY (Oct - Dec)'.
 *
 * @throws {Error} If the current month is not within the range of 0-11.
 * @returns {string} The current quarter.
 */
export function getCurrentQuarter(): string {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    switch (true) {
        case (month >= 0 && month <= 2):
            return `Q1 ${year} (Jan - Mar)`;
        case (month >= 3 && month <= 5):
            return `Q2 ${year} (Apr - Jun)`;
        case (month >= 6 && month <= 8):
            return `Q3 ${year} (Jul - Sep)`;
        case (month >= 9 && month <= 11):
            return `Q4 ${year} (Oct - Dec)`;
        default:
            throw new Error("Invalid month value");
    }
}

/**
 * Returns the current timestamp in ISO format.
 * @returns {string} The current timestamp.
 */
export function getCurrentTimestamp(): string {
    return new Date().toISOString();
}

/**
 * Generates a random alphanumeric string of the specified length.
 *
 * @param {number} length - The length of the random string.
 * @returns {string} A randomly generated alphanumeric string.
 */
export function generateRandomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export function getCurrentMonth(): string {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[new Date().getMonth()];
}

export function deleteFileIfExists(filePath: string) {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
}
