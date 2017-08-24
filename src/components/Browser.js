import React from 'react'
import Tile from './Tile'
import Store from './Store'
import StackGrid from "react-stack-grid"
import SubredditFilter from './SubredditFilter'
import { Sidebar, Segment, Button, Menu } from 'semantic-ui-react'

export default class Browser extends React.Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  refresh = () => {
    this.grid.updateLayout()
  }

  render(){
    const { visible } = this.state
    return(
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide along' width='wide' visible={visible} icon='labeled' vertical >
            <Menu.Item name='subreddit'>
              <SubredditFilter
                search={this.props.search}
                changeSubreddit={this.props.changeSubreddit}
                toggleVisibility={this.toggleVisibility} />
            </Menu.Item>
            <Menu.Item name='sortBy'>
              <Store changeViewerState={this.props.changeViewerState} />
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
          <Button onClick={this.toggleVisibility}>Search</Button>
            <Segment basic>
              <StackGrid
                columnWidth={300}
                gridRef={grid => this.grid = grid}
                onLoad={this.refresh} >
                {this.props.posts.map((post) => {
                  return <Tile changeViewerState={this.props.changeViewerState} key={post.post_id} post={post} />
                  })
                }
              </StackGrid>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
