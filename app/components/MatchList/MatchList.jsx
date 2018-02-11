import React, {
  Component,
} from 'react'

class Match extends Component {
  render() {
    const {
      handleCIE10ItemClick,
      item,
    } = this.props

    return (
      <button className="cie10-match" onClick={(e) => handleCIE10ItemClick({...item})}>
        <p className="cie10-match__index">
          {item.index}
        </p>
        <p className="cie10-match__code">
          {item.code}
        </p>
        <p className="cie10-match__name">
          {item.name}
        </p>
      </button>
    )
  }
}

export default class MatchList extends Component {
  render() {
    const {
      matches,
      handleCIE10ItemClick,
      show,
      handleClose,
    } = this.props
    const matchElms = matches.map((match) => (
      <Match
        item={match}
        handleCIE10ItemClick={handleCIE10ItemClick}
        key={match.code}
      />
    ))

    return (
      <div
        style={{ display: show ? 'block' : 'none' }}
        className="diagnostic-impression__matches-container"
      >
        <div className="diagnostic-impression__matches">
          {matchElms}
        </div>
        <button
          onClick={() => handleClose(false)}
          className="diagnostic-impression__matches-close"
        >
          x
        </button>
      </div>
    )
  }
}
