var moments = document.getElementsByClassName("timeline_back")[0].children;
var amount = document.getElementsByClassName("timeline_back")[0].childElementCount;
var data_arr = []

// buttons
var left_button = document.getElementsByClassName("button_left")[0];
var right_button = document.getElementsByClassName("button_right")[0];

// is button available
var is_left;
var is_right;
// function is in run
var is_func = false;

function check_buttons() {
    is_right = ! data_arr[0] == 0;
    is_left = ! data_arr[amount - 1] == 0;
    //change colors
    if (!is_right) {
        left_button.style.background = 'gray';
    } else {
        left_button.style.background = 'rgba(100, 150, 200, 1)';
    }
    if (!is_left) {
        right_button.style.background = 'gray';
    } else {
        right_button.style.background = 'rgba(100, 150, 200, 1)';
    }
}

function preps() {
    for (let i=0; i<amount; i++) {
        data_arr.push(i);
    }
    check_buttons();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function move_left() {
    let steps = [];
    if (!(is_func) && is_left) {
        is_func = true;
        for (let i=0; i<amount; i++) {
            steps[i] = 1800 * data_arr[i] + 50;
        }
        for (let c=0; c<=17; c++) {
            for (let i=0; i<amount; i++) {
                steps[i] -= 100;
                moments[i].style.left = (steps[i] + 'px');
            }
            await sleep(1);
        }
        for (let i=0; i<amount; i++) {
            data_arr[i] -= 1;
        }
        is_func = false;
    }
    check_buttons();
}

async function move_right() {
    let steps = [];
    if (!(is_func) && is_right) {
        is_func = true;
        for (let i=0; i<amount; i++) {
            steps[i] = 1800 * data_arr[i] + 50;
        }
        for (let c=0; c<=17; c++) {
            for (let i=0; i<amount; i++) {
                steps[i] += 100;
                moments[i].style.left = (steps[i] + 'px');
            }
            await sleep(1);
        }
        for (let i=0; i<amount; i++) {
            data_arr[i] += 1;
        }
        is_func = false;
    }
    check_buttons();
}

preps();