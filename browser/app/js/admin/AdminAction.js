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
import { connect } from "react-redux"
import web from "../web"
import * as alertActions from "../alert/actions"

export class AdminAction extends React.Component {
  constructor(props) {
    super(props)
  }

  adminTasks(task) {
      const { showAlert } = this.props
      switch(task){
        case 'service-stop':
          web
            .AdminService({
              action: "stop"
            })
            .then(data => {
              showAlert({
                type: "success",
                message: "MinIO servers restarted"
              })
            })
            .catch(err => {
              showAlert({
                type: "danger",
                message: err.message
              })
            })
            break
        case 'update':
          console.log("update")
          web
            .AdminUpdate()
            .then(data => {
              const updateResponse = data["UpdateResponse"]
              showAlert({
                type: "success",
                message: "Current Version: " + updateResponse["currentVersion"] + " Updated Version: " + updateResponse["updatedVersion"]
              })
            })
            .catch(err => {
              showAlert({
                type: "danger",
                message: err.message
              })
            })
            break
        case 'info':
          console.log("info")
          web
            .AdminInfo()
            .then(data => {
              showAlert({
                type: "success",
                message: ""
              })
            })
            .catch(err => {
              showAlert({
                type: "danger",
                message: err.message
              })
            })
            break
        default:
          showAlert({
                type: "danger",
                message: "Admin task not valid"
              })
          break
      }
  }
  render() {
    return (
      <div className="fesl-admin-act"> 
        <li >
          <a onClick={this.adminTasks.bind(this, 'service-stop')}>
            <i className="fas fa-power-off fa-fw" aria-hidden="true" /> Stop all MinIO servers 
          </a>
        </li>
        <li >
          <a onClick={this.adminTasks.bind(this, 'update')}>
            <i className="fas fa-sync-alt fa-fw" aria-hidden="true" /> Update all MinIO servers
          </a>
        </li>
        <li >
          <a onClick={this.adminTasks.bind(this, 'info')}>
            <i className="fas fa-info-circle fa-fw" aria-hidden="true" /> MinIO Server Info
          </a>
        </li>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    showAlert: alert => dispatch(alertActions.set(alert))
  }
}

export default connect(undefined, mapDispatchToProps)(AdminAction)
