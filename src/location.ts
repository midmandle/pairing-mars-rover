export enum CompassDirection {
  NORTH = "N",
  EAST = "E",
  SOUTH = "S",
  WEST = "W"
}

export class Location {
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
    if (this.direction === CompassDirection.EAST)
      return new Location(this.xCoordinate, this.yCoordinate, CompassDirection.NORTH);
    return this;
  }

  rotateRight() {
    if (this.direction === CompassDirection.NORTH)
      return new Location(this.xCoordinate, this.yCoordinate, CompassDirection.EAST);
    if (this.direction === CompassDirection.EAST)
      return new Location(this.xCoordinate, this.yCoordinate, CompassDirection.SOUTH);
    if (this.direction === CompassDirection.SOUTH)
      return new Location(this.xCoordinate, this.yCoordinate, CompassDirection.WEST);
    if (this.direction === CompassDirection.WEST)
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
    if (this.xCoordinate === 0)
      return new Location(9, this.yCoordinate, this.direction);
    return new Location(this.xCoordinate - 1, this.yCoordinate, this.direction);
  }

  private moveSouth() {
    if (this.yCoordinate === 0)
      return new Location(this.xCoordinate, 9, this.direction);
    return new Location(this.xCoordinate, this.yCoordinate - 1, this.direction);
  }

  moveForward() {
    if (this.direction === CompassDirection.NORTH) {
      return this.moveNorth();
    }

    if (this.direction === CompassDirection.EAST) {
      return this.moveEast();
    }

    if (this.direction === CompassDirection.WEST) {
      return this.moveWest();
    }

    if (this.direction === CompassDirection.SOUTH) {
      return this.moveSouth();
    }
    return this;
  }

  toString() {
    return `${this.xCoordinate},${this.yCoordinate},${this.direction}`;
  }
}
