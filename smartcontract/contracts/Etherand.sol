pragma solidity 0.5.1;

contract Committee {
  /* EVENT */
  event SetCommittee(address committee);

  /* STORAGE */
  address public committee;

  /* FUNCTION */
  function setCommittee(address _committee) public onlyCommittee {
    require(_committee != address(0));
    committee = _committee;

    emit SetCommittee(_committee);
  }

  /* MODIFIER */
  modifier onlyCommittee {
    require(msg.sender == committee);
    _;
  }
}

contract Etherand is Committee {
  constructor() public {
    committee = msg.sender;
  }
}
