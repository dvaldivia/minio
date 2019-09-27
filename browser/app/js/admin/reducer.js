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

import {
  ADM_GROUPS_RECEIVED,
  ADM_IS_ADMIN,
  ADM_POLICIES_RECEIVED,
  ADM_SERVER_INFO_RECEIVED,
  ADM_USERS_RECEIVED
} from "./actions";

const initialState = {
  isAdmin: false,
  serverInfo: null,
  users: null,
  groups: null,
  policies: null,
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ADM_IS_ADMIN:
      return {
        ...state,
        isAdmin: true
      }
    case ADM_SERVER_INFO_RECEIVED:
      return {
        ...state,
        serverInfo: action.info,
      }
    case ADM_USERS_RECEIVED:
      return {
        ...state,
        users: action.users,
      }
    case ADM_GROUPS_RECEIVED:
      return {
        ...state,
        groups: action.groups,
      }
    case ADM_POLICIES_RECEIVED:
      return {
        ...state,
        policies: action.policies,
      }
    default:
      return state
  }
}
