import React, { Component } from "react";

class Match extends Component {
  render() {
    const { handleCIE10ItemClick, item } = this.props;

    return (
      <button
        className="cie10-match"
        onClick={e => handleCIE10ItemClick({ ...item })}
      >
        <p className="cie10-match__index">{item.index}</p>
        <p className="cie10-match__code">{item.code}</p>
        <p className="cie10-match__name">{item.name}</p>

        <style jsx>{`
          .cie10-match {
            border: none;
            background-color: transparent;
            display: flex;
            width: 100%;
            border-bottom: 1px solid;
            border-radius: 0;
            text-align: left;
          }

          .cie10-match:last-child {
            border-bottom: none;
          }

          .cie10-match__index {
            width: 10%;
          }

          .cie10-match__code {
            width: 30%;
          }

          .cie10-match__name {
            width: 60%;
          }
        `}</style>
      </button>
    );
  }
}

export default class MatchList extends Component {
  render() {
    const { matches, handleCIE10ItemClick, show, handleClose } = this.props;
    const matchElms = matches.map(match => (
      <Match
        item={match}
        handleCIE10ItemClick={handleCIE10ItemClick}
        key={match.code}
      />
    ));

    return (
      <div
        style={{ display: show ? "block" : "none" }}
        className="diagnostic-impression__matches-container"
      >
        <div className="diagnostic-impression__matches">{matchElms}</div>
        <button
          onClick={() => handleClose(false)}
          className="diagnostic-impression__matches-close"
        >
          x
        </button>

        <style jsx>{`
          .diagnostic-impression__matches-container {
            position: absolute;
            z-index: 1;
            top: 60px;
            left: 0;
            width: 100%;
          }

          .diagnostic-impression__matches {
            background-color: white;
            width: 100%;
            max-height: 334px;
            overflow: auto;
            border-radius: 4px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
            border: 1px solid #888181;
          }

          .diagnostic-impression__matches-close {
            position: absolute;
            right: 0;
            top: -38px;
            padding: 0.5rem 1rem;
            border-radius: 4px;
          }
        `}</style>
      </div>
    );
  }
}
