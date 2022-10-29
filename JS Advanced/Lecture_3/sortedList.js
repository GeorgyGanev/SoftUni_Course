function createSortedList() {
    
    let list = [];
    
    const parser = {
        add,
        remove,
        get,
        size: 0
    }

    return parser;

    function add(num){
        list.push(num);
        this.size++;
        return list.sort((a,b) => a - b);
    }

    function remove(index){
        if (list[index]){
            list.splice(index,1);
            this.size--;
            return list.sort((a,b) => a-b);
        } else {
            return
        }
    }

    function get(index){
        if (list[index]){
            return list[index];
        } else {
            return;
        }
    }
}
