import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

class Home extends Component {
  render() {
    return (
        <div className="Home">
            <MetaTags>
                <title>Home Page</title>
                <meta name="description" content="Some description." />
                <meta property="og:title" content="MyApp" />
                {/* <meta property="og:image" content="path/to/image.jpg" /> */}
            </MetaTags>
            mern app template
        </div>

    );
  }
}

export default Home;
