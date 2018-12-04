(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(e, name) {
    _classCallCheck(this, Player);

    this.name = name;
    this.htmlElement = e;
    this.pos = 0;
  }

  _createClass(Player, [{
    key: 'moveOne',
    value: function moveOne() {
      var c = ++this.pos;
      var loc = document.getElementById('cell' + c).getBoundingClientRect();
      //loc: {top: _, left: _, width: _, height: _, right: _, bottom: _}
      this.htmlElement.style.top = loc.top + 'px';
      //$(this.htmlElement).css("top", loc.top+"px");
      this.htmlElement.style.left = loc.left + 'px';
      //$(this.htmlElement).css("left", loc.left+'px');
    }
  }, {
    key: 'moveSquares',
    value: function moveSquares(n) {
      var _this = this;

      var dest = this.pos + n;
      var cb = function cb() {
        if (_this.pos === 27) {
          alert(_this.name + " wins!");
          return;
        } else if (_this.pos === dest) {
          return;
        } else {
          _this.moveOne();
          setTimeout(cb, 500);
        }
      };
      cb();
    }
  }]);

  return Player;
}();

exports.default = Player;

},{}],2:[function(require,module,exports){
'use strict';

var _generateBoard = require('./generateBoard.js');

var _generateBoard2 = _interopRequireDefault(_generateBoard);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _generateBoard2.default)();
//CREATE PLAYER
window.players = [new _Player2.default(document.getElementById('player1'), 'Stimpy'), new _Player2.default(document.getElementById('player2'), 'Ren')];

/*
  Click handler for die roll
*/
var turn = 0;
function handleClick(e) {
  e.target.onclick = "";
  e.target.src = 'Dodecahedron3.gif';
  var roll = document.getElementById('roll');
  roll.innerHTML = "";
  setTimeout(function () {
    e.target.onclick = handleClick;
    var numSquares = Math.floor(Math.random() * 12) + 1;
    roll.innerHTML = numSquares;
    e.target.src = 'dodecahedron_360.png';
    players[turn++ % players.length].moveSquares(numSquares);
  }, 1900);
}

document.getElementById('die').onclick = handleClick;

},{"./Player.js":1,"./generateBoard.js":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateBoard;
function generateBoard() {
  var tbl = document.createElement('table');
  var cellCounter = 0;
  for (var r = 0; r < 8; r++) {
    var tr = document.createElement('tr');
    tbl.appendChild(tr);
    for (var c = 0; c < 8; c++) {
      var td = document.createElement('td');
      if (r == 0 || r == 7 || c == 0 || c == 7) td.classList = ['board-cell'];
      if (r === 0) {
        td.id = 'cell' + c;
      } else if (c === 7 && r != 7) {
        td.id = 'cell' + (7 + r);
      } else if (c === 0 && r != 7) {
        td.id = 'cell' + (28 - r);
      } else if (r === 7) {
        td.id = 'cell' + (13 + (8 - c));
      }
      tr.appendChild(td);
    }
  }
  document.getElementById('board-container').appendChild(tbl);
}

},{}]},{},[2]);
