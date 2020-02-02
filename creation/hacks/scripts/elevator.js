class Elevator {
    constructor(elevator) {
        var me = this
        this.elevator = elevator
        this.indicator = {
            get up() {
                return me.elevator.goingUpIndicator()
            },
            get down() {
                return me.elevator.goingDownIndicator()
            },
            set up(val) {
                return me.elevator.goingUpIndicator(val)
            },
            set down(val) {
                return me.elevator.goingDownIndicator(val)
            }
        }
        this.is = {
            get up() {
                return me.elevator.destinationDirection() == "up"
            },
            get down() {
                return me.elevator.destinationDirection() == "down"
            },
            get stop(){
                return me.elevator.destinationDirection() == "stopped"
            }
        }
    }

    get currentFloor() {
        return this.elevator.currentFloor()
    }

    get maxPassengerCount() {
        return this.elevator.maxPassengerCount()
    }

    get loadFactor() {
        return this.elevator.loadFactor()
    }

    get destinationQueue(){
        return this.elevator.destinationQueue
    }

    set destinationQueue(val){
        this.elevator.destinationQueue = val
        this.elevator.checkDestinationQueue()
    }

    get getPressedFloors(){
        return this.elevator.getPressedFloors()
    }

}


obj = {
    init: function (elevators, floors) {
        console.log(elevators)
        var elevator = elevators[0]; // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function () {
            // let's go to all the floors (or did we forget one?)

            //[0,1,2,3,4].map(elevator.goToFloor);

        });

        floors.map(x => {
            x.on('up_button_pressed', () => {
                x.up = true
            })
            x.on('down_button_pressed', () => {
                x.down = true
            })
        })
    },
    update: function (dt, elevators, floors) {

        var elevator = elevators[0];
        // We normally don't need to do anything here

        var requestedFloors = floors.filter(x =>
            (x.up && x.floorNum() >= elevators[0].currentFloor()) ||
            (x.down && x.floorNum() <= elevators[0].currentFloor())).map(x => {
                x.up = false
                x.down = false
                return x.floorNum()
            })

        var pressedFloors = elevator.getPressedFloors()



        elevator.destinationQueue = [...new Set([...requestedFloors, ...pressedFloors])].sort((a, b) => a - b)
        elevator.checkDestinationQueue();
    }
};
obj