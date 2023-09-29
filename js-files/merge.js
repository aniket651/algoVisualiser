let mergeDelay


const merge = (bars,l,r)=>{

    let pt1 = l,pt2 = l+ (r-l)/2 + 1;
    let arr = []
    while((pt1 <= l+ (r-l)/2)  && (pt2<=r)){
        if(bars[pt1].clientHeight <= bars[pt2].clientHeight){
            arr.push(bars[pt1].clientHeight);
            pt1++;
        }
        else{
            arr.push(bars[pt2].clientHeight);
            pt2++;
        }
    }
    while(pt1<=l+ (r-l)/2){
        arr.push(bars[pt1].clientHeight);
        pt1++;
    }
    while(pt2<=r){
        arr.push(bars[pt2].clientHeight);
        pt2++;
    }
    for(let i = l;i<=r;i++){
        let s = (arr[i]).toString() + "px";
        bar.style.height = s 
    }
    return;
}


const mergeSort = async(bars,l,r)=>{

    if(l>r) return;

    await mergeSort(bars,l,l + (r-l)/2);
    await mergeSort(bars,l+(r-l)/2+1,r);
    await merge(bars,l,r);
    return;
}



const startMergeSorting = async()=>{
    mergeButton.classList.add("colorTheBottom");

    let bars = document.getElementsByClassName("bar");
    const sizeRadio = document.getElementsByClassName("sorting-speed")
    const disablenow = document.getElementsByClassName("sorting-disable")
    for(const i of disablenow){
        i.setAttribute('disabled','')
    }
    for(const i of sizeRadio){
        if(i.checked){
            mergeDelay = i.value
        }
    }

    await mergeSort(bars,0,bars.length -1);
    for(const i of disablenow){
        i.removeAttribute("disabled")
    }
    mergeButton.classList.remove("colorTheBottom");
    return;
}




let mergeSpeedButtons = document.getElementsByClassName("sorting-speed")
for (const i of mergeSpeedButtons) {
    i.addEventListener("click", () => {
        mergeDelay = i.value
    })
}
const mergeButton = document.getElementById("mergeSort")
mergeButton.addEventListener("click", startMergeSorting);