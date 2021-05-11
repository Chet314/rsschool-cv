const listWorks = document.querySelector("#works");


const positionCards = () => {
    const gridAreas = getComputedStyle(listWorks, null).gridTemplateAreas;
    const array = gridAreas.split(/[\"\s\"]/gm).filter(el => el !== "");
        array.push(array.shift());
        const string1 = `${array[0]} ${array[1]} ${array[2]} ${array[3]}`;
        return`${"'"}${string1}${"'"}`;
}

(function(){

    (function loop(){
    const string = positionCards();
    listWorks.style.gridTemplateAreas = string;
    setTimeout(loop, 5000)
    })();

})();