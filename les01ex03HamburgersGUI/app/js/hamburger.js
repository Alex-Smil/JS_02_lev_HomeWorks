// Есть ли какой-нибудь способ разбить этот скрипт на разные модули
// и потом связать их через какой-нибудь include или @import, 
// что бы эти скрипты  видели переменные у друг друга? 


// ************** DOM ****************
window.onload = init;

function init() {
    let creatingHambBtn = document.querySelector(".creatHambBtn");
    creatingHambBtn.addEventListener('click', createNewEmptyHamb);

    // ********** add/remove cutlets **********
    let cotletBtns = document.querySelectorAll(".cutlets__unit");
    cotletBtns.forEach(cotlet => {
        cotlet.addEventListener('click', initAddCutlet)
    });

    let removeCutletBtns = document.querySelectorAll(".removeCutlets__unit");
    removeCutletBtns.forEach(cotlet => {
        cotlet.addEventListener('click', initRemoveCutlet)
    });

    // ********** add/remove STUFF **********
    let stuffBtns = document.querySelectorAll(".stuff__unit");
    stuffBtns.forEach(stuff => {
        stuff.addEventListener('click', initAddStuff)
    });

    let removeStuffBtns = document.querySelectorAll(".removeStuff__unit");
    removeStuffBtns.forEach(stuff => {
        stuff.addEventListener('click', initRemoveStuff)
    });

    // ********** add/remove TOPING **********
    let topingBtns = document.querySelectorAll(".toping__unit");
    topingBtns.forEach(toping => {
        toping.addEventListener('click', initAddToping)
    });

    let removeTopingBtns = document.querySelectorAll(".removeToping__unit");
    removeTopingBtns.forEach(toping => {
        toping.addEventListener('click', initRemoveToping)
    });
}

let hamb = []; // Глобальная переменная массив, для одного едниственного Гамбургера

// ************** createNewEmptyHamb *************
function createNewEmptyHamb() {
    if(hamb.length === 0) {
        return hamb[0] = new Hamburger();
    } else {
        console.log('Вы уже создали булку без начинки');
    }
}

// *************** initAddCutlet ****************
function initAddCutlet(eventObj) {
    if (hamb[0] !== undefined) {
        let cutlet = eventObj.target.id;
        hamb[0].addCutlet(CUTLETS[cutlet]);
    } else {
        console.log("Сначала создайте булку!");
    }
}

// *************** initRemoveCutlet ****************
function initRemoveCutlet(eventObj) {
    if (hamb[0] !== undefined) {
        let cutlet = eventObj.target.id;
        cutlet = cutlet.replace(new RegExp('-\\w+'), "");
        hamb[0].removeCutlet(CUTLETS[cutlet]);
    } else {
        console.log("Сначала создайте булку!");
    }
}

// *************** initAddStuff ****************
function initAddStuff(eventObj) {
    if (hamb[0] !== undefined) {
        let stuff = eventObj.target.id;
        hamb[0].addStuff(STUFFS[stuff]);
    } else {
        console.log("Сначала создайте булку!");
    }
}

// *************** initRemoveStuff ****************
function initRemoveStuff(eventObj) {
    if (hamb[0] !== undefined) {
        let stuff = eventObj.target.id;
        stuff = stuff.replace(new RegExp('-\\w+'), "");
        hamb[0].removeStuff(STUFFS[stuff]);
    } else {
        console.log("Сначала создайте булку!");
    }
}

// *************** initAddToping ****************
function initAddToping(eventObj) {
    if (hamb[0] !== undefined) {
        let toping = eventObj.target.id;
        hamb[0].addToping(TOPINGS[toping]);
    } else {
        console.log("Сначала создайте булку!");
    }
}

// *************** initRemoveToping ****************
function initRemoveToping(eventObj) {
    if (hamb[0] !== undefined) {
        let toping = eventObj.target.id;
        toping = toping.replace(new RegExp('-\\w+'), "");
        hamb[0].removeToping(TOPINGS[toping]);
    } else {
        console.log("Сначала создайте булку!");
    }
}

// ******************* END OF DOM ********************


// ******************* Логика ********************

// ********** Объекты хранят начинки *************
const CUTLETS = {
    CUTLET_SMALL: { name: "cutlet_small", price: 50, callories: 75 },
    CUTLET_BIG: { name: "cutlet_big", price: 75, callories: 100 }
};

const STUFFS = {
    CHEESE_STUFF: { name: "cheese_stuff", price: 10, callories: 25 },
    SALAD_STUFF: { name: "salad_stuff", price: 15, callories: 35 },
    POTATO_STUFF: { name: "potato_stuff", price: 20, callories: 40 },
    MAYO_STUFF: { name: "mayo_stuff", price: 25, callories: 45 },
    SPICE_STUFF: { name: "spice_stuff", price: 30, callories: 50 }
}

