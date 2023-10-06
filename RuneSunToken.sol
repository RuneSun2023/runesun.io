// Forudsætter Solidity version 0.8.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RuneSunToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("RuneSunToken", "RST") {
        _mint(msg.sender, initialSupply);
    }
}
