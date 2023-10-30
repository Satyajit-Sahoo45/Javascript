
const btn = document.querySelector('.Increment_btn')
const btnPress = document.querySelector('.Increment_pressed')
const count = document.querySelector('.Increment_count')

var pressedCount = 0
var triggerCount = 0

// using Loadash library
// const debouncedCount = _.debounce(() => {
//     count.innerHTML = ++triggerCount;
// }, 800)


// create Debounce custom implementation

const myDebounce = (callback, delay) => {
    let timer;  // to measure the time after every single keystroke or buttonpress

    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    }
}


const debouncedCount = myDebounce(() => {
    count.innerHTML = ++triggerCount;
}, 800)

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    debouncedCount();
})