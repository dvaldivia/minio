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
import {fetchGroups, fetchPolicies} from "../actions";
import {connect} from "react-redux";

class PoliciesPage extends React.Component {
  componentDidMount() {
    this.props.fetchPolicies();
  }
  render() {
    return (
      <div>
        <h1>Policies</h1>
        <p>mc policies here</p>
        <pre>{JSON.stringify(this.props.policies, null, 2)}</pre>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    policies: state.admin.policies,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPolicies: () => dispatch(fetchPolicies())
  }
}


const PoliciesPageController = connect(
  mapStateToProps,
  mapDispatchToProps
)(PoliciesPage)


export {PoliciesPageController as PoliciesPage}


