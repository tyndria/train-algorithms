// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const oldColor = image[sr][sc];
    
    if (oldColor === newColor) {
        return image;
    }

    const recurse = (i, j) => {
        image[i][j] = newColor;

        if (i > 0 && image[i - 1][j] === oldColor) {
            recurse(i - 1, j);
        }

        if (i < image.length - 1 && image[i + 1][j] === oldColor) {
            recurse(i + 1, j);
        }

        if (j > 0 && image[i][j - 1] === oldColor) {
            recurse(i, j - 1);
        }

        if (i < image[i].length  - 1 && image[i][j + 1] === oldColor) {
            recurse(i, j + 1);
        }
    };

    recurse(sr, sc);

    return image;
};