import React from 'react';

import Review from './Review';

// don't change the Component name "App"
function App() {
  const [feedbackDraft, setFeedbackDraft] = React.useState({
    feedback: '',
    student: '',
  });

  function handleFeedbackChange(event) {
    const newFeedbackDraft = {
      ...feedbackDraft,
      feedback: event.target.value,
    };
    setFeedbackDraft(newFeedbackDraft);
  }

  function handleStudentChange(event) {
    const newFeedbackDraft = {
      ...feedbackDraft,
      student: event.target.value,
    };
    setFeedbackDraft(newFeedbackDraft);
  } 

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedbackDraft.feedback} onChange={handleFeedbackChange} />
        </p>
        <p>
          <label>Your Name</label>
          <input value={feedbackDraft.student} onChange={handleStudentChange} type="text" />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>
        
        <Review feedback={feedbackDraft.feedback} student={feedbackDraft.student}/>

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;