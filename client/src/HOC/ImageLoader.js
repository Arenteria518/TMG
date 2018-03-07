import React, { Component } from 'react';

//displays loading spinner if image not loaded.
const ImageLoaderHOC = (WrappedComponent) => {
    return class LoaderHOC extends Component {
        render() {
            return this.props.imgPath ? <WrappedComponent {...this.props}/> : <div className="loader" style={{height: this.props.height}}>Loading...</div>
        }
    }
};

export default ImageLoaderHOC;