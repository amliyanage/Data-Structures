class HashTable {
    constructor(size = 10) {
        this.table = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.table[index]) this.table[index] = [];
        this.table[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if (this.table[index]) {
            for (let pair of this.table[index]) {
                if (pair[0] === key) return pair[1];
            }
        }
        return undefined;
    }
}

let hashTable = new HashTable();
hashTable.set("name", "Alice");
hashTable.set("age", 25);
console.log("Name:", hashTable.get("name")); // Output: Alice
console.log("Age:", hashTable.get("age")); // Output: 25