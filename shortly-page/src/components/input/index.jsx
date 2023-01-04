import React, { useEffect, useReducer, useState } from "react";
import "./index.scss";
import { uid } from "uid";
import axios from "axios";
const reduser = (state, action) => {
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
        links: [...state.links,  action.payload],
        inputValue: "",
      };
    }
    default:
      return state;
  }
};
const Input = () => {
  const [state, dispatch] = useReducer(reduser, { links: [], inputValue: "" });
  const [status, setStatus] = useState(true);

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
            <input
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
                // dispatch({
                //   type: "FETCH_SUCCESS",
                //   payload: { id: uid(), link: state.inputValue },
                // });
              }}
            >
              Shorten It!
            </button>
          </div>
        </div>
      </div>
      <div className="link-list">
        <ul>
          {/* <li>
            <div>
              {console.log(state)}
              <span>{state.links.original_link} </span>
              <span className="short-link">{state.links.short_link}</span>
              {status ? (
                <button
                  className="copy"
                  onClick={() => {
                    setStatus(false);
                    navigator.clipboard.writeText(state.links.short_link);
                  }}
                >
                  Copy
                </button>
              ) : (
                <button className="copied">Copied!</button>
              )}
            </div>
          </li> */}
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
