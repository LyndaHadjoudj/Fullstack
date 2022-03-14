function Supperimer(arr, elm) {
    var a = [];
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        if (elm != arr[i]) {
            a[j] = arr[i];
            j++;
        }
    }
    return a;
}
var arr = [1, 2, 3, 4, 5];
arr = lol(arr, 3);
console.log(arr);

function D_Duplicate(nums) {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }
        nums[count] = nums[i];
        count++;
    }
    nums.length = count;
    console.log(nums);

}