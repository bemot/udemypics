import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //console.log(this.imageRef);
    //console.log(this.imageRef.current.clientHeight);
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    //console.log(this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 2) + 1;
    console.log("height = ", height);
    console.log("spans = ", spans);
    this.setState({ spans: spans });
  };

  render() {
    //destructure this.props.image
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
