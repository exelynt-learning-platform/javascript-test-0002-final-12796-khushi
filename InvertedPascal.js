function printInvertedPascal(rows) {
    // We store the full Pascal's Triangle first to easily invert it
    let triangle = [];

    for (let i = 0; i < rows; i++) {
        triangle[i] = [];
        triangle[i][0] = 1;
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle[i][i] = 1;
    }

    // Now print the triangle in reverse order
    for (let i = rows - 1; i >= 0; i--) {
        let rowOutput = "";

        // 1. Add leading spaces for alignment
        // The higher the index in the inversion, the more spaces needed
        for (let s = 0; s < (rows - 1 - i); s++) {
            rowOutput += " ";
        }

        // 2. Add the numbers from the pre-calculated triangle
        for (let j = 0; j <= i; j++) {
            rowOutput += triangle[i][j] + " ";
        }

        console.log(rowOutput);
    }
}

// Execute for 5 rows as per the requirement
printInvertedPascal(5);