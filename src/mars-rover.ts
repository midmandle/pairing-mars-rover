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

  toString() {
    return `${this.xCoordinate},${this.yCoordinate},${this.direction}`;
  }
}

class RoverCommands {
  private commands: string;

  constructor(commandString: string) {
    this.commands = commandString;
  }

  takeOne() {
    const command = this.commands.charAt(0);
    this.commands = this.commands.slice(1);
    return command;
  }
}

export function execute(commandString: string) {
  let commands = new RoverCommands(commandString);
  let location = new Location(0, 0, CompassDirection.NORTH);

  let command = commands.takeOne();
  while(command !== "") {
    if (command === "L") {
      location = location.rotateLeft();
    }

    if (command === "R") {
      location = location.rotateRight();
    }
    command = commands.takeOne();
  }

  return location.toString();
}
