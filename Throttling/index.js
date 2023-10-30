

const btn = document.querySelector('.Increment_btn')
const btnPress = document.querySelector('.Increment_pressed')
const count = document.querySelector('.Increment_count')

var pressedCount = 0
var triggerCount = 0


// using Loadash library
// const start = new Date().getTime()
// const throttledCount = _.throttle(() => {
//     const now = new Date().getTime()
//     console.log(now - start)
//     count.innerHTML = ++triggerCount;
// }, 800)

// create throttle custom implementation

const myThrottle = (callback, delay) => {
    let last = 0; // 1100

    return (...args) => {
        let now = new Date().getTime();
        if (now - last < delay) return; // 2500 - 1100 = 1400
        last = now;
        return callback(...args);
    }
}

const throttledCount = myThrottle(() => {
    const now = new Date().getTime()
    console.log(now - start)
    count.innerHTML = ++triggerCount;
}, 800)


btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    throttledCount();
})