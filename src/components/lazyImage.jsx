import React from "react";

class LazyBackground extends React.Component {
  state = { src: null };

  componentDidMount() {
    const { link } = this.props;
    console.log({ link, props: this.props });

    const imageLoader = new Image();
    imageLoader.src = link;

    imageLoader.onload = () => {
      this.setState({ link });
      this.props.onload();
      console.log("loaded");
    };
  }

  render() {
    const { children } = this.props;
    return (
      <div
        {...this.props}
        style={{
          backgroundImage: `url(${this.state.link || this.props.placeholder})`,
        }}
      >
        {}
        {children}
      </div>
    );
  }
}

export default LazyBackground;
