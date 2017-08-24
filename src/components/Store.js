import React from 'react'
import Slider from 'react-slick'
import { Container, Image } from 'semantic-ui-react'

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

  handleClick = (event) => {
    this.props.changeViewerState(
      this.state.store.find(p => p.post_id === event.target.attributes[0].value)
    )
  }

  handleEmpty = () => {
    if (this.state.store.length !== 0){
      return this.state.store.map(p => {
        return <Container key={p.post_id} ><Image src={p.thumbnail} shape='rounded' data={p.post_id} onClick={this.handleClick} /></Container>
      })
    }
    else {
      return <p>Store Empty</p>
    }
  }

  render() {
    let settings = {
      arrows: true,
      infinite: true,
      slidesToShow: 10,
      slidesToScroll: 3,
      vertical: true
    };
    return (
      <Container centered >
        <Slider {...settings}>
          {this.handleEmpty()}
        </Slider>
      </Container >
    );
  }
}
