/**
There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
 */


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {  
    if (prerequisites.length == 0) {
        return true
    }
    
    const adjacentList = prerequisites.reduce((acc, edge) => {
        const [curr, prev] = edge
        if (acc[prev]) {
            acc[prev] = [...acc[prev], curr]
        } else {
            acc[prev] = [curr]
        }
        return acc
    }, [])
    
    const marks = {}
    
    hasCycle = false
    const dfs = (x) => {
        marks[x] = 'grey'
        
        if (adjacentList[x]) {
            for (let i = 0; i < adjacentList[x].length; i ++) {
                const vertice = adjacentList[x][i]

                if (marks[vertice] === 'grey') {
                    hasCycle = true
                } else if (marks[vertice] !== 'black') {
                    dfs(vertice)
                }
            }
        }
        marks[x] = 'black'
    }

    for (let i = 0; i < numCourses; i ++)  {
        dfs(i)
    }

    return !hasCycle
};
