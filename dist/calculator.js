webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _Calculator = __webpack_require__(172);
	
	var _Calculator2 = _interopRequireDefault(_Calculator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mount = document.getElementById('mount');
	
	(0, _reactDom.render)(_react2.default.createElement(_Calculator2.default, null), mount);

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _calculatorService = __webpack_require__(173);
	
	var calculator = _interopRequireWildcard(_calculatorService);
	
	var _site = __webpack_require__(174);
	
	var css = _interopRequireWildcard(_site);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Calculator = function (_Component) {
	    _inherits(Calculator, _Component);
	
	    function Calculator() {
	        _classCallCheck(this, Calculator);
	
	        var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this));
	
	        _this.changeRound = _this.changeRound.bind(_this);
	        _this.changePick = _this.changePick.bind(_this);
	
	        _this.state = {
	            round: null,
	            pick: null
	        };
	        return _this;
	    }
	
	    _createClass(Calculator, [{
	        key: 'changeRound',
	        value: function changeRound(evt) {
	            var round = evt.target.value;
	            var newState = { pick: null, error: null, roundLost: null };
	            if (round == 0) {
	                newState.round = null;
	            } else {
	                round = Number(round);
	
	                var _calculator$getKeeper = calculator.getKeeperRoundByRound(round);
	
	                var error = _calculator$getKeeper.error;
	                var roundLost = _calculator$getKeeper.roundLost;
	
	                newState = _extends({}, newState, { round: round, error: error, roundLost: roundLost });
	            }
	
	            this.setState(newState);
	        }
	    }, {
	        key: 'changePick',
	        value: function changePick(evt) {
	            var pick = evt.target.value;
	            var newState = { round: null, error: null, roundLost: null };
	            if (pick == 0) {
	                newState.pick = null;
	            } else {
	                pick = Number(pick);
	
	                var _calculator$getKeeper2 = calculator.getKeeperRoundByPick(pick);
	
	                var error = _calculator$getKeeper2.error;
	                var roundLost = _calculator$getKeeper2.roundLost;
	
	                newState = _extends({}, newState, { pick: pick, error: error, roundLost: roundLost });
	            }
	
	            this.setState(newState);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state;
	            var pick = _state.pick;
	            var round = _state.round;
	            var roundLost = _state.roundLost;
	            var error = _state.error;
	
	
	            var result = error != null ? _react2.default.createElement(
	                'div',
	                { className: 'error' },
	                error.message
	            ) : _react2.default.createElement(
	                'div',
	                { className: 'results' },
	                roundLost
	            );
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'calculator' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'form' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'row' },
	                        _react2.default.createElement(
	                            'label',
	                            { htmlFor: 'round' },
	                            'Round: '
	                        ),
	                        _react2.default.createElement('input', { type: 'number', value: round || 0, onInput: this.changeRound })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'row' },
	                        _react2.default.createElement(
	                            'label',
	                            { htmlFor: 'pick' },
	                            'Pick:'
	                        ),
	                        _react2.default.createElement('input', { type: 'number', value: pick || 0, onInput: this.changePick })
	                    )
	                ),
	                result
	            );
	        }
	    }]);
	
	    return Calculator;
	}(_react.Component);
	
	exports.default = Calculator;

/***/ },

/***/ 173:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getKeeperRoundByRound = getKeeperRoundByRound;
	exports.getKeeperRoundByPick = getKeeperRoundByPick;
	var numberTeamsPerLeague = 12;
	
	function getRoundLost(round) {
	    var roundLost = round - 1;
	    var maxRoundLost = 8;
	
	    return roundLost > maxRoundLost ? maxRoundLost : roundLost;
	}
	
	function validateRound(round) {
	    if (round < 1) {
	        return {
	            error: {
	                message: 'You can\'t keep a pick selected in the first round.'
	            }
	        };
	    }
	
	    return {
	        roundLost: round
	    };
	}
	
	function getKeeperRoundByRound(round) {
	    var roundLost = getRoundLost(round);
	
	    return validateRound(roundLost);
	}
	
	function getKeeperRoundByPick(pick) {
	    var round = Math.ceil(pick / numberTeamsPerLeague);
	
	    var roundLost = getRoundLost(round);
	
	    return validateRound(roundLost);
	}

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(175);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(177)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./site.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./site.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(176)();
	// imports
	
	
	// module
	exports.push([module.id, ".important {\n  border: 1px solid lightgrey;\n  background-color: #e8a0a0;\n  padding: 10px;\n  border-radius: 10px;\n}\n.results {\n  font-size: 2em;\n}\n.error {\n  color: red;\n}\n.ok {\n  font-size: 3em;\n  color: green;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=calculator.js.map