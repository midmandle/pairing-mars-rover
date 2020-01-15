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
  private location = new Location(0, 0, CompassDirection.NORTH);

  constructor() {
  }

  executeCommand(command: string) {
    if (command === Commands.TURN_LEFT) {
      this.location = this.location.rotateLeft();
    }

    if (command === Commands.TURN_RIGHT) {
      this.location = this.location.rotateRight();
    }

    if (command === Commands.MOVE_FORWARD) {
      this.location = this.location.moveForward();
    }
  }

  run(commandString: string) {
    let instructions = new RoverInstructions(commandString);


    let command: string;
    do {
      command = instructions.takeOne();
      this.executeCommand(command);
    } while(command !== Commands.EMPTY);

    return this.location.toString();
  }
}
