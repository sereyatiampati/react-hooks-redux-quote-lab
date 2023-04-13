import React from "react";
import { useDispatch } from "react-redux";
import { removeQuote, upvoteQuote, downvoteQuote } from "./quotesSlice";

function QuoteCard(props) {
  const dispatch = useDispatch()
  const {quote}=props
  
  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{/*Render Quote Content*/quote.content}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{/*Render Quote Author*/quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary" onClick={()=> dispatch(upvoteQuote(quote.id))}>
              Upvote
            </button>
            <button type="button" className="btn btn-secondary" onClick={()=> dispatch(downvoteQuote(quote.id))}>
              Downvote
            </button>
            <button type="button" className="btn btn-danger" onClick={()=> dispatch(removeQuote(quote.id))}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {/*Render Quote Votes*/ quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
