webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _ChampionshipBeltPath = __webpack_require__(178);
	
	var _ChampionshipBeltPath2 = _interopRequireDefault(_ChampionshipBeltPath);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mount = document.getElementById('mount');
	
	(0, _reactDom.render)(_react2.default.createElement(_ChampionshipBeltPath2.default, null), mount);

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _dataService = __webpack_require__(179);
	
	var _MatchupTile = __webpack_require__(180);
	
	var _MatchupTile2 = _interopRequireDefault(_MatchupTile);
	
	var _MatchupPopover = __webpack_require__(183);
	
	var _MatchupPopover2 = _interopRequireDefault(_MatchupPopover);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ChampionshipBeltPath = function (_Component) {
	    _inherits(ChampionshipBeltPath, _Component);
	
	    function ChampionshipBeltPath() {
	        _classCallCheck(this, ChampionshipBeltPath);
	
	        var _this = _possibleConstructorReturn(this, (ChampionshipBeltPath.__proto__ || Object.getPrototypeOf(ChampionshipBeltPath)).call(this));
	
	        _this.onMatchupSelect = _this.onMatchupSelect.bind(_this);
	
	        _this.state = {
	            results: [],
	            selectedWeek: null,
	            isLoading: true
	        };
	        return _this;
	    }
	
	    _createClass(ChampionshipBeltPath, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            (0, _dataService.getResults)().then(function (results) {
	                _this2.setState({
	                    results: results,
	                    isLoading: false
	                });
	            });
	        }
	    }, {
	        key: 'onMatchupSelect',
	        value: function onMatchupSelect(week) {
	            var selectedWeek = this.state.selectedWeek;
	
	            var newWeek = selectedWeek === week ? null : week;
	
	            this.setState({
	                selectedWeek: newWeek
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;
	
	            var _state = this.state;
	            var results = _state.results;
	            var isLoading = _state.isLoading;
	            var selectedWeek = _state.selectedWeek;
	
	
	            var resultsElements = results.map(function (r) {
	                return _react2.default.createElement(MatchupWithPopover, { key: r.week,
	                    showPopover: r.week === selectedWeek,
	                    week: r.week,
	                    holder: r.holder,
	                    challenger: r.challenger,
	                    onMatchupSelected: _this3.onMatchupSelect
	                });
	            });
	
	            var elementBody = isLoading ? _react2.default.createElement(
	                'div',
	                null,
	                'Loading...'
	            ) : resultsElements;
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    'Belt Path'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { style: { display: 'flex' } },
	                    elementBody
	                )
	            );
	        }
	    }]);
	
	    return ChampionshipBeltPath;
	}(_react.Component);
	
	var MatchupWithPopover = function MatchupWithPopover(_ref) {
	    var showPopover = _ref.showPopover;
	    var week = _ref.week;
	    var holder = _ref.holder;
	    var challenger = _ref.challenger;
	    var onMatchupSelected = _ref.onMatchupSelected;
	
	    var popover = showPopover ? _react2.default.createElement(_MatchupPopover2.default, { holder: holder, challenger: challenger }) : '';
	
	    return _react2.default.createElement(
	        'div',
	        { style: { position: 'relative' } },
	        popover,
	        _react2.default.createElement(_MatchupTile2.default, { week: week,
	            holder: holder,
	            challenger: challenger,
	            onMatchupSelected: onMatchupSelected })
	    );
	};
	
	exports.default = ChampionshipBeltPath;

/***/ },

