import React, { Component } from 'react'
import Tile from './Tile'
import Gallery from './Gallery'
import { Sidebar, Segment, Menu, Image, Header, Input, Button } from 'semantic-ui-react'

class Filter extends Component {
  state = { visible: false }

  handlePress = (e) => {
    if (e.key === 'Enter') {
      this.props.search()
    }
  }

  handleChange = (e) => {
    this.props.changeSubreddit(e.target.value)
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='subreddit'>
              <Input
                label='reddit.com/r/'
                placeholder='beerwithaview'
                value={this.props.subreddit}
                onKeyPress={this.props.handlePress}
                onChange={this.props.handleChange}
              />
            </Menu.Item>
            <Menu.Item name='sort_by'>
              Sort By
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Gallery />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Filter
