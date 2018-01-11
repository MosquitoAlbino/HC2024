import React, {
  Component
}                from 'react'
import _         from 'lodash'
import Input     from 'components/Input'
import MatchList from 'components/MatchList'
import CIE10Row  from './CIE10Row'

export default class CIE10 extends Component {
  MIN_CHARACTERS = 3
  MAX_MATCHES = 8

  state = {
    filteredCIE10: [],
    CIE10AddedItems: [],
    showMatchList: false,
  }

  handleChange = (event) => {
    const value = event.target.value

    if (value.length < this.MIN_CHARACTERS) return

    const filteredCIE10 = _(window.cie10DB)
      .filter(function(cie10Item) {
        const cie10Key = cie10Item.c.toLowerCase()
        const cie10Value = cie10Item.d.toLowerCase()
        const cie10keyContainValue = cie10Key.indexOf(value) > -1
        const cie10ValueContainValue = cie10Value.indexOf(value) > -1

        return cie10keyContainValue || cie10ValueContainValue
      })
      .map(cie10Item => ({ code: cie10Item.c, name: cie10Item.d }))
      .take(this.MAX_MATCHES)
      .value()

    this.setState({ filteredCIE10, showMatchList: true })
  }

  handleCIE10ItemClick = (cie10Item) => {
    const CIE10AddedItems = [
      ...this.state.CIE10AddedItems,
      cie10Item,
    ]

    this.setState({ CIE10AddedItems, showMatchList: false })
  }

  handleDelete = (itemToDelete) => {
    const newAddedItems = (
      this.state.CIE10AddedItems.filter((addedItem) => {
        return addedItem.code !== itemToDelete.code
      })
    )
    this.setState({ CIE10AddedItems: newAddedItems })
  }

  render() {
    const cie10Rows = this.state.CIE10AddedItems.map(addedItem => {
      return (
        <CIE10Row
          item={addedItem}
          handleDelete={this.handleDelete}
          key={addedItem.code}
        />
      )
    })

    return (
      <div className="diagnostic-impression">
        <Input onInput={this.handleChange} label="Buscar" />
        <div style={{ display: this.state.showMatchList ? 'block' : 'none' }}>
          <MatchList
            matches={this.state.filteredCIE10}
            handleCIE10ItemClick={this.handleCIE10ItemClick}
          />
        </div>
        {
          cie10Rows.length ? (
            <h4>Impresiones</h4>
          ) : null
        }
        <div>{cie10Rows}</div>
      </div>
    )
  }
}
