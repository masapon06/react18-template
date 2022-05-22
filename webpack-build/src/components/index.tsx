import React from 'react'

export const Components = () => {
  const [component, useComponent] = React.useState<any>(<div>not load</div>)

  const loadComponent = async () => {
    const { default: loadElement } = await import(
      /* webpackChunkName: "LazyLoadComponent" */ './LazyLoadComponent'
    )
    return loadElement
  }

  const getComponent = async () => {
    const component = await loadComponent()
    useComponent(component)
  }

  const Component = () => component

  return (
    <>
      <button onClick={() => getComponent()}>load</button>
      <Component />
    </>
  )
}
