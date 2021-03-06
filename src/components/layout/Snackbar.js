import React, {Component, PropTypes} from 'react';
import { Snackbar } from 'react-mdl';
import { connect } from 'react-redux';
import {setSnackbar} from 'playground/PlaygroundActions';
import { mediaQueries } from '../../playgroundSettings';

@connect(
  (state) => {
    return state.playground.snackbar;
  },
  (dispatch) => {
    return {
      dispatch
    };
  }
)

class Snack extends Component {

  static propTypes = {
    text:PropTypes.string,
    action:PropTypes.string
  }
  
  render() {
    let active = this.props.text ? true:false;
    return <div>
      {
        this.props.action ?
        <Snackbar
          active={active}
          onTimeout={()=>this.props.dispatch(setSnackbar({}))}
          onActionClick={this.props.action}
          action={this.props.actionName}>
          {this.props.text}
        </Snackbar>
        :
        <Snackbar
          active={active}
          onTimeout={()=>this.props.dispatch(setSnackbar({}))}>
          {this.props.text}
        </Snackbar>     
      }
      </div>;
  }
}  

export default Snack;
