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

function calculatesFarePrice(start, destination){
  let response;
    if (distanceTravelledInFeet(start, destination) <= 400){
    response = 0;
  } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000){
    response = ((distanceTravelledInFeet(start, destination) - 400) * .02);
  } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500){
    response = 25;
  } else if (distanceTravelledInFeet(start, destination) > 2500) {
    response = "cannot travel that far"
  }
  return response;
}
