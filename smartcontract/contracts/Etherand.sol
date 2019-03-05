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

  function callFor(address _to, uint256 _gas, bytes calldata _code)
    external
    payable
    onlyCommittee
    returns (bool _result)
  {
    (_result,) = _to.call.value(msg.value).gas(_gas)(_code);
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
