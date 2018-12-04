// JavaScript Document
var mate_in_4 = {
	"_id" : "51049e92334762872c3afc66",
	"format" : "importedJson",
	"commentCount" : 7,
	"creator" : "50e7ac8d1eb61d325c2920c1",
	"dislikes" : 0,
	"flaggedForRemoval" : false,
	"likes" : 1,
	"name" : "Mate in 4(2)",
	"rating" : 2609.2248345869602,
	"rd" : 151.24595557557774,
	"removed" : false,
	"setupData" : { 
		"pieces_setup" :
				[
				{"type":"Pawn","y":2,"x":0,"color":"white"}, 
				{"type":"Queen","y":4,"x":0,"color":"black"},
				{"type":"Pawn","y":6,"x":0,"color":"black"},
				{"type":"Rook","y":7,"x":0,"color":"black"},
				{"type":"Rook","y":0,"x":1,"color":"white"},
				{"type":"Pawn","y":6,"x":1,"color":"black"},
				{"type":"Bishop","y":7,"x":2,"color":"black"},
				{"type":"Knight","y":1,"x":3,"color":"white"},
				{"type":"Pawn","y":2,"x":3,"color":"white"},
				{"type":"Pawn","y":3,"x":3,"color":"black"},
				{"type":"King","y":0,"x":4,"color":"white"},
				{"type":"Knight","y":2,"x":4,"color":"black"},
				{"type":"Pawn","y":4,"x":4,"color":"white"},
				{"type":"Pawn","y":6,"x":4,"color":"black"},
				{"type":"Bishop","y":0,"x":5,"color":"white"},
				{"type":"Pawn","y":2,"x":5,"color":"white"},
				{"type":"Queen","y":2,"x":6,"color":"white"},
				{"type":"Pawn","y":5,"x":6,"color":"black"},
				{"type":"King","y":7,"x":6,"color":"black"},
				{"type":"Rook","y":0,"x":7,"color":"white"},
				{"type":"Pawn","y":2,"x":7,"color":"white"},
				{"type":"Bishop","y":5,"x":7,"color":"black"},
				{"type":"Pawn","y":6,"x":7,"color":"black"}
				],
		"player_color":"black",
		"computer_move_first":false
		},
	"solutionData" : {
		"moves":[
			{"finish_y":1,"start_x":4,"finish_x":2,"start_y":2}, //e3-c2
			{"finish_y":1,"start_x":4,"finish_x":5,"start_y":0}, //e1-f2
			{"finish_y":2,"start_x":7,"finish_x":4,"start_y":5}, //h6-e3
			{"finish_y":1,"start_x":5,"finish_x":6,"start_y":1}, //f2-g2
			{"finish_y":1,"start_x":0,"finish_x":3,"start_y":4}, //a5-d2
			{"finish_y":1,"start_x":5,"finish_x":4,"start_y":0}, //f1-e2
			{"finish_y":1,"start_x":3,"finish_x":4,"start_y":1},
			{"finish_y":1,"start_x":6,"finish_x":5,"start_y":2},
			{"finish_y":1,"start_x":4,"finish_x":5,"start_y":1}
			],
		"explanation":"Mate in four. "
		},
	"taken" : 619,
	"timestamp" : "Sun Jan 27 2013 03:27:14 GMT+0000 (UTC)",
	"type" : "tactic"
};

