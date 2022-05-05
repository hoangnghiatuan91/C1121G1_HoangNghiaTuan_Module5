let money = 10000;
const buyACar = (car: any) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy " + car);
            } else {
                reject("do not enough money")
            }
        }, 100);
    }))
}
money = 1000001;
const promise = buyACar("Mescedes").then(value => {
    console.log(value);
},error =>{
    console.log(error)
})