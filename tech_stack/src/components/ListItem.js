import React, { Component } from 'react';
import { 
  Text, 
  TouchableWithoutFeedback, 
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.item.description}
          </Text>
        </CardSection>
      );
    }
  }

  render(){
    // console.log("props:");
    // console.log(this.props);
    
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item; 

    return(
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
        >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;

  // return { expanded: expanded };
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
// Take actions creators and make sure that when they are called, 
// the actions go to the right place 
// then pass actions (all actions specified in src/actions/index.js)
// to components (ListItem) as props