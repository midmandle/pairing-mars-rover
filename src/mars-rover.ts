enum CompassDirection {
  NORTH = "N",
  EAST = "E",
  SOUTH = "S",
  WEST = "W"
}

class Location {
  private xCoordinate: number;
  private yCoordinate: number;
  private direction: CompassDirection;

  constructor(x: number, y: number, direction: CompassDirection) {
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.direction = direction;
  }

  rotateLeft() {
    if (this.direction === CompassDirection.NORTH)
      return new Location(this.xCoordinate, this.yCoordinate, CompassDirection.WEST);
    if (this.direction === CompassDirection.WEST)
      return new Location(this.xCoordinate, this.yCoordinate, CompassDirection.SOUTH);
    if (this.direction === CompassDirection.SOUTH)
      return new Location(this.xCoordinate, this.yCoordinate, CompassDirection.EAST);
    if(this.direction === CompassDirection.EAST)
      return new Location(this.xCoordinate, this.yCoordinate, CompassDirection.NORTH);
    return this;
  }

  rotateRight() {
    if(this.direction === CompassDirection.NORTH)
      return new Location(this.xCoordinate, this.yCoordinate, CompassDirection.EAST);
    if(this.direction === CompassDirection.EAST)
      return new Location(this.xCoordinate, this.yCoordinate, CompassDirection.SOUTH);
    if(this.direction === CompassDirection.SOUTH)
      return new Location(this.xCoordinate, this.yCoordinate, CompassDirection.WEST);
    if(this.direction === CompassDirection.WEST)
      return new Location(this.xCoordinate, this.yCoordinate, CompassDirection.NORTH);
    return this;
  }

  private moveNorth() {
    if (this.yCoordinate === 9)
      return new Location(this.xCoordinate, 0, this.direction);
    return new Location(this.xCoordinate, this.yCoordinate + 1, this.direction);
  }

  private moveEast() {
    if (this.xCoordinate === 9)
      return new Location(0, this.yCoordinate, this.direction);
    return new Location(this.xCoordinate + 1, this.yCoordinate, this.direction);
  }

  private moveWest() {
    return new Location(this.xCoordinate - 1, this.yCoordinate, this.direction);
  }

  moveForward() {
    if (this.direction === CompassDirection.NORTH) {
      return this.moveNorth();
    }
    if (this.direction === CompassDirection.EAST) {
      return this.moveEast();
    }
    if(this.direction === CompassDirection.WEST) {
      return this.moveWest();
    }
    return this;
  }

  toString() {
    return `${this.xCoordinate},${this.yCoordinate},${this.direction}`;
  }
}

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

export function execute(commandString: string) {
  let instructions = new RoverInstructions(commandString);
  let location = new Location(0, 0, CompassDirection.NORTH);

  let command = instructions.takeOne();

  while(command !== Commands.EMPTY) {
    if (command === Commands.TURN_LEFT) {
      location = location.rotateLeft();
    }

    if (command === Commands.TURN_RIGHT) {
      location = location.rotateRight();
    }

    if (command === Commands.MOVE_FORWARD) {
      location = location.moveForward();
    }
    command = instructions.takeOne();
  }

  return location.toString();
}
