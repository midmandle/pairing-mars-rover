export function execute(commands : string) {
  if(commands === "L") {
    return "0,0,W";
  }

  if(commands === "LL") {
    return "0,0,S";
  }

  return "0,0,N";
}
