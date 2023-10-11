<script>
/*    
expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        },
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5 ],
            "fuel": []
        }
    },
    "2023-04": {}
}
*/    
    
firstMonth = [ 22.11, 43.00, 11.72, 2.20, 36.29, 2.50, 19.00, 210.22 ];
thirdMonth = [ 10.20, 11.50, 2.50 ];
fouthMonth = [];

function mySort (a, b) {
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
    return 0
}
    
var expenses = firstMonth.concat(thirdMonth).concat(fouthMonth);
expenses.sort(mySort);

function get_median_of_first_week_expenses() {
    if ((expenses.length % 2) == 1) {
        return expenses[(expenses.length / 2) - 0.5]
    }
    if ((expenses.length % 2) != 1) {
        var A = expenses[(expenses.length / 2) - 1];
        var B = expenses[expenses.length / 2];
        return (A + B) / 2
    }
    return 0
}

get_median_of_first_week_expenses(expenses);
console.log(get_median_of_first_week_expenses(expenses));

</script>
