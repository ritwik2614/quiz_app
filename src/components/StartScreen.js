function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
      <div style={{fontSize:'15px', marginTop:'30px',position:'absolute', bottom: '10px'}}>Copyright © 2024 , Quiz Application By <b>~ Ritwik Chatterjee</b></div>
    </div>
  );
}

export default StartScreen;
