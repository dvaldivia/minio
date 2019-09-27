/*
 * MinIO Cloud Storage (C) 2018 MinIO, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react"
import {SideBar} from "./browser/SideBar";
import {AlertContainer} from "./alert/AlertContainer";
import {Route, Switch} from "react-router-dom";
import Browser from "./browser/Browser";
import {setIsAdmin} from "./admin/actions";
import {connect} from "react-redux";
import Router from "react-router-dom/Router";
import history from "./history"
import {AdminPage} from "./admin/AdminPage";

class Main extends React.Component {
  componentDidMount() {
    //TODO: Get this value from the server
    this.props.setIsAdmin();
    // setTimeout(()=>{this.props.setIsAdmin();},2000)
  }

  render() {
    return (
      <div
        className="file-explorer"
      >
        <SideBar/>
        <Router history={history}>
          <Switch>
            {this.props.isAdmin && <Route path={"/a"} component={AdminPage} />}
            <Route path={"/:bucket?/*"} component={Browser}/>
          </Switch>
        </Router>
        <AlertContainer/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAdmin: state.admin.isAdmin,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setIsAdmin: () => dispatch(setIsAdmin())
  }
}


const MainController = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export {MainController as Main}
