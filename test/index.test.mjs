import test from 'node:test';
import assert from 'node:assert/strict';
import { name } from '../src/index.mjs';

test('fixture name', () => assert.equal(name, 'fixture'));
