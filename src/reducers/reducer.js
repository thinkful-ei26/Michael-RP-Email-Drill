'use strict';
const initialState = {
  emailList: [],
  // email:
  loading: false,
  error: null,
  inbox: {
      id: 'inbox',
      name: "Inbox",
      emails: {
          0: {
              id: 0,
              from: "billg@microsoft.com",
              to: "TeamWoz@Woz.org",
              title: "Possible work opportunity",
              content: "Dear Woz.  Fancy a job at Mister Softee?  Bill x"
          },
          1: {
              id: 1,
              from: "zuck@facebook.com",
              to: "TeamWoz@Woz.org",
              title: "Do you know PHP?",
              content: "Dear Woz.  We are in need of a PHP expert.  Fast.  Zuck x"
          }
      }
  },
  spam: {
      id: 'spam',
      name: "Spam",
      emails: {
          0: {
              id: 0,
              from: "ChEaPFl1ghTZ@hotmail.com",
              to: "TeamWoz@Woz.org",
              title: "WaNt CHEEp FlitZ",
              content: "Theyre CheEp"
          },
          1: {
              id: 1,
              from: "NiKEAIRJordanZ@hotmail.com",
              to: "TeamWoz@Woz.org",
              title: "JorDanz For SAle",
              content: "Theyre REELY CheEp"
          }
      }
  }
};

export function emailReducer(state=initialState, action) {
  if(action.type === SEARCH_EMAIL_REQUEST) {
    console.log(state);
    return Object.assign({}, state, {
      loading: true
    })
  };
  if(action.type === SEARCH_EMAIL_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      emailList: action.emailList,
      error: null
    })
  };
  if(action.type === SEARCH_EMAIL_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }

}