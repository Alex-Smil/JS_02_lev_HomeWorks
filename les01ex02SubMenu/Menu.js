function MenuWithSubMenus(myId, myClass, myItems) {
    this.id = myId;
    this.className = myClass;
    this.items = myItems;
}

MenuWithSubMenus.prototype.render = function () {
    var result = `<ul class="${this.className}" id="${this.id}">`;

    //Сами пункты меню
    for (var i = 0; i < this.items.length; i++){
        if(this.items[i] instanceof MenuItem) {
            result += this.items[i].renderItem();
        } else {
            result += this.items[i].render();
        }
    }

    result += '</ul>';
    return result;
};

//TODO: удаление меню
MenuWithSubMenus.prototype.remove = function () {
    //document
    let parent = document.getElementById(`${this.id}`).parentNode;
    parent.removeChild(document.getElementById(`${this.id}`));

    // Можно и так
    // document.getElementById(`${this.id}`).parentNode.removeChild(document.getElementById(`${this.id}`));
};