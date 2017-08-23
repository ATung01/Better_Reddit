import React from 'react'
import Slider from 'react-slick'
import { Segment, Image } from 'semantic-ui-react'

export default class Store extends React.Component {
  constructor() {
    super()
    this.state = {
      store: []
    }
  }

  getStore = () => {
    return fetch("http://localhost:8080/posts/store")
      .then(res => res.json())
      .then(res => this.setState({
        store: res
      })
    )
  }

  componentDidMount() {
    this.getStore()
  }

  handleEmpty = () => {
    if (this.state.store.length !== 0){
      return this.state.store.map(p => {
        return <div key={p.post_id} ><Image src={p.thumbnail} /></div>
      })
    }
    else {
      return <p>Store Empty</p>
    }
  }

  render() {
    let settings = {
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <Segment >
        <Slider {...settings}>
          {this.handleEmpty()}
        </Slider>
      </Segment >
    );
  }
}
