const oysterCard = require("./oysterController");

let oyster_Card = new oysterCard();

oyster_Card.baseCredit(30);

// Travel in Tube
oyster_Card.isJourneyStarted(oysterCard.stationsandZones.Holborn);
oyster_Card.isDestinationReached(oysterCard.stationsandZones.EarlsCourt);
oyster_Card.exitVisit();

// Travel in Bus
// oyster_Card.startBusJourney();
// oyster_Card.isJourneyStarted(oysterCard.stationsandZones.Holborn);
// oyster_Card.isDestinationReached(oysterCard.stationsandZones.EarlsCourt);

//Final Calculation
oyster_Card.remainCredit();
