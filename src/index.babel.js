import React, {Component} from 'react'

class TagBox extends Component {
  constructor () {
    super()
    this.handleEnter = this.handleEnter.bind(this)
  }
  state = {
    tags: []
  }
  handleEnter (e) {
    const key = e.which
    let value = e.target.value

    if (key === 13 && value) {
      let tags = this.state.tags

      tags.push(value)
      e.target.value = ''
      this.setState({
        tags: tags
      })
    }
  }
  render () {
    const props = this.props
    return (
      <div>
        <input {...props} onKeyDown={this.handleEnter} />
        <div ref="tagsContent">
          {this.state.tags.map((t, i) => {
            return (
              <span className="tagbox-tag" key={i}>{t}</span>
            )
          })}
        </div>
      </div>
    )
  }
}

export default TagBox
