import React, { useState } from 'react';

const AddQuizModal = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState({
    option1: '',
    option2: '',
    option3: '',
    option4: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle quiz submission
    console.log('Question:', question);
    console.log('Options:', options);
  };

  return (
    <>
      {/* Add course modal START */}
      <div className="modal fade" id="addQuiz" tabIndex={-1} aria-labelledby="addQuizLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title text-white" id="addQuizLabel">Add New Quiz</h5>
              <button type="button" className="btn btn-sm btn-light mb-0 ms-auto" data-bs-dismiss="modal" aria-label="Close">
                <i className="bi bi-x-lg" />
              </button>
            </div>
            <div className="modal-body">
              <form className="row text-start g-3" onSubmit={handleSubmit}>
                {/* Question */}
                <div className="col-12">
                  <label className="form-label">Question</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Write a question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                </div>
                {/* Answer options START */}
                <div className="col-6">
                  <label className="form-label">Option 1</label>
                  <input
                    className="form-control"
                    type="text"
                    name="option1"
                    placeholder="Write an option"
                    value={options.option1}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Option 2</label>
                  <input
                    className="form-control"
                    type="text"
                    name="option2"
                    placeholder="Write an option"
                    value={options.option2}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Option 3</label>
                  <input
                    className="form-control"
                    type="text"
                    name="option3"
                    placeholder="Write an option"
                    value={options.option3}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Option 4</label>
                  <input
                    className="form-control"
                    type="text"
                    name="option4"
                    placeholder="Write an option"
                    value={options.option4}
                    onChange={handleInputChange}
                  />
                </div>
                {/* Answer options END */}
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger-soft my-0" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-success my-0" onClick={handleSubmit}>Add Quiz</button>
            </div>
          </div>
        </div>
      </div>
      {/* Add course modal END */}
    </>
  );
};

export default AddQuizModal;
