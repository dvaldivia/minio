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

export const ADM_IS_ADMIN = "admin/IsAdmin"
export const ADM_SERVER_INFO_RECEIVED = "admin/ServerInfoReceived"
export const ADM_USERS_RECEIVED = "admin/UsersReceived"
export const ADM_GROUPS_RECEIVED = "admin/GroupsReceived"
export const ADM_POLICIES_RECEIVED = "admin/PoliciesReceived"

export let alertId = 0

export const set = alert => {
  const id = alertId++
  return (dispatch, getState) => {
    if (alert.type !== "danger" || alert.autoClear) {
      setTimeout(() => {
        dispatch({
          type: CLEAR,
          alert: {
            id
          }
        })
      }, 5000)
    }
    dispatch({
      type: SET,
      alert: Object.assign({}, alert, {
        id
      })
    })
  }
}

export const setIsAdmin = () => {
  return {type: ADM_IS_ADMIN}
};

const MOCK_SERVER_INFO = {
  "status": "success",
  "service": "on",
  "address": "play.minio.io:9000",
  "error": "",
  "storage": {
    "used": 3587240092,
    "available": 194287665152,
    "total": 290820128768,
    "backend": {
      "backendType": "Erasure",
      "onlineDisks": 4,
      "offlineDisks": 0,
      "standardSCData": 2,
      "standardSCParity": 2,
      "rrSCData": 2,
      "rrSCParity": 2,
      "sets": [
        [
          {
            "uuid": "7be2d265-7e8e-46e7-8ac2-986035f08237",
            "endpoint": "/home/play/data1",
            "state": "ok"
          },
          {
            "uuid": "ee4f05f1-57f8-4adf-b158-155c98608e10",
            "endpoint": "/home/play/data2",
            "state": "ok"
          },
          {
            "uuid": "7e7af70a-814f-4594-a52e-dbc6251f99cd",
            "endpoint": "/home/play/data3",
            "state": "ok"
          },
          {
            "uuid": "80cb0bba-73cd-4214-a769-80bdf1916b49",
            "endpoint": "/home/play/data4",
            "state": "ok"
          }
        ]
      ]
    }
  },
  "network": {
    "transferred": 1283112316,
    "received": 111182074
  },
  "server": {
    "uptime": 9359201518216,
    "version": "2019-09-26T17:25:55Z",
    "commitID": "c6ca4dba37592d02a2906221e580917495c179be",
    "deploymentID": "6faeded5-5cf3-4133-8a37-07c5d500207c",
    "region": "us-east-1",
    "sqsARN": []
  },
  "cpu": {
    "addr": "play.minio.io:9000",
    "load": [
      {
        "avg": 0.25,
        "max": 0.26,
        "min": 0.25
      }
    ],
    "historicLoad": [
      {
        "avg": 4.111033333333332,
        "max": 100.16000000000001,
        "min": 0.03
      }
    ]
  },
  "mem": {
    "addr": "play.minio.io:9000",
    "usage": [
      {
        "mem": 629768440
      }
    ],
    "historicUsage": [
      {
        "mem": 597719062
      }
    ]
  }
};


export const getServerInfo = () => (dispatch) => {
  //TODO: Fetch data from server and dispatch when received
  dispatch(serverInfoReceived())
}

export const serverInfoReceived = () => {
  return {type: ADM_SERVER_INFO_RECEIVED, info: MOCK_SERVER_INFO}
};

const MOCK_USERS = {"users": ['a', 'b']}

export const fetchUsers = () => (dispatch) => {
  //TODO: Fetch data from server and dispatch when received
  dispatch(serverInfoReceived(MOCK_USERS))
}

export const usersReceived = (users) => {
  return {type: ADM_USERS_RECEIVED, users: users}
};

const MOCK_GROUPS = {"groups": ['a', 'b']}

export const fetchGroups = () => (dispatch) => {
  //TODO: Fetch data from server and dispatch when received
  dispatch(groupsReceived(MOCK_GROUPS))
}

export const groupsReceived = (groups) => {
  return {type: ADM_GROUPS_RECEIVED, groups: groups}
};

const MOCK_POLICIES = {"policies": ['a', 'b']}

export const fetchPolicies = () => (dispatch) => {
  //TODO: Fetch data from server and dispatch when received
  dispatch(policiesReceived(MOCK_POLICIES))
}

export const policiesReceived = (policies) => {
  return {type: ADM_POLICIES_RECEIVED, policies: policies}
};

