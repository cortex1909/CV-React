import React, { Component } from 'react'

export default class Info extends Component {
  render() {
    const { name } = this.props.about
    console.log(name)
    return <div>{name}</div>
  }
}
