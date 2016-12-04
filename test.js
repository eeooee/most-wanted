/*jshint esversion: 6 */
const dragonEvents = [
  { type: 'attack', value: 12, target: 'player-dorkman' },
  { type: 'yawn', value: 40 },
  { type: 'eat', target: 'horse' },
  { type: 'attack', value: 23, target: 'player-fluffykinds' },
  { type: 'attack', value: 12, target: 'player-dorkman' },
];
const reduceTotal = (prev, value) => (prev || 0) + value;
const isAttack = event => event.type === 'attack';
const totalDamageOnDorkman = dragonEvents
  .filter(isAttack)
  .filter(event =>  event.target === 'player-dorkman')
  .map(event => event.value)
  .reduce(reduceTotal);

console.log('totalDamageOnDorkman\n', totalDamageOnDorkman);
