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
import {getServerInfo} from "../actions";
import {connect} from "react-redux";

class ServerPage extends React.Component {
  componentDidMount() {
    this.props.getServerInfo()
  }

  render() {
    return (
      <div>
        <h1>Server Info</h1>
        <p>mc admin info server here</p>
        <p>mc admin info cpu here</p>
        <p>mc admin info network here</p>
        <pre>{JSON.stringify(this.props.serverInfo,null,2)}</pre>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    serverInfo: state.admin.serverInfo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getServerInfo: () => dispatch(getServerInfo())
  }
}


const ServerPageController = connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerPage)


export {ServerPageController as ServerPage}
