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
import {Redirect, Route, Router, Switch} from "react-router-dom";
import {ServerPage} from "./server/ServerPage";
import {UsersPage} from "./users/UsersPage";
import {GroupsPage} from "./groups/GroupsPage";
import {PoliciesPage} from "./policies/PoliciesPage";
import history from "../history";
class AdminPage extends React.Component {
  render() {
    return (
      <div className="fe-body">
        <Router history={history}>
          <Switch>
            <Route path="/a/users" component={UsersPage}/>
            <Route path="/a/groups" component={GroupsPage}/>
            <Route path="/a/policies" component={PoliciesPage}/>
            <Route path="/a/server" component={ServerPage}/>
            <Route path="/" component={ServerPage}/>
          </Switch>
        </Router>
      </div>
    )
  }
}


export {AdminPage}