const TOPINGS = {
    ONION_TOP: { name: "onion_top", price: 20, callories: 25 },
    SESAM_TOP: { name: "sesam_top", price: 20, callories: 50 } 
}

// ***** Конструктор класса Hamburger *******
function Hamburger() {
    this.cutlets = [];
    this.stuffs = [];
    this.topings = [];
    this.price = 0;
    this.callories = 0;
    console.log("Вы создали гамбургер без начинки");
}

// ******* Прототипные методы класса Hamburger *****

// ******* Расчет стоимости Гамбургера *************
Hamburger.prototype.calculatePrice = function() {
    let cutletPrice = 0;
    this.cutlets.forEach(cutlet => {
        cutletPrice += cutlet.price;
    });
            
    let stuffPrice = 0;
    this.stuffs.forEach(stuff => {
        stuffPrice += stuff.price;
    });

    let topingsPrice = 0;
    this.topings.forEach(toping => {
        topingsPrice += toping.price;
    });
            
    return this.price = cutletPrice + stuffPrice + topingsPrice;
};

// ********** Расчет ккалл Гамбургера ***********
Hamburger.prototype.calculateCallories = function() {
    let cutletsCallories = 0;
    this.cutlets.forEach(cutlet => {
        cutletsCallories += cutlet.callories;
    });

    let stuffCallories = 0;
    this.stuffs.forEach(stuff => {
        stuffCallories += stuff.callories;
    });

    let topingsCallories = 0;
    this.topings.forEach(toping => {
        topingsCallories += toping.callories;
    });

    return this.callories = cutletsCallories + stuffCallories + topingsCallories;
};

// ************* add Cutlet ***************
Hamburger.prototype.addCutlet = function(cutlet) {
    let index = this.cutlets.indexOf(cutlet);
    if(index === -1  && this.cutlets.length === 0) {
        this.cutlets.push(cutlet);
        console.log(
            "Вы добавили: " + cutlet.name + "\n" +
            "цена: " + this.calculatePrice() +
            " ккалл: " + this.calculateCallories()
        );
    } else {
        console.log("Нельзя добавить несколько котлет в одну булку!");
    }
};

// ************* remove Cutlet ***************
Hamburger.prototype.removeCutlet = function(cutlet) {
    let index = this.cutlets.indexOf(cutlet);
    if(index === -1) {
        console.log(cutlet.name + " ранее не добавляли!");
    } else {
        this.cutlets.splice(index, 1);
        console.log(
            "Вы удалили: " + cutlet.name + "\n" +
            "цена: " + this.calculatePrice() +
            " ккалл: " + this.calculateCallories()
        );
    } 
}

// ************ add Stuff ***************
Hamburger.prototype.addStuff = function(stuff) {
    let index = this.stuffs.indexOf(stuff);
    if(index === -1) {
        this.stuffs.push(stuff);
        console.log(
            "Вы добавили: " + stuff.name + "\n" +
            "цена: " + this.calculatePrice() +
            " ккалл: " + this.calculateCallories()
        );
    } else {
        console.log("Такой sruff уже есть");
    }
};

// ************ remove Stuff ***************
Hamburger.prototype.removeStuff = function(stuff) {
    let index = this.stuffs.indexOf(stuff);
    if(index === -1) {
        console.log(stuff.name + " ранее не добавляли!");
    } else {
        this.stuffs.splice(index, 1);
        console.log(
            "Вы удалили: " + stuff.name + "\n" +
            "цена: " + this.calculatePrice() +
            " ккалл: " + this.calculateCallories()
        );
    } 
};

// ************** add Toping ***********************
Hamburger.prototype.addToping = function(top) {
    let index = this.topings.indexOf(top);
    if(index === -1) {
        this.topings.push(top);
        console.log(
            "Вы добавили: " + top.name + "\n" +
            "цена: " + this.calculatePrice() +
            " ккалл: " + this.calculateCallories()
        );
    } else {
        console.log("Такой уже есть");
    }
};

// ************** remove Toping ***********************
Hamburger.prototype.removeToping = function(top) {
    let index = this.topings.indexOf(top);
    if(index === -1) {
        console.log(top.name + " ранее не добавляли!");
    } else {
        this.topings.splice(index, 1);
        console.log(
            "Вы удалили: " + top.name + "\n" +
            "цена: " + this.calculatePrice() +
            " ккалл: " + this.calculateCallories()
        );
    }
};







