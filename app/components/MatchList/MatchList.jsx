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
      <button class="cie10-match" onClick={(e) => handleCIE10ItemClick({...item})}>
        <p class="cie10-match__index">0</p>
        <p class="cie10-match__code">
          {item.code}
        </p>
        <p class="cie10-match__name">
          {item.name}
        </p>
      </button>
    )
  }
}

export default class MatchList extends Component {
  render() {
    const { matches, handleCIE10ItemClick } = this.props
    const matchElms = matches.map((match) => (
      <Match
        item={match}
        handleCIE10ItemClick={handleCIE10ItemClick}
      />
    ))

    return (
      <div class="diagnostic-impression__matches">
        {matchElms}
      </div>
    )
  }
}
