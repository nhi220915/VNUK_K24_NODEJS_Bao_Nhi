class House {
    construtor()
    {
        this.address = "dong da";
        this.floors = 2;
        this.garage = false;
    }
}
let myHouse1 = new House();
let add = myHouse1.address;
let fl = myHouse1.floors;
let gar = myHouse1.garage;
    add = "dien bien phu";
    console.log(add);

let myHouse2 = new House('abcd, efgh', 2, false);
console.log(myHouse2);