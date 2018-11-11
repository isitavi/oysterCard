const oysterCard = require("../oysterController");
const oyster = new oysterCard();
// const mocha = require("mocha");
const expect = require("expect");

// All zone are costs are Matched with costBySpecificZone(zoneCrossed,didCrossedZoneOne) and condition sucessfully executed

describe("All zone values and costs are Matched with costBySpecificZone(zoneCrossed,didCrossedZoneOne) and condition sucessfully executed", () => {
  it("Anywhere in Zone 1 which costs £2.5--(Holborn to Holborn also EarlsCourt)", () => {
    expect(oyster.costBySpecificZone(1, true)).toBe(2.5);
  });
  it("Anyone zone outside zone 1 £2.00--(Hammersmith to Hammersmith)", () => {
    expect(oyster.costBySpecificZone(1, false)).toBe(2.0);
  });
  it("Any two zones including zone 1 £3.00--(EarlsCourt to Wimbledon also Wimbledon to EarlsCourt)", () => {
    expect(oyster.costBySpecificZone(2, true)).toBe(3.0);
  });
  it("Any two zones excluding zone 1 £2.25--(Hammersmith to Wimbledon)", () => {
    expect(oyster.costBySpecificZone(2, false)).toBe(2.25);
  });
  it("Any three zones £3.20 --(Holborn to Wimbledon)", () => {
    expect(oyster.costBySpecificZone(3, true)).toBe(3.2);
  });
  it("Any bus journey £1.80--(When travel in bus it will charged with £1.8)", () => {
    expect(oyster.startBusJourney()).toBe(1.8);
  });
});
