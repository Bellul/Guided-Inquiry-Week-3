
function exercise(task) {
    function workout() {
        return `Today's exercise: ${task}`
    }
    return workout
}

var run = exercise('running');
var swim = exercise('swimming');

console.log(run());
console.log(swim());