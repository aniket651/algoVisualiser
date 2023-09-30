let mergeDelay

let mergedArr = [];

const merge = async(l,r)=>{
    let mid = l + Math.floor((r-l)/2);
    let pt1 = l,pt2 = mid + 1;
    let arr = []

    while(pt1 <= mid  && (pt2<=r)){
        if(mergedArr[pt1] <= mergedArr[pt2]){
            arr.push(mergedArr[pt1]);
            pt1 = pt1 + 1;
        }
        else{
            arr.push(mergedArr[pt2]);
            pt2 = pt2 + 1;
        }
    }
    while(pt1<=mid){
        arr.push(mergedArr[pt1]);
        pt1 = pt1 + 1;
    }
    while(pt2<=r){
        arr.push(mergedArr[pt2]);
        pt2 = pt2 + 1;
    }
    for(let i = l;i<=r;i++){
        mergedArr[i] = arr[i-l];
    }

    return;
}

const changeHeight = (bars,l,r)=>{
    for(let i = l;i<=r;i++){
        bars[i].style.height = mergedArr[i]+"px";
    }
    return;
}

const changeColor1 = async(bars,l,r)=>{
    for(let i = l;i<=r;i++){
        bars[i].style.backgroundColor = "yellow";
    }
    await new Promise(resolve => setTimeout(resolve, mergeDelay));
    return;
}

const changeColor2 = (bars,l,r)=>{
    for(let i = l;i<=r;i++){
        bars[i].style.backgroundColor = "white";
    }
    return;
}

const mergeSort = async(bars,l,r)=>{

    if(l>=r) return;
    // await changeColor1(bars,l,r);
    let md = l + Math.floor((r-l)/2);
    await mergeSort(bars,l,md);
    await mergeSort(bars,md+1,r);
    await changeColor1(bars,l,r);
    await merge(l,r);
    await changeHeight(bars,l,r);
    await changeColor2(bars,l,r);
    await new Promise(resolve => setTimeout(resolve, mergeDelay));
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
    for(let i = 0;i<bars.length;i++){
        mergedArr.push(bars[i].clientHeight);
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