let quickDelay

// let WaitHere = async() => {
//     return await new Promise(resolve => setTimeout(resolve, quickDelay));
// }

let partition = async (bars,l,r) => {//async
    if(l>=r){
        return;
    }
    let pivot = bars[r].clientHeight;
    let i = l-1;
    bars[l].style.backgroundColor = "yellow"
    bars[r].style.backgroundColor = "red"
    await new Promise(resolve => setTimeout(resolve, quickDelay));//#
    for(let j = l;j<=r-1;j++){
        bars[j].style.backgroundColor = "violet"
        // WaitHere();
        await new Promise(resolve => setTimeout(resolve, quickDelay));//#
        if(bars[j].clientHeight < pivot){
            i++;
            await swap(bars[j],bars[i]);//# add await infront
        }
        bars[j].style.backgroundColor = "springgreen"
        bars[l].style.backgroundColor = "yellow"
        bars[r].style.backgroundColor = "red"


    }
    // await new Promise(resolve => setTimeout(resolve, quickDelay));
    await swap(bars[i+1],bars[r])
    bars[l].style.backgroundColor = "springgreen"
    bars[i+1].style.backgroundColor = "white"
    return i+1
}

let quickSort = async (bars,l,r)=>{//async
    if(r<=l){
        return;
    }
    if(l<r){
        let pi = await partition(bars,l,r);//add await infront of partition
        bars[pi].style.backgroundColor = "white"
        await quickSort(bars,l,pi-1);
        for(let i=l;i<pi;i++){
            bars[i].style.backgroundColor = "white"
        }
        await quickSort(bars,pi+1,r);
        for(let i=pi+1;i<=r;i++){
            bars[i].style.backgroundColor = "white"
        }
        return;
    }
    // bars[l].style.backgroundColor = "white"
    return
}



const startQuickSorting = async () => {//async
    quickButton.classList.add("colorTheBottom");

    let bars = document.getElementsByClassName("bar");
    const sizeRadio = document.getElementsByClassName("sorting-speed")
    const disablenow = document.getElementsByClassName("sorting-disable")
    for(const i of disablenow){
        i.setAttribute('disabled','')
    }
    for(const i of sizeRadio){
        if(i.checked){
            quickDelay = i.value
        }
    }

    await quickSort(bars,0,bars.length -1);
    for(const i of disablenow){
        i.removeAttribute("disabled")
    }
    quickButton.classList.remove("colorTheBottom");
    return;
}
const swap = async (e1,e2)=>{//async
    e1.style.backgroundColor = "sienna"
    e2.style.backgroundColor = "sienna"
    await new Promise(resolve => setTimeout(resolve, quickDelay));//#
    let h1 = e1.clientHeight;
    let h2 = e2.clientHeight;
    e1.style.height = h2.toString()+"px"
    e2.style.height = h1.toString()+"px"
    await new Promise(resolve => setTimeout(resolve, quickDelay));//#
    e1.style.backgroundColor = "springgreen"
    e2.style.backgroundColor = "springgreen"
    return
}
let quickSpeedButtons = document.getElementsByClassName("sorting-speed")
for (const i of quickSpeedButtons) {
    i.addEventListener("click", () => {
        quickDelay = i.value
    })
}
const quickButton = document.getElementById("quickSort")
quickButton.addEventListener("click", startQuickSorting);