/***/ 179:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var teams = {
	    1: {
	        team: 'Shirtless Vince McMahon',
	        imageUrl: 'http://imgur.com/8fDKrst.png'
	    },
	    2: {
	        team: 'Los Charros',
	        imageUrl: 'http://imgur.com/wRekjOw.png'
	    },
	    3: {
	        team: 'Going Bald(win)',
	        imageUrl: 'http://imgur.com/bVBbu0f.png'
	    },
	    4: {
	        team: 'Team Bobarino',
	        imageUrl: 'http://imgur.com/N9huQtD.png'
	    },
	    5: {
	        team: 'Pack Lives Matter',
	        imageUrl: 'http://imgur.com/5we5ldf.png'
	    },
	    6: {
	        team: 'Who Art Thou',
	        imageUrl: 'http://imgur.com/a8vFvDc.png'
	    },
	    7: {
	        team: 'Fitz Rawl About The Benjamins',
	        imageUrl: 'http://imgur.com/KYrYeWR.png'
	    },
	    8: {
	        team: 'Large Lacy Lingerie',
	        imageUrl: 'http://imgur.com/XjzsHVZ.png'
	    },
	    9: {
	        team: 'Luby\'s Legends Lube',
	        imageUrl: 'http://imgur.com/vV3953r.png'
	    },
	    10: {
	        team: 'Team DankinData',
	        imageUrl: 'http://imgur.com/gzULWnG.png'
	    },
	    11: {
	        team: 'My Team Cheats',
	        imageUrl: 'http://imgur.com/ihCIv62.png'
	    },
	    12: {
	        team: 'Spider 2 Y Banana Threat',
	        imageUrl: ''
	    }
	};
	
	var results = [{
	    week: 1,
	    holder: {
	        isWinner: false,
	        teamId: 1,
	        score: 132
	    },
	    challenger: {
	        isWinner: true,
	        teamId: 3,
	        score: 145
	    }
	}, {
	    week: 2,
	    holder: {
	        isWinner: false,
	        teamId: 3,
	        score: 94
	    },
	    challenger: {
	        isWinner: true,
	        teamId: 2,
	        score: 126
	    }
	}, {
	    week: 3,
	    holder: {
	        isWinner: true,
	        teamId: 2,
	        score: 129
	    },
	    challenger: {
	        isWinner: false,
	        teamId: 1,
	        score: 121
	    }
	}, {
	    week: 4,
	    holder: {
	        teamId: 2,
	        isWinner: true,
	        score: 104
	    },
	    challenger: {
	        teamId: 8,
	        isWinner: false,
	        score: 91
	    }
	}, {
	    week: 5,
	    holder: {
	        teamId: 2,
	        isWinner: false,
	        score: 115
	    },
	    challenger: {
	        teamId: 7,
	        isWinner: true,
	        score: 183
	    }
	}, {
	    week: 6,
	    holder: {
	        teamId: 7
	    },
	    challenger: {
	        teamId: 6
	    }
	}];
	
	var getResults = exports.getResults = function getResults() {
	    var promise = new Promise(function (resolve, reject) {
	        var join = results.reduce(function (acc, next) {
	            var holder = clone(teams[next.holder.teamId], next.holder);
	            var challenger = clone(teams[next.challenger.teamId], next.challenger);
	
	            acc.push(clone(next, { holder: holder, challenger: challenger }));
	
	            return acc;
	        }, []);
	        resolve(join);
	    });
	
	    return promise;
	};
	
	function clone() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }
	
	    return Object.assign.apply(Object, [{}].concat(args));
	}

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _WinnerTile = __webpack_require__(181);
	
	var _WinnerTile2 = _interopRequireDefault(_WinnerTile);
	
	var _shapes = __webpack_require__(182);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getWinner = function getWinner() {
	    for (var _len = arguments.length, teams = Array(_len), _key = 0; _key < _len; _key++) {
	        teams[_key] = arguments[_key];
	    }
	
	    return teams.filter(function (t) {
	        return t.isWinner;
	    })[0];
	};
	
	var style = {
	    'height': '100px',
	    'width': '100px',
	    'border': '1px solid black',
	    'marginRight': '2px'
	};
	
	var MatchupTile = function MatchupTile(_ref) {
	    var week = _ref.week;
	    var holder = _ref.holder;
	    var challenger = _ref.challenger;
	    var onMatchupSelected = _ref.onMatchupSelected;
	
	
	    var isDecided = holder.score != null || holder.score != null;
	
	    //if not decided...show blank tile for now
	    var bodyElement = isDecided ? _react2.default.createElement(_WinnerTile2.default, { team: getWinner(holder, challenger) }) : _react2.default.createElement(
	        'div',
	        { className: 'pending-matchup' },
	        'Undecided!'
	    );
	
	    return _react2.default.createElement(
	        'div',
	        null,
	        week,
	        _react2.default.createElement(
	            'div',
	            { className: 'matchup-tile',
	                style: style,
	                onClick: function onClick() {
	                    return onMatchupSelected(week);
	                }
	            },
	            bodyElement
	        )
	    );
	};
	
	MatchupTile.propTypes = {
	    week: _react.PropTypes.number.isRequired,
	    holder: _shapes.teamShape,
	    challenger: _shapes.teamShape,
	    onMatchupSelected: _react.PropTypes.func.isRequired
	};
	
	exports.default = MatchupTile;

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var style = {
	    maxHeight: '100px',
	    margin: 'auto'
	};
	
	var WinnerTile = function WinnerTile(_ref) {
	    var team = _ref.team;
	
	    return _react2.default.createElement(
	        'div',
	        { style: style, className: 'mm-tile' },
	        _react2.default.createElement('img', { className: 'mm-tile__winner-image', style: { maxHeight: '100px', display: 'block' }, src: team.imageUrl, alt: team.team })
	    );
	};
	
	WinnerTile.propTypes = _react.teamShape;
	
	exports.default = WinnerTile;

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.teamShape = undefined;
	
	var _react = __webpack_require__(1);
	
	var teamShape = exports.teamShape = _react.PropTypes.shape({
	    team: _react.PropTypes.string.isRequired,
	    imageUrl: _react.PropTypes.string.isRequired,
	    isWinner: _react.PropTypes.bool,
	    score: _react.PropTypes.number
	}).isRequired;

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _shapes = __webpack_require__(182);
	
	var _MatchupTeam = __webpack_require__(184);
	
	var _MatchupTeam2 = _interopRequireDefault(_MatchupTeam);
	
	var _matchupPopover = __webpack_require__(187);
	
	var css = _interopRequireWildcard(_matchupPopover);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MatchupPopover = function MatchupPopover(_ref) {
	    var holder = _ref.holder;
	    var challenger = _ref.challenger;
	
	    return _react2.default.createElement(
	        'div',
	        { className: 'mm-popover' },
	        _react2.default.createElement(
	            'div',
	            { className: 'mm-popover__team' },
	            _react2.default.createElement(_MatchupTeam2.default, { team: holder })
	        ),
	        _react2.default.createElement('div', { className: 'mm-popover__divider' }),
	        _react2.default.createElement(
	            'div',
	            { className: 'mm-popover__team' },
	            _react2.default.createElement(_MatchupTeam2.default, { team: challenger })
	        )
	    );
	};
	
	MatchupPopover.propTypes = {
	    holder: _shapes.teamShape,
	    challenger: _shapes.teamShape
	};
	
	exports.default = MatchupPopover;

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _shapes = __webpack_require__(182);
	
	var _matchupTeam = __webpack_require__(185);
	
	var _matchupTeam2 = _interopRequireDefault(_matchupTeam);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MatchupTeam = function MatchupTeam(_ref) {
	    var team = _ref.team;
	    var teamName = team.team;
	    var isWinner = team.isWinner;
	    var score = team.score;
	
	    var resultClass = isWinner ? 'winner' : '';
	    return _react2.default.createElement(
	        'div',
	        { className: resultClass + ' mm-matchup-team' },
	        _react2.default.createElement(
	            'div',
	            { className: 'mm-matchup-team__team-name' },
	            teamName
	        ),
	        _react2.default.createElement(
	            'div',
	            { className: 'mm-matchup-team__score' },
	            score
	        ),
	        _react2.default.createElement('img', { className: 'mm-matchup-team__team-image',
	            src: team.imageUrl,
	            alt: team.team })
	    );
	};
	
	MatchupTeam.propTypes = _shapes.teamShape;
	
	exports.default = MatchupTeam;

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(186);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(177)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./matchup-team.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./matchup-team.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(176)();
	// imports
	
	
	// module
	exports.push([module.id, ".mm-matchup-team {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.mm-matchup-team__team-name {\n  font-size: 0.9em;\n}\n.mm-matchup-team__score {\n  color: gray;\n  font-size: 0.8em;\n}\n.mm-matchup-team__team-image {\n  display: block;\n  width: 50px;\n  border: 1px solid lightgray;\n  margin: auto;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(188);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(177)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./matchup-popover.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./matchup-popover.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(176)();
	// imports
	
	
	// module
	exports.push([module.id, ".mm-popover {\n  position: absolute;\n  height: 120px;\n  width: 230px;\n  padding: 8px;\n  border: 1px solid grey;\n  border-radius: 4px;\n  left: -50px;\n  bottom: -140px;\n  display: flex;\n  justify-content: space-between;\n}\n.mm-popover__team {\n  width: 45%;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=championship-belt.js.map