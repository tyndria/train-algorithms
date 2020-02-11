/*
There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.
*/


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

const GREY = 'grey';
const BLACK = 'black';

var findOrder = function(numCourses, prerequisites) {
    if (prerequisites.length === 0) {
        return [...Array(numCourses).keys()];
    }
    
    const adjacentList = prerequisites.reduce((acc, edge) => {
        const [curr, prev] = edge;
        acc[prev] = [...(acc[prev] || []), curr];
        return acc;
    }, []);
    
    
    const stack = [];
    let hasCycle = false;
    const marks = {};
    
    const dfs = (x) => {
        marks[x] = GREY;
        
        if (adjacentList[x]) {
            for (let i = 0; i < adjacentList[x].length; i ++) {
                const vertice = adjacentList[x][i];

                if (marks[vertice] === GREY) {
                    hasCycle = true;
                    break;
                } else if (marks[vertice] !== BLACK) {
                    dfs(vertice);
                }
            }
        }
        
        marks[x] = BLACK;
        stack.push(x);
    };

    
    for (let i = 0; i < numCourses; i ++)  {
        if (marks[i] !== BLACK) {
             dfs(i);
        }
    }
    
    if (!hasCycle) {
        return stack.reverse();
    }
    return [];
};