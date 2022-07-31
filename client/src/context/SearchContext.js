const { createContext, useReducer, useContext } = require("react");

const INITIAL_STATE = {
  city: "",
  dates: [],
  info: {
    adult: 1,
    children: 0,
    rooms: 1,
  },
};

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

const SearchContext = createContext(INITIAL_STATE);

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  const value = {
    city: state.city,
    dates: state.dates,
    info: state.info,
    dispatch,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;

export const useSearch = () => useContext(SearchContext);
