let hereWeGoAgain = () => {
    const delll = document.getElementById("barArea");
    while (delll.hasChildNodes()) {
        delll.removeChild(delll.firstChild);
    }
    let arr = []
    let n
    const sizeRadio = document.getElementsByClassName("array-size")
    for(const i of sizeRadio){
        if(i.checked){
            n = i.value
        }
    }
    for (let index = 0; index < n; index++) {
        arr.push(Math.floor(100 * Math.random() + 1))
    }
    for (let index = 0; index < n; index++) {
        const bar = document.createElement('div')
        bar.classList.add("bar")
        let s = (arr[index] * 3).toString() + "px";
        bar.style.height = s
        bar.style.width = (Math.floor((25/n)*10)).toString()+"px"
        document.getElementById("barArea").appendChild(bar);
    }
}
const sizebuttons = document.getElementsByClassName("array-size")
for(const i of sizebuttons){
    i.addEventListener("click",hereWeGoAgain)
}
const newArrayButton = document.getElementById("newArray");
newArrayButton.addEventListener("click",hereWeGoAgain);