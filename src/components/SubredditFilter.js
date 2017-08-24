import React from 'react'
import { Input } from 'semantic-ui-react'

const SubredditFilter = (props) => {

  const handleChange = e => {
    props.changeSubreddit(e.target.value)
  }

  const handlePress = e => {
    if (e.key === 'Enter') {
      props.search()
      props.toggleVisibility()
    }
  }

  return (
      <Input
        label='reddit.com/r/'
        placeholder='beerwithaview'
        value={props.subreddit}
        onKeyPress={handlePress}
        onChange={handleChange}
      />
  )

}

export default SubredditFilter;
