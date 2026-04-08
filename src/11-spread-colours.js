
const primaryColors = {
    red: "red-hexcode",
    blue: "blue"
};

const secondaryColors = {
    grey: "grey",
    black: "black"
};

const allColors = {
    // use spread operator here
    ...primaryColors,
    ...secondaryColors,
    // add getColor function that takes 1 param of color and returns color
    getColor(color) {
        return this[color];
    }
};

// add getColor function that takes 1 param of color and returns color
// const getColor = (color) => {
//     return allColors[color];
// }

console.log(allColors.getColor("red"));

