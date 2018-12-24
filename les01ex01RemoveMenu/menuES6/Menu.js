class Menu {
    constructor(myId, myClass, myItems)
    {
        this.id = myId;
        this.className = myClass;
        this.items = myItems;
    }

    render () {
        var result = `<ul class="${this.className}" id="${this.id}">`;

        //Сами пункты меню
        for (var i = 0; i < this.items.length; i++){
            result += this.items[i].renderItem();
        }

        result += '</ul>';
        return result;
    }

    //TODO: удаление меню
    remove()
    {
        //document
        let parent = document.getElementById(`${this.id}`).parentNode;
        parent.removeChild(document.getElementById(`${this.id}`));

        // Можно и так
        // document.getElementById(`${this.id}`).parentNode.removeChild(document.getElementById(`${this.id}`));
    }
}
