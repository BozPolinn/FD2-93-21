const inputArray = ["ЛУЖА","МУЗА","ЛИРА","МЕХА","ЛИГА","ТАРА","ЛИПА","ТУРА","ПАРК","ЛОЖЬ","ЛУПА","ПЛОТ","МУРА","ПАУК",
    "ПАУТ","ПЛУТ","ЛОЖА","СЛОТ","ПАРА"];

function getWayFromInputToOutput(array, input, output) {
    // adds elements if they are not in array
    function addInputOutputToArray(array, input, output) {
        let newArr = [];
        Array.prototype.push.apply(newArr, array);
        if (!array.includes(input)) {
            newArr.push(input);
        }
        if (!array.includes(output)) {
            newArr.push(output);
        }
        return newArr;
    }
    // new Array with input and output
    let graph = addInputOutputToArray(array, input, output);
    // gets word pairs which differ in 1 symbol
    function getAllWordDistance(array) {
        let systemOfWordsRelations = {
            vertices : graph,
            edges : getElementOfArray(array)
        }
        //compares units and returns pairs with minimal difference
        function compareUnits(input, output) {
            let counter = 0;
            for (let j = 0; j < input.length; j++) {
                if (input[j] !== output[j]) {
                    counter = counter + 1;
                }
            }
            return counter;
        }
        // pushes these elements to edges
        function getElementOfArray(array) {
            let storage = [];
            for (let i = 0; i < array.length; i++) {
                for (let j = (i+1); j < array.length; j++) {
                    if (compareUnits(array[i], array[j]) === 1) {
                        storage.push([array[i], array[j]]);
                    }
                }
            }
            return storage;
        }
        return systemOfWordsRelations;
    }
    // creates new graph
    let newGraph = getAllWordDistance(graph, input, output);

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

        let way = {};
        for (let i = 0; i < graph.vertices.length; i++) {
            way[graph.vertices[i]] = [];
        }

        let visited = [];
        let queue = [input];
        while (queue.length > 0) {
            const current = queue.shift();
            const neighbours = getNeighbours(graph, current).filter(x => !visited.includes(x));

            for (let i = 0; i < neighbours.length; i++) {
                let neighbour = neighbours[i];
                if (marks[neighbour] > (marks[current] + 1)) {
                    marks[neighbour] = (marks[current] + 1);
                    way[neighbour] = [...way[current], current];
                }
            }
            Array.prototype.push.apply(queue, neighbours);
            visited.push(current);
        }
        let resultWay = [];
        for (let i = 0; i < way[output].length; i++) {
            resultWay.push(way[output][i]);
        }
        resultWay.push(output);
        return resultWay;
    }
    return implementAlgoritm(newGraph, input, output);
}

console.log(getWayFromInputToOutput(inputArray, 'ЛИСА', 'ЛОСЬ'));
console.log(getWayFromInputToOutput(inputArray, 'МУХА', 'СЛОН'));
