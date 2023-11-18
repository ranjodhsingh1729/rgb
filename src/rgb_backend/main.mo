import Int "mo:base/Int";


actor {
  var attempts : Int = 0;
  var rightGuess : Int = 0;
  var wrongGuess : Int = 0;

  public func attemptsRightWrong(a : Int, r : Int, w : Int) {
    attempts := a;
    rightGuess := r;
    wrongGuess := w;
  };

  public query func getAttempts() : async Int{
    return attempts;
  };

public query func getRightGuess() : async Int{
    return rightGuess;
  };

  public query func getWrongGuess() : async Int{
    return wrongGuess;
  }

};