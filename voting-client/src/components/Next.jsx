import React ,{PureComponent} from 'react';

export default class Next extends PureComponent{
    render(){
        return <div className ="management">
              <button ref="next" className="next" onClick={this.props.next}>
                        Next</button>
              </div>
    }
}