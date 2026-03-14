/**
 * Generates and prints an Inverted Pascal's Triangle.
 * @param {number} totalRows - The number of rows to generate.
 */
function printInvertedPascal(totalRows) {
    const triangle = [];

    // 1. Build the standard Pascal's Triangle
    for (let i = 0; i < totalRows; i++) {
        triangle[i] = [1]; // First element is always 1
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        if (i > 0) triangle[i].push(1); // Last element is always 1
    }

    // 2. Print the triangle in reverse (Inverted)
    for (let i = totalRows - 1; i >= 0; i--) {
        // Create leading indentation
        const indentation = " ".repeat(totalRows - 1 - i);
        
        // Join the array elements with a single space to avoid trailing spaces
        const rowContent = triangle[i].join(" ");
        
        console.log(indentation + rowContent);
    }
}

// Configuration: Define the requirement clearly
const ROWS_TO_PRINT = 5;
printInvertedPascal(ROWS_TO_PRINT);