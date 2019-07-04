import React from 'react'
import { FilterTypes } from '../../constants'
import FilterButton from './filterButton'

const Filter = () => {
  return (
    <div>
      <FilterButton filter={FilterTypes.ALL}>{FilterTypes.ALL}</FilterButton> &nbsp;
      <FilterButton filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</FilterButton> &nbsp;
      <FilterButton filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</FilterButton>
    </div>
  )
}

export default Filter