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
  let feetA,feetB,result;
  feetA=distanceFromHqInFeet(someValueA);
  feetB=distanceFromHqInFeet(someValueB);
  result= Math.abs(feetB-feetA);
  return result;
}

function calculatesFarePrice(start, destination){
  let distance, FarePrice;
  distance=distanceTravelledInFeet(start, destination);
  if (distance<=400){
    FarePrice=0;
  }
  else if (distance>400 && distance<=2000){
    
  }
  return FarePrice;
}