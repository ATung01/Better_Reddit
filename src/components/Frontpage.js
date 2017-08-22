import React from 'react'
import Browser from './Browser'
import Viewer from './Viewer'
import SubredditFilter from './SubredditFilter'

export default class Frontpage extends React.Component {
  state = {
    posts: [],
    viewer: [],
    subreddit: "itookapicture",
    sort_by: "new"
  }

  handleSubreddit = (subreddit) => {
    this.setState({
      subreddit: subreddit
    })
  }

  reddit = () => {
    return fetch(`http://localhost:8080/posts?sub_reddit=${this.state.subreddit}&sort_by=${this.state.sort_by}`)
      .then(resp => resp.json())
      .then(results =>
        this.setState({
          posts: results
        })
      )
  }

  componentDidMount(){
    this.reddit()
    }

  changeViewerState = (id) => {
    let selectedPost
    let oldView
    let newState = {}
    let selectedIndex = this.state.posts.findIndex((post) => {
      return post.id === id
    })

    oldView = this.state.viewer.splice(0, 1)
    selectedPost = this.state.posts.splice(selectedIndex, 1)
    newState["viewer"] = selectedPost
    newState["posts"] = this.state.posts.concat(oldView)

    this.setState(newState)
  }

  render(){
    return(
      <div>
        <SubredditFilter changeSubreddit={this.handleSubreddit} subreddit={this.state.subreddit} search={this.reddit} />
        <Viewer bigImage={this.state.viewer} updateLayout={this.refresh} />
        <Browser changeViewerState={this.changeViewerState} posts={this.state.posts} updateLayout={this.refresh} />
      </div>
    )
  }
}
