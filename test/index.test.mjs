import test from 'node:test';
import assert from 'node:assert/strict';
import { name, greet, farewell } from '../src/index.mjs';

test('fixture name', () => assert.equal(name, 'fixture'));

test('greet', () => assert.equal(greet('Ada'), 'Hello, Ada!'));


test('farewell', () => assert.equal(farewell('Ada'), 'Goodbye, Ada!'));
