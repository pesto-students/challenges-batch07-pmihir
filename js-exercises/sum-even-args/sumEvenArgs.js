const sumEvenArgs = (...args) => args.reduce((sum, val) => ((val % 2 === 0) ? sum + val : sum), 0);

export { sumEvenArgs };