var evans_gambit_accepted = {
	"name" : "C52: Evan's Gambit Accepted",
	"category" : "C",
	"format" : "FENPGN",
	"arr" : ["e2-e4", "e7-e5", "g1-f3", "b8-c6", "f1-c4", "f8-c5", "b2-b4", "c5-b4", "c2-c3"],
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var nimzo_indian = {
	"name" : "E52: Nimzo-Indian, 4.e3, Main Line.",
	"category" : "E",
	"format" : "FENPGN",
	"arr" : ["d2-d4", "g8-f6", "c2-c4", "e7-e6", "b1-c3", "f8-b4", "e2-e3", "bO-O", "f1-d3", "d7-d5", "g1-f3"],
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var sicilian_dragon = {
	"name" : "B78: Sicilian, Dragon, Yugoslav Attack",
	"category" : "B",
	"format" : "FENPGN",
	"arr" : ["e2-e4", "c7-c5", "g1-f3", "d7-d6", "d2-d4", "c5-d4", "f3-d4", "g8-f6", "b1-c3", "g7-g6", "c1-e3", "f8-g7", "f2-f3", "bO-O", "d1-d2", "b8-c6", "f1-c4", "c8-d7", "wO-OO"],
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var ruy_lopez_closed = {
	"name" : "C88: Ruy Lopez, Closed",
	"category" : "C",
	"format" : "FENPGN",
	"arr" : ['e2-e4', 'e7-e5', 'g1-f3', 'b8-c6', 'f1-b5', 'a7-a6', 'b5-a4', 'g8-f6', 'wO-O', 'f8-e7', 'f1-e1', 'b7-b5', 'a4-b3'],
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var french_winawer ={
	"name" : "C18: French, Winawer, Advance",
	"category" : "C",
	"format" : "FENPGN",
	"arr" : ['e2-e4', 'e7-e6', 'd2-d4', 'd7-d5',
			'b1-c3', 'f8-b4', 'e4-e5', 'c7-c5',
			'a2-a3', 'b4-c3', 'b2-c3', 'g8-e7',
			'd1-g4', 'bO-O', 'f1-d3', 'b8-c6'],
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var english_bremen_smyslov ={
	"name" : "A29: English, Bremen, Smyslov System",
	"category" : "A",
	"format" : "FENPGN",
	"arr" : ['c2-c4', 'g8-f6', 'b1-c3', 'e7-e5', 
			'g1-f3', 'b8-c6', 'g2-g3', 'f8-b4',
			'f1-g2', 'bO-O', 'wO-O'],
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
//start here
var sicilian_lowenthal_kalashnikov ={
	"name" : "B32: Sicilian: Lowenthal, Kalashnikov",
	"category" : "B",
	"format" : "FENPGN",
	"arr" : ['e2-e4', 'c7-c5', 'g1-f3', 'b8-c6', 'd2-d4', 'c5-d4',
		'f3-d4', 'e7-e5', 'd4-b5', 'd7-d6', 'b1-c3', 'a7-a6', 
		'b5-a3', 'b7-b5'],
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var english_four_knights_nimzowisch ={
	"name" : "A28: English: Four Knights, Nimzowitsch Variation",
	"category" : "A",
	"format" : "FENPGN",
	"arr" : ['c2-c4', 'e7-e5', 'b1-c3', 'g8-f6', 'g1-f3', 'b8-c6', 'e2-e4'],
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var grunfeld_exchange_classical ={
	"name" : "D86: Grunfeld: Exchange, Classical Variation",
	"category" : "D",
	"format" : "FENPGN",
	"arr" : ['d2-d4', 'g8-f6', 'c2-c4', 'g7-g6', 'b1-c3', 'd7-d5',
		'c4-d5', 'f6-d5', 'e2-e4', 'd5-c3', 'b2-c3', 'f8-g7',
		'f1-c4', 'c7-c5', 'g1-e2'],
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var  d09 ={
	"name" : "D09: Queens Gambit Declined, Albin Counter-Gambit (5.g3) ",
	"category" : "D",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 d5 2.c4 e5 3.dxe5 d4 4.Nf3 Nc6 5.g3 Be6 6.Nbd2 Qd7 7.Bg2",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var  c39 ={
	"name" : "C39: King’s Gambit Accepted, Kieseritsky, Berlin Defence (6.Bc4)",
	"category" : "C",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 e5 2.f4 exf4 3.Nf3 g5 4.h4 g4 5.Ne5 Nf6 6.Bc4 d5 7.exd5 Bd6 8.d4 Nh5 9.O-O O-O",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var  c30 ={
	"name" : "C30: King’s Gambit Declined, Classical Variation",
	"category" : "C",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 e5 2.f4 Bc5 3.Nf3 d6 4.Nc3 Nf6 5.Bc4 Nc6 6.d3 Bg4 7.Na4 O-O 8.Nxc5 dxc5 9.O-O Qd6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var e32 ={
	"name" : "E32: Nimzo-Indian, Classical Kacheishvili Variation",
	"category" : "E",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 4.Qc2 O-O 5.a3 Bxc3+ 6.Qxc3 b6 7.Bg5 Bb7 8.e3 c5 9.dxc5 bxc5 10.Ne2",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var b31 ={
	"name" : "B31: Sicilian Defense: Nezhmetdinov-Rossolimo Attack. Fianchetto Without d6",
	"category" : "B",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 c5 2.Nf3 Nc6 3.Bb5 g6 4.O-O Bg7 5.c3 Nf6 6.Re1 O-O 7.h3 Qb6 8.Bf1 e5 ",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var c00 ={
	"name" : "C00: French, King’s Indian Attack ",
	"category" : "C",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 e6 2.d3 b6 3.g3 Bb7 4.Bg2 c5 5.Nf3 d6 6.O-O Nf6 7.Re1 Be7",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var b11 ={
	"name" : "B11: Caro-Kahn, Two Knights Christiansen Variation",
	"category" : "B",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nf6 5.Nxf6+ gxf6 6.Nf3 Bg4 7.Be2 e6 8.O-O Qc7",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var b06 ={
	"name" : "B06: Robatsch ( Modern ) Defence",
	"category" : "B",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 g6 2.e4 Bg7 3.Nc3 d6 4.Nge2 c6 5.a4 Nf6 6.g3 O-O 7.Bg2 e5 8.O-O a5",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var e60 ={
	"name" : "E60: King’s Indian Defense: Anti-Grunfled",
	"category" : "E",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 Nf6 2.c4 g6 3.f3 Nc6 4.d5 Ne5 5.e4 d6 6.Nc3 Bg7 7.f4 Ned7 8.Nh3 O-O 9.Be2 Nc5 10.Nf2 e6 11.O-O exd5 12.cxd5",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var d40 ={
	"name" : "D40: Queen's Gambit Declined: Semi-Tarrasch Defense, Millionaire Chess 2014 So vs Xiong",
	"category" : "D",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 Nf6 2.c4 e6 3.Nf3 d5 4.Nc3 c5 5.cxd5 cxd4 6.Qxd4 exd5 7.e4 Nc6 8.Bb5 dxe4 9.Qxd8+ Kxd8 10.Ng5 Be6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var b42 ={
	"name" : "B42: Sicilian, Kan. Polugaevsky Variation World Open 2012 Molner vs Colas",
	"category" : "B",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 a6 5.Bd3 Bc5 6.Nb3 Ba7 7.O-O d6 8.Qe2 Nf6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var d47 ={
	"name" : "D47: Queens Gambit Declined, Semi-Slav, Meran Variation",
	"category" : "D",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 d5 2.c4 c6 3.Nc3 Nf6 4.Nf3 e6 5.e3 Nbd7 6.Bd3 dxc4 7.Bxc4 b5 8.Bd3 Bd6 9.O-O O-O 10.Qc2 Bb7",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var c53 ={
	"name" : "C53: Giuoco Piano, Italian Game",
	"category" : "C",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.c3 Nf6 5.d3 a6 6.Bb3 Ba7 7.O-O d6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var c59 ={
	"name" : "C59: Two Knights Defence, Fried Liver Attack, Steinitz variation",
	"category" : "",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 d5 5.exd5 Na5 6.Bb5+ c6 7.dxc6 bxc6 8.Be2 h6 9.Nh3 Bd6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};

var c45 ={
	"name" : "C45: Scotch Game",
	"category" : "C",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.Nxd4 Bc5 5.Nxc6 Qf6 6.Qd2 dxc6 7.Nc3 Ne7 8.Qf4 Qe6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var b09 ={
	"name" : "B09: Pirc, Austrian Attack",
	"category" : "B",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 d6 2.d4 Nf6 3.Nc3 g6 4.f4 Bg7 5.Nf3 O-O",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var e10 ={
	"name" : "E10: Blumentfeld Counter-Gambit, Dus-Chotimursky variation",
	"category" : "E",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 Nf6 2.c4 e6 3.Nf3 c5 4.d5 b5 5.Bg5 exd5 6.cxd5 d6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var b00 ={
	"name" : "B00: Owens defense",
	"category" : "B",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1. e4 b6 2. d4 Bb7 3. Nc3 e6 4. Nf3 Bb4 5. Bd3 Nf6 6. Qe2 d5 7. exd5 Nxd5 8. Bd2 Nxc3 9. Bxc3",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var c47 ={
	"name" : "C47: Four Knights, Scotch  variation",
	"category" : "C",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4 5.Nxd4 Bc5 6.Be3 Bb6 7.Qd2 O-O 8.O-O-O Re8 9.f3 d5",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var a57 ={
	"name" : "A57: Benko Gambi half Accepted, f3 (Dlugy variation)",
	"category" : "A",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 Nf6 2.c4 c5 3.d5 b5 4.cxb5 a6 5.f3 e6 6.e4 exd5 7.e5 Qe7 8.Qe2 Ng8 9.Nc3 Bb7 10.Nh3 c4",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var d21 ={
	"name" : "D21: Queens Gambit Accepted, Borisenko-Furman Variation",
	"category" : "D",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 d5 2.c4 dxc4 3.Nf3 a6 4.e4 b5 5.a4 Bb7 6.axb5 axb5 7.Rxa8 Bxa8 8.Nc3 c6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var a31 ={
	"name" : "A31: English, symmetrical variation",
	"category" : "A",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 Nf6 2.c4 c5 3.Nf3 cxd4 4.Nxd4 e5 5.Nb5 d5 6.cxd5 Bc5 7.e3 O-O",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var d20 ={
	"name" : "D20: Queens Gambit Accepted, Early E4 Variation",
	"category" : "D",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 d5 2.c4 dxc4 3.e4 e5 4.Nf3 Bb4+ 5.Bd2 Bxd2+ 6.Nbxd2 exd4 7.Bxc4 Nc6 8.O-O Qf6 9.e5 Qg6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var a57e3={
	"name" : "A57: Benko Gambit half Accepted, 5.e3 Variation",
	"category" : "A",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 Nf6 2.c4 c5 3.d5 b5 4.cxb5 a6 5.e3 Bb7 6.Nc3 axb5 7.Bxb5 Qa5 8.Bd2 Qb6 9.a4 Nxd5 10.Nf3 e6 11.O-O Be7",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var a04 ={
	"name" : "A04: Reti Opening, Early b5 Variation",
	"category" : "A",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.Nf3 b5 2.e4 Bb7 3.Bxb5 Bxe4 4.O-O Nf6 5.d4 e6 6.c4 Be7",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var a61 ={
	"name" : "A61: Benoni, Nimzowitsch ( Knight’s tour ) variation",
	"category" : "A",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 Nf6 2.Nf3 c5 3.d5 e6 4.c4 exd5 5.cxd5 d6 6.Nc3 g6 7.Nd2 Bg7 8.e4 O-O 9.Be2 Ne8 10.O-O f5 11.exf5 Bxf5 12.Nc4 Na6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var d02 ={
	"name" : "D02: Queen’s Pawn game, Krause variation",
	"category" : "D",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 d5 2.Nf3 c5 3.c4 cxd4 4.cxd5 Nf6 5.Qxd4 Qxd5 6.Nc3 Qxd4 7.Nxd4 Bd7 8.e4 Nc6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var d80 ={
	"name" : "D80: Grunfeld, Stockholm Variation",
	"category" : "D",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 Nf6 2.c4 g6 3.Nc3 d5 4.Bg5 Ne4 5.Bf4 Nxc3 6.bxc3 Bg7 7.e3 O-O 8.cxd5 Qxd5 9.Nf3 c5 10.Be2 Nc6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var b14 ={
	"name" : "B14: Caro-Kahn, Panov, Botvinnik Attack with e6",
	"category" : "B",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 c6 2.d4 d5 3.exd5 cxd5 4.c4 Nf6 5.Nc3 e6 6.Nf3 Bb4 7.cxd5 Nxd5 8.Bd2 Nc6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var c11 ={
	"name" : "C11: French Steinitz, Boleslavsky Variation, Main Line",
	"category" : "C",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.e5 Nfd7 5.f4 c5 6.Nf3 Nc6 7.Be3 cxd4 8.Nxd4 Bc5 9.Qd2 O-O 10.O-O-O",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var c02 ={
	"name" : "C02: French: Advance, Paulsen Attack",
	"category" : "C",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var b99 ={
	"name" : "B99: Sicilian: Najdorf (Be7), Main Line",
	"category" : "B",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bg5 e6 7.f4 Be7 8.Qf3 Qc7 9.O-O-O Nbd7",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var b05 ={
	"name" : "B05: Alekhine’s Defence, Modern Variation (4.Bg4 )",
	"category" : "B",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 Nf6 2.e5 Nd5 3.d4 d6 4.Nf3 Bg4 5.Be2 e6 6.O-O Be7 7.c4 Nb6 8.Nc3 O-O 9.Be3",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var d16 ={
	"name" : "D16: Queens Gambit Declined Slav, Soultanbeieff Variation",
	"category" : "D",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 dxc4 5.a4 e6 6.e4 Bb4 7.e5 Nd5 8.Bd2 b5",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var a88_fotis_vs_browne ={
	"name" : "A88: Dutch, Leningrad, Main Line with c6  Chicago 1973 Fotis vs Browne",
	"category" : "A",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 d6 2.c4 g6 3.Nc3 Bg7 4.g3 f5 5.Bg2 Nf6 6.Nf3 O-O 7.O-O c6 8.d5 e5 9.dxe6 Bxe6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var a61 ={
	"name" : "A61: Benoni, Uhlmann Variation",
	"category" : "A",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 Nf6 2.c4 c5 3.d5 e6 4.Nc3 exd5 5.cxd5 d6 6.Nf3 g6 7.Bg5 Bg7",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var b01_Komodo_vs_Stockfish ={
	"name" : "B01: Scandinavia ( Centere Counter ) Defense  (Komodo vs Stockfish TCEC season 6 super final)",
	"category" : "B",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 d5 2.exd5 Qxd5 3.Nc3 Qa5 4.d4 Nf6 5.Bc4 c6 6.Qe2 Bf5 7.Bd2 Qc7 8.O-O-O e6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var e91 ={
	"name" : "E91: King’s Indian, Kazakh Variation",
	"category" : "E",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Be2 O-O 6.Nf3 Na6 7.Bg5 h6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var c28 ={
	"name" : "C28: Vienna game, 4.d3",
	"category" : "C",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 e5 2.Bc4 Nc6 3.Nc3 Nf6 4.d3 Bc5 5.f4 d6 6.Nf3 Bg4",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var e80 ={
	"name" : "E80: King’s Indian, Samisch Variation",
	"category" : "E",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 Nc6 6.Be3 a6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var e12 ={
	"name" : "E12: Queen’s Indian Accelerated, Petrosian System",
	"category" : "E",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 Nf6 2.c4 e6 3.Nf3 b6 4.a3 Bb7 5.Nc3 Ne4 6.Nxe4 Bxe4",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var a28 ={
	"name" : "A28: English, Four Knights, Nimzowitsch variation (Grandmaster Level)",
	"category" : "A",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.c4 e5 2.Nc3 Nf6 3.Nf3 Nc6 4.e4 Bb4 5.d3 d6 6.g3 h6 7.Bg2 Bc5 8.h3 Be6 9.Rb1 a5 10.O-O",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var a29 ={
	"name" : "A29: English, Bremen, Four Knights Fianchetto   ( Grandmaster Level )",
	"category" : "A",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.c4 Nf6 2.Nc3 e5 3.Nf3 Nc6 4.g3 Bc5 5.Bg2 O-O 6.O-O d6 7.a3 a6 8.e3 Ba7",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var a27 ={
	"name" : "A27: English, Three Knights System",
	"category" : "A",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.c4 e5 2.Nc3 Nc6 3.Nf3 f5 4.d4 e4",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var c41 ={
	"name" : "C41: Philidor Exchange Variation",
	"category" : "C",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 e5 2.Nf3 d6 3.d4 exd4 4.Nxd4 Nf6 5.Nc3 Be7 6.Be2 O-O 7.O-O Re8 8.f4",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var c07 ={
	"name" : "C07: French Tarrasch, Open Game",
	"category" : "C",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 e6 2.d4 d5 3.Nd2 c5 4.exd5 Qxd5 5.Ngf3 cxd4 6.Bc4 Qd6 7.O-O",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var b52 ={
	"name" : "B52: Sicilia, Canal-Sokolsky Attack",
	"category" : "B",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 c5 2.Nf3 d6 3.Bb5+ Bd7 4.Bxd7+ Qxd7 5.c4 Nf6 6.Nc3 g6 7.d4 cxd4 8.Nxd4 Bg7",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var d44 ={
	"name" : "D44: Queens Gambit Declined, semi-slav, Anti-Meran Gambit",
	"category" : "D",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 d5 2.c4 c6 3.Nc3 Nf6 4.Nf3 e6 5.Bg5 dxc4 6.e4 b5 7.e5 h6 8.Bh4 g5 9.Nxg5 hxg5 10.Bxg5 Nbd7",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var a48 ={
	"name" : "A48: King’s Indian, Torre Attack",
	"category" : "A",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 Nf6 2.Nf3 g6 3.Bg5 Bg7 4.Nbd2 O-O 5.c3 d5 6.e3 Nbd7 7.Bd3 Re8 8.O-O e5",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var d70 ={
	"name" : "D70: Neo-Grunfeld Defence",
	"category" : "D",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 Nf6 2.c4 g6 3.f3 d5 4.cxd5 Nxd5 5.e4 Nb6 6.Nc3 Bg7 7.Be3 O-O 8.Qd2",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var e92 ={
	"name" : "E92: King’s Indian, Andersson variation ",
	"category" : "E",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Ng5 Re8",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};
var a22 ={
	"name" : "A22: English, Bremen, Reverse Dragon",
	"category" : "A",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.c4 e5 2.g3 Nf6 3.Bg2 d5 4.cxd5 Nxd5 5.Nc3 Nb6 6.Nf3 Nc6 7.O-O Be7 8.a3 O-O 9.b4 Be6",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
}
var a61_benoni ={
	"name" : "A61: Benoni, Classical Nimzowitch variation",
	"category" : "A",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 Nf6 2.c4 e6 3.Nc3 c5 4.d5 exd5 5.cxd5 d6 6.Nf3 g6 7.Nd2 Bg7 8.e4 O-O 9.Be2",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
}
var a88 ={
	"name" : "A88: Dutch Leningrad, Main Variation (c6)",
	"category" : "A",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.d4 f5 2.Nf3 Nf6 3.g3 g6 4.Bg2 Bg7 5.O-O O-O 6.c4 d6 7.Nc3 c6 8.d5 e5 9.dxe6 Bxe6 10.b3",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
}
var b01 ={
	"name" : "B01: Scandanavian Pytel wade variation",
	"category" : "B",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "1.e4 d5 2.exd5 Qxd5 3.Nc3 Qd6 4.d4 c6 5.Nf3 Bg4",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
}
/*var name ={
	"name" : "",
	"category" : "",
	"format" : "FENPGN2",
	"arr" : [],
	"pgn" : "",
	"startPos" : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
};*/
//==============================================================
//====================== EXPORTS HERE===========================
//==============================================================
module.exports = {
	/*"c52": evans_gambit_accepted,
	"e52" : nimzo_indian, 			"b78" : sicilian_dragon,
	"c88" : ruy_lopez_closed,		"c18" : french_winawer,
	"a29" : english_bremen_smyslov,	"b32" : sicilian_lowenthal_kalashnikov,
	"a28" : english_four_knights_nimzowisch,
	"d86" : grunfeld_exchange_classical,
	"d09" : d09, 	"c39" : c39, 	"c30" : c30, 	"e32": e32, 
	"b31" : b31, 	"c00" : c00, 	"b06" : b06, 	"b11": b11,
    "e60" : e60, 	"d40" : d40, 	"b42" : b42, 	"d47": d47, 
	"c53" : c53, 	"c59" : c59, 	"c45" : c45, 	"b09": b09,
	"e10" : e10, 	"b00" : b00,  	"c47": c47, 	"a57": a57,
	"d21" : d21, 	"a57e3":a57e3,	"a61":a61,		"a04" : a04,
	"d02" : d02, 	"d80" : d80,	"b14" : b14,	"c11" : c11,
	"c02" : c02,	"b99" : b99,	"b05" : b05,	"a88" : a88,
	"d16": d16,		"b01" : b01,	"e91" : e91,	"c28" : c28,
	"e80" : e80,	"e12" : e12,	"a28" : a28,	"a29" : a29,
	"c41" : c41,	"c07" : c07,	"b52" : b52,	"d44" : d44,
	"a48" : a48,	"d70" : d70,	"e92" : e92, 	"a22" : a22,
	"a61" : a61,	"a88" : a88,	"b01" : b01*/
	"a04" : a04,
	"a22" : a22,
	"a28" : a28,
	//"a28_four_nights" : english_four_knights_nimzowisch,
	"a29" : a29,
	"a29_2" : english_bremen_smyslov,
	"a48" : a48,
	"a57" : a57,
	"a57e3" : a57e3,
	"a61_benoni" : a61_benoni,
	"a61" : a61,
	"a88_fotis_vs_browne" : a88_fotis_vs_browne,
	"a88" : a88,
	"b00" : b00,  
	"b01_Komodo_vs_Stockfish" : b01_Komodo_vs_Stockfish,
	"b01" : b01,
	"b05" : b05,
	"b06" : b06, 
	"b09" : b09,
	"b11" : b11,
	"b14" : b14,
	"b31" : b31, 
	"b32" : sicilian_lowenthal_kalashnikov,
	"b42" : b42, 
	"b52" : b52,
	"b78" : sicilian_dragon,
	"b99" : b99,
	"c00" : c00, 
	"c02" : c02,
	"c07" : c07,
	"c11" : c11,
	"c18" : french_winawer,
	"c28" : c28,
	"c30" : c30, 
	"c39" : c39, 
	"c41" : c41,
	"c45" : c45, 
	"c47" : c47, 
	"c52" : evans_gambit_accepted,
	"c53" : c53, 
	"c59" : c59, 
	"c88" : ruy_lopez_closed,
	"d02" : d02, 
	"d09" : d09, 
	"d16" : d16,
	"d21" : d21, 
	"d40" : d40, 
	"d44" : d44,
	"d47" : d47, 
	"d70" : d70,
	"d80" : d80,
	"d86" : grunfeld_exchange_classical,
	"e10" : e10, 
	"e12" : e12,
	"e32" : e32, 
	"e52" : nimzo_indian, 
	"e60" : e60, 
	"e80" : e80,
	"e91" : e91,
	"e92" : e92 
	};
	
	
	
	
	
	
	
	
	
	