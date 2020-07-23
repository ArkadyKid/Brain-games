#!/usr/bin/env node
import { gameWrapper } from '../src/index.js';

import prime from '../src/games/prime.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
gameWrapper(prime, task);
