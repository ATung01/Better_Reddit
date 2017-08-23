import React from 'react'
import Browser from './Browser'
import Viewer from './Viewer'
import SubredditFilter from './SubredditFilter'
import Header from './Header'
import fetch from 'isomorphic-fetch'



export default class Frontpage extends React.Component {
  state = {
    posts: [],
    next_posts: [],
    viewer: {},
    subreddit: "earthporn",
    sort_by: "top"
  }

  handleSubreddit = (subreddit) => {
    this.setState({
      subreddit: subreddit
    })
  }

  addToStore = () => {
    let myInit = {
      method: "post",
      body: JSON.stringify(this.state.viewer),
      headers: {
        "Content-Type": "application/json"
      }
    }
    return fetch("http://localhost:8080/posts", myInit )
      .then(resp => resp.json()).then(result => console.log(result))

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

  morePosts = () => {
    fetch(`http://localhost:8080/posts/next_page?sub_reddit=${this.state.subreddit}&sort_by=${this.state.sort_by}`)
      .then(resp => resp.json())
      .then(results =>
        {console.log(results),
        this.setState({
          posts: [...this.state.posts, ...results],
          next_posts: results
        })}
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
      return post.post_id === id
    })

    oldView = [this.state.viewer]
    selectedPost = this.state.posts.splice(selectedIndex, 1)
    newState["viewer"] = selectedPost[0]
    newState["posts"] = oldView.concat(this.state.posts)

    this.setState(newState)
  }


  render(){
    return(
      <div>
        <Header />
        <SubredditFilter changeSubreddit={this.handleSubreddit} subreddit={this.state.subreddit} search={this.reddit} />
        <Viewer selected={this.state.viewer} addToStore={this.addToStore} />

        <Browser changeViewerState={this.changeViewerState} posts={this.state.posts} next_posts={this.state.next_posts} updateLayout={this.refresh} morePosts={this.morePosts}/>

      </div>
    )
  }
}
