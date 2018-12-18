

export const SEARCH_EMAIL_REQUEST = 'SEARCH_EMAIL_REQUEST';
export const searchEmailRequest = () => ({
    type: SEARCH_EMAIL_REQUEST,
})

export const SEARCH_EMAIL_SUCCESS = 'SEARCH_EMAIL_SUCCESS';
export const searchEmailSuccess = () => ({
    type: SEARCH_EMAIL_SUCCESS,
})

export const SEARCH_EMAIL_ERROR = 'SEARCH_EMAIL_ERROR';
export const searchEmailError = () => ({
    type: SEARCH_EMAIL_ERROR,
})

export const searchEmails = (id) => dispatch => {
  dispatch(searchEmailRequest());
  fetch('', )
  .then()
}