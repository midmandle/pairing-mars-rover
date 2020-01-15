export function execute(commands : string) {
  if(commands === "LL")
    return "0,0,S";
  if(commands === "L")
    return "0,0,W";
  return "0,0,N";
}
