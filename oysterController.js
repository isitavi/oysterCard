//All Stations and zones
const stationsandZones = {
  Holborn: [1],
  EarlsCourt: [1, 2],
  Wimbledon: [3],
  Hammersmith: [2]
};

//All types of Fares:
const //Anywhere in Zone 1
  zoneOne = 2.5,
  //Any one zone outside zone 1
  outsideOne = 2.0,
  //Any two zones including zone 1
  twoIncludeOne = 3.0,
  //Any two zones excluding zone 1
  twoExcludeOne = 2.25,
  // Any three zones
  maxCost = 3.2,
  //Any bus journey
  busCost = 1.8;

class oysterCard {
  constructor(totalCredit = 0) {
    this.totalCredit = totalCredit;
    this.maxFare = 0;
    this.beginningZone = [];
    this.destinationZone = [];
    this.totalPoint = [];
    this.isSetDestination = false;
  }

  baseCredit(credit) {
    this.totalCredit = credit;
    return this.totalCredit;
  }
  remainCredit() {
    console.log(`Remaining credit ${this.totalCredit}`);
    return this.totalCredit;
  }
  debitCreditCost() {
    return (this.totalCredit -= this.maxFare);
  }

  isJourneyStarted(startingPoint) {
    this.beginningZone = startingPoint;
    this.totalPoint.push(this.beginningZone);
    this.maxFare = maxCost;
    this.debitCreditCost();
  }

  isDestinationReached(destPoint) {
    this.totalCredit += maxCost;
    // console.log(maxCost);
    this.destinationZone = destPoint;
    this.totalPoint.push(this.destinationZone);
    this.isSetDestination = true;
  }

  startBusJourney() {
    this.maxFare = busCost;
    this.debitCreditCost();
    return this.maxFare;
  }

  exitVisit() {
    this.realCostByVisitedZone();
    if (this.isSetDestination == true) {
      this.debitCreditCost();
    }
  }
  realCostByVisitedZone() {
    if (this.totalPoint.length == 2) {
      const zoneCrossed = this.totalZoneCrossed(
        this.beginningZone,
        this.destinationZone
      );
      let didCrossedZoneOne = this.isZoneOneCrossed(
        this.beginningZone,
        this.destinationZone
      );
      let realCost = this.costBySpecificZone(zoneCrossed, didCrossedZoneOne);
      this.maxFare = realCost;
    } else {
      this.maxFare = maxCost;
    }
  }

  costBySpecificZone(zoneCrossed, didCrossedZoneOne) {
    if (zoneCrossed == 1 && didCrossedZoneOne == true) {
      return zoneOne;
    }
    if (zoneCrossed == 1 && didCrossedZoneOne == false) {
      return outsideOne;
    }
    if (zoneCrossed == 2 && didCrossedZoneOne == true) {
      return twoIncludeOne;
    }
    if (zoneCrossed == 2 && didCrossedZoneOne == false) {
      return twoExcludeOne;
    }
    if (zoneCrossed == 3 && didCrossedZoneOne == true) {
      return maxCost;
    }
    return maxCost;
  }
  totalZoneCrossed() {
    let minVisitedZone = 9;
    this.beginningZone.forEach(startZone => {
      this.destinationZone.forEach(endZone => {
        let totalVisitedZone = Math.abs(startZone - endZone) + 1;
        if (totalVisitedZone < minVisitedZone) {
          minVisitedZone = totalVisitedZone;
        }
        if (minVisitedZone == 1) {
          return;
        }
      });
    });
    return minVisitedZone;
  }

  isZoneOneCrossed() {
    if (this.beginningZone[0] === 1) {
      return true;
    } else if (this.destinationZone[0] === 1) {
      return true;
    } else {
      console.log("Never visited zone 1");
      return false;
    }
  }
}

Object.defineProperty(oysterCard, "stationsandZones", {
  value: stationsandZones,
  writable: false // makes the property read-only
});

module.exports = oysterCard;
