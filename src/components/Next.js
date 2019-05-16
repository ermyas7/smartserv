import React, {Component} from 'react'

class Next extends Component{
    _scrollHorizontal = (evt) => {
        console.log(evt.target.parentNode.parentNode)
    }
    render(){
        let {direction} = this.props;
        return (
            <div className={`App-next App-next-${direction}`}
                onClick={this._scrollHorizontal}>
                <i className={`fa fa-angle-${direction}`}></i>
            </div>
          )
    }
}


export default Next