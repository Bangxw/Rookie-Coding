import React from 'react'
import './index.css'

const products = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
]


class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={(e) => this.props.handleChange('filterText', e.target.value)} /><br />
        <label htmlFor="showProducts">
          <input
            type="checkbox"
            id="showProducts"
            checked={this.props.isStockOnly}
            onChange={(e) => this.props.handleChange('isStockOnly', e.target.checked)} /> Only show products in stock
        </label>
      </form>
    )
  }
}

function ProductCategoryRow(props) {
  return (
    <thead>
      <tr>
        <th colSpan='2'>{props.category}</th>
      </tr>
    </thead>
  )
}

function ProductRow(props) {
  return (
    <tbody>
      <tr>
        <td style={{ color: props.product.stocked ? '' : 'red' }}>{props.product.name}</td>
        <td>{props.product.price}</td>
      </tr>
    </tbody>
  )
}

function ProductTable(props) {
  let lastCategory = ''
  const productsElement = []
  props.products.forEach((item, index) => {
    if (item.category !== lastCategory) {
      productsElement.push(<ProductCategoryRow key={'row' + index} category={item.category} />)
      lastCategory = item.category
    }
    productsElement.push(<ProductRow key={index} product={item} />)
  })

  return (
    <table style={{ borderCollapse: 'collapse', width: '275px', textAlign: 'left' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      {productsElement}
    </table>
  )
}

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      isStockOnly: false
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(attr, value) {
    this.setState({
      [attr]: value
    })
  }

  render() {
    const { filterText, isStockOnly } = this.state
    const filterProducts = []

    const productsCopy = isStockOnly ? products.filter(item => item.stocked) : products
    productsCopy.forEach((item, index) => {
      if (item.name.toUpperCase().indexOf(filterText.toUpperCase()) > -1
        || item.price.indexOf(filterText) > -1)
        filterProducts.push(item)
    })
    return (
      <>
        <SearchBar filterText={filterText} isStockOnly={isStockOnly} handleChange={this.handleChange} /> <br />
        <ProductTable products={filterProducts} />
      </>
    )
  }
}