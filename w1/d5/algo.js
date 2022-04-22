var fruit1 = 'apples';
var fruit2 = "oranges";

var temp = fruit1
fruit1 = fruit2
fruit2 = temp





// algo #1

function reverse(arr) {
    for(var i=0; i<arr.length/2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
}

arr1 = [1, 2, 3, 4, 5, 6];
reverse(arr1);
console.log(arr1);

// var x = ["a", "b", "c", "d", "e"];

// function reverse(arr) {
//     var count = arr.length-1;
//     var temp = [];
//     while (count >= 0) {
//     temp.push
//     }
// }
