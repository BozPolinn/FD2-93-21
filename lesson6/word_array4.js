// const inputArray = ["ЛУЖА","МУЗА","ЛИРА","МЕХА","ЛИГА","ТАРА","ЛИПА","ТУРА","ПАРК","ЛОЖЬ","ЛУПА","ПЛОТ","МУРА","ПАУК",
//     "ПАУТ","ПЛУТ","ЛОЖА","СЛОТ","ПАРА"];
//
// function compareUnits(input, output) {
//     let counter = 0;
//     for (let j = 0; j < input.length; j++) {
//         if (input[j] !== output[j]) {
//             counter = counter + 1;
//         }
//     }
//     return counter;
// }
//
// function nextStep(input, array, output) {
//     let variants = [];
//     for (let i = 0; i < array.length; i++) {
//         if (compareUnits(input, array[i]) === 1) {
//             variants.push(array[i]);
//         }
//     }
//     if (variants[0] === undefined) {
//         return null;
//     }
//     console.log(variants);
//
//     for (let i = 0; i < variants.length; i++) {
//         if (variants[i] === output) {
//             return [variants[i], output];
//         } else {
//             let newVariants = [];
//             for (let j = 0; j < variants.length; j++) {
//                 if (variants[i] !== variants[j]) {
//
//                 }
//             }
//             nextStep(variants[i], newVariants, output)
//         }
//     }
//
//
//
// }
//
// console.log(nextStep('ЛИСА', inputArray, 'ЛОСЬ'));

const graph = {
    vertices: [1, 2, 3, 4, 5, 6],
    edges: [[1, 6],[6, 5],[5, 4],[1, 3],[1, 2],[2, 3],[3, 4],[2, 4],[6, 3]]
};

function implementAlgoritm(graph, input, output) {
    function getNeighbours(graph, input) {
        let neighbourArr = [];
        for (let i = 0; i < graph.edges.length; i++) {
            if (graph.edges[i].includes(input)) {
                for (let j = 0; j < graph.edges[i].length; j++) {
                    if (graph.edges[i][j] !== input) {
                        neighbourArr.push(graph.edges[i][j]);
                    }
                }
            }

        }
        return neighbourArr;
    }

    let marks = {};
    for (let i = 0; i < graph.vertices.length; i++) {
        let unit = graph.vertices[i];
        if (unit !== input) {
            marks[unit] = Number.MAX_VALUE;
        } else {
            marks[unit] = 0;
        }
    }
    console.log(marks);

    function visitNeighbours(input, graph) {
        let visited = [];

        function getNeighboursMarks(input) {
            let neighbours = getNeighbours(graph, input);
            console.log(input, neighbours);
            for (let i = 0; i < neighbours.length; i++) {
                visited.push(neighbours[i]);
                let elem = neighbours[i];
                marks[elem] = marks[input] + 1;

                if (marks[elem] > (marks[input] + 1)) {
                    marks[elem] = marks[input] + 1;
                }
                console.log(visited);
                console.log(elem);
                console.log(marks);
                // getNeighNeighbours(elem);
            }

            // function getNeighNeighbours(neigh) {
            //     if (!neighbours.includes(neigh)) {
            //         getNeighboursMarks(neigh);
            //     } else {
            //         return
            //     }
            //     console.log(visited);
            //     console.log(marks);
            // }
        }

        getNeighboursMarks(input);
    }

    visitNeighbours(input, graph);
}
console.log(implementAlgoritm(graph, 1, 5));