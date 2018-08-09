// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
  let blocks;
  if (someValue>42){
    blocks= someValue-42;
    }
  else {
    blocks=42-someValue;
    }
  return blocks;
}

function distanceFromHqInFeet(someValue){
  let noBlocks=distanceFromHqInBlocks(someValue);
  return noBlocks*264;
}

function distanceTravelledInFeet(someValueA,someValueB){
  let feetA,feetB;
  feetA=distanceFromHqInFeet(someValueA);
  feetB=distanceFromHqInFeet(someValueB);
  return feetA-feetB;
}