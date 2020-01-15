import {CompassDirection, Location} from "./location";

enum Commands {
  MOVE_FORWARD = "M",
  TURN_LEFT = "L",
  TURN_RIGHT = "R",
  EMPTY = ""
}

class RoverInstructions {
  private instructions: string;

  constructor(commandString: string) {
    this.instructions = commandString;
  }

  takeOne() {
    const command = this.instructions.charAt(0);
    this.instructions = this.instructions.slice(1);
    return command;
  }
}

export class MarsRover {
  constructor() {
  }

  executeCommand(command: string, location: Location) {
    if (command === Commands.TURN_LEFT) {
      location = location.rotateLeft();
    }

    if (command === Commands.TURN_RIGHT) {
      location = location.rotateRight();
    }

    if (command === Commands.MOVE_FORWARD) {
      location = location.moveForward();
    }
    return location;
  }

  run(commandString: string) {
    let instructions = new RoverInstructions(commandString);
    let location = new Location(0, 0, CompassDirection.NORTH);

    let command = instructions.takeOne();

    while(command !== Commands.EMPTY) {
      location = this.executeCommand(command, location);
      command = instructions.takeOne();
    }

    return location.toString();
  }
}
