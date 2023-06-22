"use strict";
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
