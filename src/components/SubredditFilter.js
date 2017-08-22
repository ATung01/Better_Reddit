import React from 'react'
import { Input, Segment } from 'semantic-ui-react'

const SubredditFilter = (props) => {

  const handleChange = e => {
    props.changeSubreddit(e.target.value)
  }

  const handlePress = e => {
    if (e.key === 'Enter') {
      props.search()
    }
  }

  return (
    <Segment padded>
      <Input
        label='reddit.com/r/'
        placeholder='beerwithaview'
        value={props.subreddit}
        onKeyPress={handlePress}
        onChange={handleChange}
      />
    </Segment>
  )

}

export default SubredditFilter;
