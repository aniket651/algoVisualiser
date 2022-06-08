let insertionDelay
const startIntertionSort = async()=>{
    const bars = document.getElementsByClassName("bar")
    const sizeRadio = document.getElementsByClassName("sorting-speed")
    for(const i of sizeRadio){
        if(i.checked){
            insertionDelay = i.value
        }
    }
    const disablenow = document.getElementsByClassName("sorting-disable")
    for(const i of disablenow){
        i.setAttribute('disabled','')
    }
    for(let i = 1;i<bars.length;i++){
        const e1 = bars[i];
        for(let j=i-1;j>=0;j--){
            bars[i].style.backgroundColor = "yellow"
            bars[j].style.backgroundColor = "red"
            bars[j+1].style.backgroundColor = "red"

            let h1 = bars[j].clientHeight
            let h2 = bars[j+1].clientHeight
            await new Promise(resolve => setTimeout(resolve, insertionDelay));
            if(h1 > h2){
                bars[j].style.height = h2.toString()+"px"
                bars[j+1].style.height = h1.toString()+"px"
            }
            bars[j].style.backgroundColor = "white"
            bars[j+1].style.backgroundColor = "white"
            if(h1<=h2){
                break;
            }
        }
        await new Promise(resolve => setTimeout(resolve, insertionDelay));

        e1.style.backgroundColor = "white"
        await new Promise(resolve => setTimeout(resolve, insertionDelay));

    }
    for(const i of disablenow){
        i.removeAttribute("disabled")
    }
}

let insertionSpeedButtons = document.getElementsByClassName("sorting-speed")
for (const i of insertionSpeedButtons) {
    i.addEventListener("click", () => {
        insertionDelay = i.value
    })
}
document.getElementById("intertionSort").addEventListener("click",startIntertionSort)