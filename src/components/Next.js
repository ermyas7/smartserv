import React, {Component} from 'react'

class Next extends Component{
    render(){
        let {direction} = this.props;
        return (
            <div className={`App-next App-next-${direction}`}
                onClick={ () => this.props.transform(direction)}>
                <i className={`fa fa-angle-${direction}`}></i>
            </div>
          )
    }
}


export default Next