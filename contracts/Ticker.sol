pragma solidity ^0.4.3;

contract Ticker {
	uint public val;

	function Ticker(uint _val) {
		val = _val;
	}

	function tick () {
		val += 1;
	}
}
