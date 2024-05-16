import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="d-flex flex-column align-items-center"
          style={{
            backgroundColor: " #f10f0f",
            marginTop: "55px",
            width: "500px",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        >
          <h1 className="mt-2" style={{ fontSize: "36px", fontWeight: "700" }}>
            Trading Interface
          </h1>
          <form className="d-flex flex-column align-items-center w-100 p-2 mt-2">
            <label
              style={{
                display: "block",
                marginTop: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Trading Pair:
            </label>

            <select class="form-select mb-3" aria-label="Large select example">
              <option selected>Select a Trading Pair</option>
              {/* <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option> */}
            </select>

            <label
              style={{
                display: "block",
                marginTop: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Account Number:
            </label>
            <input
              className="w-100 p-2 mb-1"
              style={{
                border: "1px solid black",
                outline: "none",
                fontSize: "16px",
                borderRadius: "4px",
              }}
              type="number"
              placeholder="123456"
            />

            <label
              style={{
                display: "block",
                marginTop: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Password:
            </label>
            <input
              className="w-100 p-2 mb-1"
              style={{
                border: "1px solid black",
                outline: "none",
                fontSize: "16px",
                borderRadius: "4px",
              }}
              type="password"
              placeholder="strong password"
            />

            <label
              style={{
                display: "block",
                marginTop: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "left",
              }}
              htmlFor="BrokerServer"
            >
              Broken Server:
            </label>
            <input
              className="w-100 p-2 mb-1"
              style={{
                border: "1px solid black",
                outline: "none",
                fontSize: "16px",
                borderRadius: "4px",
              }}
              type="text"
              placeholder="ICMarkets-Live"
            />

            <label
              style={{
                display: "block",
                marginTop: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Serial Key Token:
            </label>
            <input
              className="w-100 p-2 mb-1"
              style={{
                border: "1px solid black",
                outline: "none",
                fontSize: "16px",
                borderRadius: "4px",
              }}
              type="text"
              placeholder="What's your Serial Key Token?"
            />

            <label
              style={{
                display: "block",
                marginTop: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Bet Amount:
            </label>
            <input
              className="w-100 p-2 mb-1"
              style={{
                border: "1px solid black",
                outline: "none",
                fontSize: "16px",
                borderRadius: "4px",
              }}
              type="number"
            />

            <button type="button" className="btn btn-dark w-100">
              Start Trading
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
