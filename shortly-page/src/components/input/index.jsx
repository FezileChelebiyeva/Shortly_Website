import React, { useReducer } from "react";
import "./index.scss";
import { uid } from "uid";

const reduser = (state, action) => {
  switch (action.type) {
    case "SET_LINK":
      return { ...state, inputValue: action.payload };
    case "ADD_LINK": {
      return {
        ...state,
        links: [...state.links, action.payload],
        inputValue: "",
      };
    }
  }
};
const Input = () => {
  const [state, dispatch] = useReducer(reduser, { links: [], inputValue: "" });

  return (
    <div id="shorten-link">
      <div className="container">
        <div className="input_btn">
          <div className="input-control">
            <input
              value={state.inputValue}
              onChange={(e) =>
                dispatch({ type: "SET_LINK", payload: e.target.value })
              }
              type="text"
              placeholder="Shorten a link here..."
            />
            <button
              onClick={(e) =>
                dispatch({
                  type: "ADD_LINK",
                  payload: { id: uid(), link: state.inputValue },
                })
              }
            >
              Shorten It!
            </button>
          </div>
        </div>
      </div>
        <div className="link-list">
          <ul>
            {state.links.map((element) => {
              return (
                <li key={element.id}>
                  <div>{element.link} <button>Copy</button></div>
                </li>
              );
            })}
          </ul>
        </div>
    </div>
  );
};

export default Input;
