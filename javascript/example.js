var weekMap_obj ={
    1: "Monday",
    2:  "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
};
var weekMap_arr =[
     "Monday",
    "Tuesday",
   "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

var input= +prompt("enter"),
    result_obj = weekMap_obj[input],
    result_arr = weekMap_arr[input-1];
if(!result_obj){
    result_obj= "Surprise!"
}
console.log(result_obj);
console.log(result_arr);