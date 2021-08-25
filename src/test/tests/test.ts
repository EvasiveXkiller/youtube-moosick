import test from 'tape';
import rawGetArtistURL from '../dummy/rawGetArtistURL.json';
import { GetArtistParser } from '../../parsers/getArtistParser.js';
import type { ArtistURLFullResult } from '../../resources/rawResultTypes/rawGetArtistURL.js';
// test('timing test', function (t) {
// 	t.plan(2);
//
// 	t.equal(typeof Date.now, 'function');
// 	let start = Date.now();
//
// 	setTimeout(function () {
// 		t.equal(Date.now() - start, 100);
// 	}, 100);
// });

test('getArtistPlaylistParser', (t) => {
	const result = GetArtistParser.parseArtistURLPage(rawGetArtistURL as ArtistURLFullResult);

	console.log(result);

	t.end();
});

// let test = require('tape');
// const {GetArtistParser} = require("../dist/parsers/getArtistParser");
// const dummyData = require("./dummy/rawGetArtistURL.json");
//
// // test('timing test', function (t) {
// // 	t.plan(2);
// //
// // 	t.equal(typeof Date.now, 'function');
// // 	let start = Date.now();
// //
// // 	setTimeout(function () {
// // 		t.equal(Date.now() - start, 100);
// // 	}, 100);
// // });
//
// test("getArtistPlaylistParser", function (t) {
// 	const dummyData = require("./dummy/rawGetArtistURL.json")
//
// 	const result = GetArtistParser.parseArtistURLPage(dummyData);
//
// 	console.log(result);
//
// 	t.end();
// })
// // * keeps the scripts alive
// setInterval(function () {
// 	console.log("timer that keeps nodejs processing running");
// }, 1000 * 60 * 60);
