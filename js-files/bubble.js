let bubbleDelay
const startBubbleSorting = async () => {
    let bars = document.getElementsByClassName("bar");
    const sizeRadio = document.getElementsByClassName("sorting-speed")
    for(const i of sizeRadio){
        if(i.checked){
            bubbleDelay = i.value
        }
    }
    const disablenow = document.getElementsByClassName("sorting-disable")
    for(const i of disablenow){
        i.setAttribute('disabled','')
    }
    for (let i = bars.length - 1; i >= 1; i = i - 1) {
        for (let j = 0; j < i; j++) {
            const e1 = bars[j];
            const e2 = bars[j + 1];
            e1.style.backgroundColor = "red"
            e2.style.backgroundColor = "red"
            let h1 = e1.clientHeight
            let h2 = e2.clientHeight
            console.log(h1)
            await new Promise(resolve => setTimeout(resolve, bubbleDelay));

            if (h2 < h1) {
                console.log("condition true")
                bars[j + 1].style.height = (h1).toString() + "px";
                bars[j].style.height = (h2).toString() + "px";
            }
            e1.style.backgroundColor = "springgreen"
            e2.style.backgroundColor = "springgreen"
            await new Promise(resolve => setTimeout(resolve, bubbleDelay));

        }
        bars[i].style.backgroundColor = "white"
        // const element = bars[i];
    }
    for(const i of disablenow){
        i.removeAttribute("disabled")
    }
}
let bubbleSpeedButtons = document.getElementsByClassName("sorting-speed")
for (const i of bubbleSpeedButtons) {
    i.addEventListener("click", () => {
        bubbleDelay = i.value
    })
}
const bubbleButton = document.getElementById("bubbleSort")
bubbleButton.addEventListener("click", startBubbleSorting);

