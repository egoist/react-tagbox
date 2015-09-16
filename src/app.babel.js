import React, {Component} from 'react'
import TagBox from './index.babel'

class App extends Component {
  handleClick () {
    console.log(this.refs.tagbox.refs.tagsContent.getDOMNode().innerHTML)
  }
  render () {
    return (
      <div>
        <TagBox className="tagbox" ref="tagbox" />
        <button onClick={this.handleClick.bind(this)}>Get tags</button>
      </div>
    )
  }
}

React.render(<App />, document.body)
