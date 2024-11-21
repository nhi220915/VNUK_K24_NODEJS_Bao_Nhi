class House {
    constructor(address = "House") {
        this.address = add;
    }
}

class Mansion extends House {
    constructor(address, floor) {
        super(address);
        this.floor = floor;
    }
}

const ms1 = new Mansion("Canad", 12);
console.log(ms1)