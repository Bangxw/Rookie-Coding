import React from "react";

import FilterableProductTable from './thinkInReact'
import ContextComp from './context'
import PropsComp from './props'
import RenderPropsComp from './render-props'
import HOC from './hoc'
import State from './state'

export default function DocsComponent() {
  return (
    <>
      <FilterableProductTable /> <hr />
      <ContextComp /> <hr />
      <PropsComp /> <hr />
      { true ? <HOC /> : <RenderPropsComp />}  <hr />
      <State />
    </>
  )
}