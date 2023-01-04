import React, { useEffect, useReducer, useState } from "react";
import "./index.scss";
import { uid } from "uid";
import axios from "axios";
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LINK":
      return { ...state, inputValue: action.payload };
    // case "ADD_LINK": {
    //   return {
    //     ...state,
    //     links: [...state.links, action.payload],
    //     inputValue: "",
    //   };
    // }
    case "FETCH_SUCCESS": {
      return {
        ...state,
        // links: action.payload,
        // links: [(state.links = action.payload)],
        links: [...state.links, action.payload],
        inputValue: "",
      };
    }
    default:
      return state;
  }
};
const Input = () => {
  const [state, dispatch] = useReducer(reducer, { links: [], inputValue: "" });
  const [status, setStatus] = useState(true);
  const [errorStatus, setErrorStatus] = useState(true);

  const handleShorten = async () => {
    const resp = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${state.inputValue}`
    );
    dispatch({ type: "FETCH_SUCCESS", payload: resp.data.result });
  };

  return (
    <div id="shorten-link">
      <div className="container">
        <div className="input_btn">
          <div className="input-control">
            <div className="input">
              <input
              className={!errorStatus && 'border'}
                value={state.inputValue}
                onChange={(e) =>
                  dispatch({ type: "SET_LINK", payload: e.target.value })
                }
                type="text"
                placeholder="Shorten a link here..."
              />

              <button
                onClick={(e) => {
                  handleShorten();
                  setStatus(true);
                  {
                    !state.inputValue == ""
                      ? setErrorStatus(true)
                      : setErrorStatus(false);
                  }
                  // dispatch({
                  //   type: "FETCH_SUCCESS",
                  //   payload: { id: uid(), link: state.inputValue },
                  // });
                }}
              >
                Shorten It!
              </button>
            </div>

            {!errorStatus && (
              <div style={{ color: "red", fontSize: "14px" }}>
                Please add a link
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="link-list">
        <ul>
          {state.links.map((el) => {
            return (
              <li key={uid()}>
                <div>
                  {console.log(state)}
                  <span>{el.original_link} </span>
                  <span className="short-link">{el.short_link}</span>
                  {status ? (
                    <button
                      className="copy"
                      onClick={() => {
                        setStatus(false);

                        navigator.clipboard.writeText(el.short_link);
                      }}
                    >
                      Copy
                    </button>
                  ) : (
                    <button className="copied">Copied!</button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Input;
