/**
 * JavaScript Assessment: Inverted Binomial Pattern
 * Goal: Print an inverted Pascal-style triangle
 */

function printInvertedPattern(rows) {
    // Outer loop: starts from the given number of rows down to 0
    for (let n = rows; n >= 0; n--) {
        let line = "";

        // 1. Add leading spaces for alignment
        // The number of spaces increases as n decreases
        for (let s = 0; s < rows - n; s++) {
            line += " ";
        }

        // 2. Calculate binomial coefficients for the current row
        let val = 1; 
        for (let k = 0; k <= n; k++) {
            line += val + " ";
            
            // Calculate the next coefficient: C(n, k+1) = C(n, k) * (n - k) / (k + 1)
            val = val * (n - k) / (k + 1);
        }

        console.log(line.trimEnd());
    }
}

// Execute the function for a 4th-degree starting row
printInvertedPattern(4);