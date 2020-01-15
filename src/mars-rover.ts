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
    return this;
  }

  rotateRight() {
    if(this.direction === CompassDirection.NORTH)
      return new Location(this.xCoordinate, this.yCoordinate, CompassDirection.EAST);
    if(this.direction === CompassDirection.EAST)
      return new Location(this.xCoordinate, this.yCoordinate, CompassDirection.SOUTH);
    if(this.direction === CompassDirection.SOUTH)
      return new Location(this.xCoordinate, this.yCoordinate, CompassDirection.WEST);
    return this;
  }

  toString() {
    return `${this.xCoordinate},${this.yCoordinate},${this.direction}`;
  }
}

export function execute(commands: string) {
  let location = new Location(0, 0, CompassDirection.NORTH);

  if (commands === "L") {
    location = location.rotateLeft();
  }

  if (commands === "LL") {
    location = location.rotateLeft();
    location = location.rotateLeft();
  }

  if (commands === "LLL") {
    location = location.rotateLeft();
    location = location.rotateLeft();
    location = location.rotateLeft();
  }

  if (commands === "R") {
    location = location.rotateRight();
  }

  if (commands === "RR") {
    location = location.rotateRight();
    location = location.rotateRight();
  }

  if (commands === "RRR") {
    location = location.rotateRight();
    location = location.rotateRight();
    location = location.rotateRight();
  }

  return location.toString();
}
