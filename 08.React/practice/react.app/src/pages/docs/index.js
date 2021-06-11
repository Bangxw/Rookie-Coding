import React from "react";

import FilterableProductTable from './thinkInReact'
import ContextComp from './context'
import PropsComp from './props'
import RenderPropsComp from './render-props'
import HOC from './hoc'
import State from './state'
import Form from './form'
import UncontrolledComp from './uncontrolled-comp'

export default function DocsComponent() {
  return (
    <>
      <FilterableProductTable /> <hr />
      <ContextComp /> <hr />
      <PropsComp /> <hr />
      { true ? <HOC /> : <RenderPropsComp />}  <hr />
      <State /> <hr />
      <Form /> <hr />
      <UncontrolledComp />
    </>
  )
}