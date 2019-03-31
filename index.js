// Code your solution in this file!

function distanceFromHqInBlocks(dist){
  let response;
  if (dist > 42) {
    response = dist - 42;}
    else if (dist < 42){
      response = 42 - dist;
    }
  return response;
}

function distanceFromHqInFeet(feet){
  return distanceFromHqInBlocks(feet)*264;
}

function distanceTravelledInFeet(ft1, ft2){
  let response;
  ft1 < ft2 ? response = (ft2 - ft1) * 264 : response = (ft1 - ft2) * 264
  return response;
}

function calculatesFarePrice(start, destination) {
    distance = distanceTravelledInFeet(start, destination)
    switch (true) {
        case distance <= 400:
            return 0
        case distance > 400 && distance <= 2000:
            return (distance - 400) * .02
        case distance > 2000 && distance <=2500:
            return 25
        default:
            return "cannot travel that far"
    }
}
