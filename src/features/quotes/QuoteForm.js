import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { addQuote } from "./quotesSlice";
import { useDispatch } from "react-redux";

function QuoteForm() {
  const dispatch= useDispatch();
      // set up a controlled form with internal state
    // look at the form to determine what keys need to go here
  const [formData, setFormData] = useState({
    content: "",
    author: "",
  });

  function handleChange(event) {
    // Handle Updating Component State
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); // Handle Form Submit event default
    const quote = { ...formData, id: uuid(), votes: 0 };// Create quote object from state
   dispatch (addQuote(quote)) // Pass quote object to action creator
   setFormData({ // Update component state to return to default state
    content: "",
    author: "",
   }); 
   }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      id="content"
                      name="content"
                      onChange={handleChange}
                      value={formData.content}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      className="form-control"
                      type="text"
                      id="author"
                      name="author"
                      onChange={handleChange}
                      value={formData.author}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
