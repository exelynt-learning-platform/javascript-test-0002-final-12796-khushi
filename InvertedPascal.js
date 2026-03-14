function printPattern(rows) {

    let triangle = [];

    // Step 1: Generate Pascal's Triangle
    for (let i = 0; i < rows; i++) {
        triangle[i] = [];
        triangle[i][0] = 1;

        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
        }

        triangle[i][i] = 1;
    }

    // Step 2: Print in reverse order
    for (let i = rows - 1; i >= 0; i--) {

        let row = "";

        // spacing
        for (let s = 0; s < rows - 1 - i; s++) {
            row += " ";
        }

        // numbers
        for (let j = 0; j <= i; j++) {
            row += triangle[i][j] + " ";
        }

        console.log(row.trim());
    }
}

// Run program
printPattern(5);