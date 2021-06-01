import Nest from '../src/Nest';
import Termite from '../src/Termite';

test('Termite spawns a new nest', () => {
  const nest = Termite.spawn();
  expect(nest).toBeInstanceOf(Nest);
});
