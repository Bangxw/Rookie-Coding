import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { setFilter } from '../actions';

const FilterButton = ({ activeFilter, children, handleClick, filter }) => {
  if (activeFilter === filter)
    return (<Button type="primary">{children}</Button>)
  else {
    return (
      <Button onClick={(ev) => { handleClick(ev, filter) }}>
        {children}
      </Button>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleClick(ev, filterType) {
    ev.preventDefault()
    dispatch(setFilter(filterType))
  }
})

const mapStateToProps = state => ({
  activeFilter: state.filter
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton)