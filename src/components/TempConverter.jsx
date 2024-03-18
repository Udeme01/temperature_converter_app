import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignal,
  faWifi,
  faBatteryFull,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// styles
const outerWrapper =
  "bg-white font-ubuntu shadow-lg shadow-zinc-200 w-resWidth p-6 rounded-6xl tracking-wide flex flex-column justify-center align-center min-w-fit md:w-max";
const mobileIconsWrapper =
  "flex justify-between align-center text-gray-600 font-bold text-lg";
const label = "text-gray-500";
const input = "outline-none border-b py-2 text-gray-700 text-xl";

const TempConverter = () => {
  const [inputs, setInputs] = useState({
    degrees: "",
    temperatureType: "Fahrenheit",
    result: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (identifier, event) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [identifier]: event.target.value,
    }));
  };

  const handleBtnSubmit = () => {
    TwoWayConversion();
  };

  const TwoWayConversion = () => {
    let degreeValue = parseFloat(inputs.degrees); // converts degrees to a number
    let tempType = inputs.temperatureType;
    let convertedResult;

    if (tempType === "Fahrenheit") {
      convertedResult = (((degreeValue - 32) * 5) / 9).toFixed(4);
    } else {
      convertedResult = (degreeValue * 9) / 5 + 32;
    }
    setInputs((prevInputs) => ({
      ...prevInputs,
      result: convertedResult.toString(),
    }));
  };

  return (
    <>
      <section className={outerWrapper}>
        <div className="innerWrapper w-full m-1">
          {/* mobile icons */}
          <div className={mobileIconsWrapper}>
            <p>9:41</p>
            <div className="flex align-center justify-center">
              <span className="mr-2">
                <FontAwesomeIcon icon={faSignal} />
              </span>
              <span className="mr-2">
                <FontAwesomeIcon icon={faWifi} />
              </span>
              <span>
                <FontAwesomeIcon icon={faBatteryFull} />
              </span>
            </div>
          </div>
          <header>
            <h1 className="text-center py-4 text-xl font-medium">
              Temperature converter
            </h1>
          </header>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between align-center my-2">
              {/* degrees */}
              <div className="flex flex-col justify-center align-center w-45">
                <label className={label} htmlFor="degrees">
                  Degrees{" "}
                </label>
                <input
                  type="number"
                  id="degrees"
                  name="degrees"
                  className={input}
                  value={inputs.degrees}
                  onChange={(event) => handleChange("degrees", event)}
                />
              </div>

              {/* temp type */}
              <div className="flex flex-col justify-center align-center w-45 py-4">
                <label className={label} htmlFor="temperatureType">
                  Type{" "}
                </label>
                <select
                  name="temperatureType"
                  id="temperatureType"
                  className={input}
                  value={inputs.temperatureType}
                  onChange={(event) => handleChange("temperatureType", event)}
                >
                  <option value="Fahrenheit">Fahrenheit</option>
                  <option value="Celsius">Celsius</option>
                </select>
              </div>
            </div>

            {/* Result */}
            <div className="py-2">
              <span className={label}>Result</span>
              <h2 className={input}>
                {inputs.result}
                {inputs.temperatureType === "Fahrenheit" ? "°C" : "°F"}
              </h2>
            </div>

            {/* Convert Btn */}
            <button
              onClick={handleBtnSubmit}
              type="button"
              className="flex justify-center align-center bg-blue-600 w-full p-4 m-4 mb-0 mx-auto rounded-2xl text-white tracking-wide text-xl hover:bg-blue-700"
            >
              Convert
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default TempConverter;
