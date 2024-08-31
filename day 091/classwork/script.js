const personOne = {
    name: "Luka",
    lastname: "Tskhvaradze",
    printInfo(){
        console.log(this.name, this.lastname);
    }
}

const manualAssign = (changeObj, ...objArr) => {
    objArr.forEach((copyObj) => {
        for(const key in copyObj){
            changeObj[key] = copyObj[key]
        }
    })
    return changeObj
}

const personTwo = manualAssign({name: "Gio", money: 0}, personOne, {money: 500});

console.log(personTwo);