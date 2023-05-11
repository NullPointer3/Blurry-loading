const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++
    if(load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = mapRange(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${mapRange(load, 0, 100, 30, 0)}px)`
}

function mapRange(value, inMin, inMax, outMin, outMax) {
    // Calculate the input range and output range sizes
    const inRange = inMax - inMin;
    const outRange = outMax - outMin;
  
    // Map the value to the output range
    const mappedValue = (value - inMin) * (outRange / inRange) + outMin;
  
    // Return the mapped value
    return mappedValue;
  }
  