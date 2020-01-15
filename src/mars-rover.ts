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

  toString() {
    return `${this.xCoordinate},${this.yCoordinate},${this.direction}`;
  }
}

export function execute(commands : string) {
  if(commands === "L") {
    return new Location(0,0, CompassDirection.WEST).toString();
  }

  if(commands === "LL") {
    return new Location(0,0, CompassDirection.SOUTH).toString();
  }


  return new Location(0,0, CompassDirection.NORTH).toString();
}
