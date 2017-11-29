import React from 'react';
import { Link } from 'react-router-dom';

import ArtistFormContainer from '../artists/artist_form_container';
import EditUserFormContainer from '../users/edit_user_form_container';


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
    } else if (this.state.show === "account settings") {
      return (
        <EditUserFormContainer />
      );
    }
  }

  renderListItem(itemType, currentItemShown) {
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

    if (itemType === currentItemShown) {
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
    let currentItemShown = this.state.show;
    return (
      <div className="edit-page-container">
        <div className="edit-page-div">
          <div>
            <div>
              <p>Settings</p>
            </div>
            <ul className="edit-page-nav">
              {this.renderListItem("add artist", currentItemShown)}
              {this.renderListItem("edit artist", currentItemShown)}
              {this.renderListItem("add album", currentItemShown)}
              {this.renderListItem("edit album", currentItemShown)}
              {this.renderListItem("account settings", currentItemShown)}
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
