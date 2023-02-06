const {sum} = require("./string");
const {difference} = require("./string");
const {product} = require("./string");
const {quotient} = require("./string");
const {squareRoot} = require("./string");
const {max} = require("./string");

describe("Testing math functions", () => {

    test("should add two numbers together", () => {
        expect(sum(3,4)).toBe(7);
       
    });

    test("should subtract two numbers", () => {
        expect(difference(7,2)).toBe(5);
    })

    test("should multiply two numbers", () => {
        expect(product(5,5)).toBe(25);
    })

    test("should divide two numbers", () => {
        expect(quotient(10,2)).toBe(5);
    })

    test("should find square root of a number", () => {
        expect(squareRoot(100)).toBe(10);
    })

    test("should find the max of two numbers", () => {
        expect(max(150,50)).toBe(150);
     })
});