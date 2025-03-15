// Define the Goals interface to type the goal objects
interface Goals {
  id: number;
  name: string;
  status: string;
}

export const iD = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const symbol = "!@#$%^&*(){}:";
  const num = Math.random() * 100;
  const letterIndex = Math.random() * 25;
  const symbolIndex = Math.random() * 9;

  const result = `${letters.charAt(letterIndex)}${Math.ceil(num)}${Math.round(
    num
  )} ${symbol.charAt(symbolIndex)}`;
  return result;
};

// Hook to create and store goals in localStorage
export const useSet = (data: Goals, window: Window, set: boolean): void => {
  if (set && data) {
    try {
      const JSONString = window.localStorage.getItem("goals");

      let JSONData: Goals[];
      let JSONResult: string;

      if (JSONString) {
        try {
          JSONData = JSON.parse(JSONString); // Parse the JSON string to a JS object
          console.log(JSONData);

          JSONData.push(data); //put the new data into the array

          JSONResult = JSON.stringify(JSONData); //turn our data into a string
          window.localStorage.setItem("goals", JSONResult); //saves our data
          console.log(JSONData);
        } catch (error) {
          // Log any errors that occur during parsing and strigifying
          console.error("Error parsing JSON:", error);
        }
      } else {
        const JSONData = JSON.stringify([data]);
        console.log(JSONData, data);
        window.localStorage.setItem("goals", JSONData);
      }
    } catch (error) {
      // Log any errors that occur during stringification
      console.error("Error stringifying JSON:", error);
    }
  }
};

// Hook to read goals from localStorage
export const useRead = (window: Window): object => {
  // Retrieve the JSON string from localStorage
  const JSONString = window.localStorage.getItem("goals");
  let JSONData = {};
  if (JSONString) {
    try {
      // Parse the JSON string to an object
      JSONData = JSON.parse(JSONString);
    } catch (error) {
      // Log any errors that occur during parsing
      console.error("Error parsing JSON:", error);
    }
  }

  // Return the parsed data or an empty object if no data was found
  return JSONData;
};

// Hook to delete a goal by id from localStorage
export const useDelete = (id: number, window: Window): void => {
  // Retrieve the JSON string from localStorage
  const JSONString = window.localStorage.getItem("goals");
  if (JSONString) {
    try {
      // Parse the JSON string to an array of goals
      const data: Goals[] = JSON.parse(JSONString);
      // Filter out the goal with the specified id
      const updatedData = data.filter((goal) => goal.id !== id);
      // Store the updated array back in localStorage
      window.localStorage.setItem("goals", JSON.stringify(updatedData));
    } catch (error) {
      // Log any errors that occur during parsing or stringification
      console.error("Error parsing or stringifying JSON:", error);
    }
  }
};
