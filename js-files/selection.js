let selectionDelay
const startSelectionSorting = async () => {
    const sizeRadio = document.getElementsByClassName("sorting-speed")
    for (const i of sizeRadio) {
        if (i.checked) {
            selectionDelay = i.value
        }
    }
    const disablenow = document.getElementsByClassName("sorting-disable")
    for(const i of disablenow){
        i.setAttribute('disabled','')
    }
    const bars = document.getElementsByClassName("bar")
    for (let i = 0; i < bars.length; i++) {
        let e1 = bars[i];
        // const st1 = window.getComputedStyle("e1");
        let h1 = e1.clientHeight
        let minind = i;
        bars[i].style.backgroundColor = "yellow"
        for (let j = i + 1; j < bars.length; j++) {
            // const e2 = bars[j]
            bars[j].style.backgroundColor = "blue"
            await new Promise(resolve => setTimeout(resolve, selectionDelay));

            const h2 = bars[j].clientHeight
            if (h2 < bars[minind].clientHeight) {
                bars[minind].style.backgroundColor = "springgreen"
                minind = j
            }
            // await new Promise(resolve => setTimeout(() => {resolve(), selectionDelay(1000)}));
            bars[j].style.backgroundColor = "springgreen"
            bars[minind].style.backgroundColor = "red"
            await new Promise(resolve => setTimeout(resolve, selectionDelay));

        }
        bars[minind].style.backgroundColor = "springgreen"
        let h2 = bars[minind].clientHeight
        e1.style.height = h2.toString() + "px"
        const e2 = bars[minind];
        e2.style.height = h1.toString() + "px"
        bars[i].style.backgroundColor = "white"
    }
    for(const i of disablenow){
        i.removeAttribute("disabled")
    }
}

let selectionSpeedButtons = document.getElementsByClassName("sorting-speed")
for (const i of selectionSpeedButtons) {
    i.addEventListener("click", () => {
        selectionDelay = i.value
    })
}
const trigger = document.getElementById("selectionSort")
trigger.addEventListener("click", startSelectionSorting)