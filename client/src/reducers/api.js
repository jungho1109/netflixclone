import axios from "axios";

export const POPULAR_MOVIE_SUCCESS = "api/POPULAR_MOVIE_SUCCESS";
export const POPULAR_MOVIE_FAIL = "api/POPULAR_MOVIE_FAIL";
export const TOP_MOVIE_SUCCESS = "api/TOP_MOVIE_SUCCESS";
export const TOP_MOVIE_FAIL = "api/TOP_MOVIE_FAIL";
export const POPULAR_SHOW_SUCCESS = "api/POPULAR_SHOW_SUCCESS";
export const POPULAR_SHOW_FAIL = "api/POPULAR_SHOW_FAIL";
export const TOP_SHOW_SUCCESS = "api/TOP_SHOW_SUCCESS";
export const TOP_SHOW_FAIL = "api/TOP_SHOW_FAIL";

// get API
export const popularMovie = () => async dispatch => {
  try {
    const res = await axios.get("/api/popularMovies");
    dispatch({
      type: POPULAR_MOVIE_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POPULAR_MOVIE_FAIL
    });
  }
};

export const topMovie = () => async dispatch => {
    try {
      const res = await axios.get("/api/topRatedMovies");
      dispatch({
        type: TOP_MOVIE_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TOP_MOVIE_FAIL
      });
    }
  };

  export const popularShow = () => async dispatch => {
    try {
      const res = await axios.get("/api/popularShows");
      dispatch({
        type: POPULAR_SHOW_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: POPULAR_SHOW_FAIL
      });
    }
  };

  export const topShow = () => async dispatch => {
    try {
      const res = await axios.get("/api/topRatedShows");
      dispatch({
        type: TOP_SHOW_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TOP_SHOW_FAIL
      });
    }
  };

const initialState = {
  topMovie: null,
  topShow: null,
  popularMovie: null,
  popularShow: null,
  loading: true
};

export default function api(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case POPULAR_MOVIE_SUCCESS:
      return {
        ...state,
        popularMovie: payload,
        loading: false
      };
    case TOP_MOVIE_SUCCESS:
      return {
        ...state,
        topMovie: payload,
        loading: false
      };
    case POPULAR_SHOW_SUCCESS:
      return {
        ...state,
        popularShow: payload,
        loading: false
      };
    case TOP_SHOW_SUCCESS:
      return {
        ...state,
        topShow: payload,
        loading: false
      };
    case POPULAR_MOVIE_SUCCESS:
      return {
        ...state,
        popularMovie: payload,
        loading: false
      };
    case TOP_MOVIE_SUCCESS:
      return {
        ...state,
        topMovie: payload,
        loading: false
      };
    case POPULAR_SHOW_SUCCESS:
      return {
        ...state,
        popularShow: payload,
        loading: false
      };
    case TOP_SHOW_SUCCESS:
      return {
        ...state,
        topShow: payload,
        loading: false
      };
    case POPULAR_MOVIE_FAIL:
    case TOP_MOVIE_FAIL:
    case POPULAR_SHOW_FAIL:
    case TOP_SHOW_FAIL:
      return {
        topMovie: null,
        topShow: null,
        popularMovie: null,
        popularShow: null,
        loading: true
      };
    default:
      return state;
  }
}
