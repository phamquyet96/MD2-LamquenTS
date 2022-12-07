enum speed {
    SLOW = 1,
    MEDIUM = 2,
    FAST = 3,
}


class Fan{
    static speed: number = 1;
    static on: boolean=false;
    static radius: number=5;
    static color: string="blue"

    constructor(private speed: number,
                private on: boolean,
                private color: string,
                private radius: number) {
    }
    public getradius(): number{
        return Fan.radius;
    }
}
let fan1= new Fan(2,true,"red",10)
console.log(fan1.getradius())