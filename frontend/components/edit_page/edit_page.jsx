import React from 'react';
import { Link } from 'react-router-dom';

import ArtistFormContainer from '../artists/artist_form_container';


class EditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "add artist"
    };
  }

  renderForm() {
    if (this.state.show === "add artist") {
      return (
        <ArtistFormContainer />
      );
    } else if (this.state.show === "edit artist") {
      return;
    } else if (this.state.show === "add album") {
      return;
    } else if (this.state.show === "edit album") {
      return;
    }
  }

  renderListItem(itemType, currentItemStyled) {
    let styles = {
      borderLeftWidth: 4,
      borderLeftColor: "#649922",
      borderBottomWidth: 1,
      borderBottomColor: '#eaeaea',
      borderTopWidth: 1,
      borderTopColor: '#eaeaea',
      paddingRight: 0,
      background: '#fff'
    };

    if (itemType === currentItemStyled) {
      return (
        <li style={styles} onClick={() => this.setState({ show: itemType })}>{itemType}</li>
      );
    } else {
      return (
        <li onClick={() => this.setState({ show: itemType })}>{itemType}</li>
      );
    }
  }

  render() {
    let currentItemStyled = this.state.show;
    return (
      <div className="edit-page-container">
        <div className="edit-page-div">
          <div>
            <div>
              <p>Edit</p>
            </div>
            <ul className="edit-page-nav">
              {this.renderListItem("add artist", currentItemStyled)}
              {this.renderListItem("edit artist", currentItemStyled)}
              {this.renderListItem("add album", currentItemStyled)}
              {this.renderListItem("edit album", currentItemStyled)}
            </ul>
          </div>
        </div>
        <div className="edit-page-form">
          {this.renderForm()}
        </div>
      </div>
    );
  }
}

export default EditPage;
