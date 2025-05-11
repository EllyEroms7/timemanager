"use client";

import { useEffect, useState } from "react";

// Define the Goals interface to type the goal objects
export interface Goals {
  id: string;
  name: string;
  cycles: number;
  status: "pending" | "progress" | "completed";
  colour: "danger" | "primary" | "success";
}

// Hook to update an item in localStorage by its id
export const useUpdate = () => {
  if (typeof window === "undefined") return;

  const updateItem = (id: string | number, updatedFields: Partial<Goals>) => {
    const key = "goals";
    // Retrieve the stored value from localStorage
    const storedValue = localStorage.getItem(key);
    // Parse the stored value or initialize an empty array if no value exists
    const items: Goals[] = storedValue ? JSON.parse(storedValue) : [];

    // Map through the items and update the matching item
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, ...updatedFields } : item
    );

    // Save the updated items back to localStorage
    localStorage.setItem(key, JSON.stringify(updatedItems));

    const JSONString = window.localStorage.getItem("goals") as string;

    if (JSONString) {
      try {
        // Parse the JSON string to an object
        // const JSONData = JSON.parse(JSONString);
        // return JSONData;
        return updatedFields;
      } catch (error) {
        // Log any errors that occur during parsing
        console.error("Error parsing JSON:", error);
      }
    }
  };

  return updateItem;
};

// Hook to create and store goals in localStorage
export const useSet = () => {
  if (typeof window === "undefined") return;
  const save = (data: Goals) => {
    if (data && data !== ({} as Goals)) {
      try {
        const JSONString = window.localStorage.getItem("goals");

        let JSONData: Goals[] = [];

        if (JSONString) {
          try {
            JSONData = JSON.parse(JSONString); // Parse the JSON string to a JS object
          } catch (error) {
            // Log any errors that occur during parsing
            console.error("Error parsing JSON:", error);
          }
        }

        // Check if the goal already exists
        const goalExists = JSONData.some(
          (goal) => goal.id === data.id || goal.name === data.name
        );

        if (!goalExists) {
          //if goal does not exist
          JSONData.push(data); // Add the new data to the array
          const JSONResult = JSON.stringify(JSONData); // Convert the data to a JSON string
          window.localStorage.setItem("goals", JSONResult); // Save the data
        } else {
          console.log("Goal already exists:", data);
        }
      } catch (error) {
        // Log any errors that occur during stringification
        console.error("Error stringify JSON:", error);
      }
    }
  };

  return save;
};

// Hook to read goals from localStorage
export const useRead = () => {
  const [JSONData, setJSONData] = useState<Goals[]>([]);
  useEffect(() => {
    const JSONString = window.localStorage.getItem("goals") as string;

    if (JSONString) {
      try {
        // Parse the JSON string to an object
        setJSONData(() => JSON.parse(JSONString));
      } catch (error) {
        // Log any errors that occur during parsing
        console.error("Error parsing JSON:", error);
      }
    }
  }, []);

  return JSONData;
};

// Hook to delete a goal by id from localStorage
export const useDelete = () => {
  const deleteGoal = (id: string) => {
    if (typeof window === "undefined") return;

    // Retrieve the JSON string from localStorage
    const JSONString = window.localStorage.getItem("goals");
    if (JSONString) {
      try {
        // Parse the JSON string to an array of goals
        const goals: Goals[] = JSON.parse(JSONString);

        // Remove the goal with the specified id
        const updatedGoals = goals.filter((goal) => goal.id !== id);

        // Save the updated goals back to localStorage
        localStorage.setItem("goals", JSON.stringify(updatedGoals));

        return updatedGoals; // Return the updated goals
      } catch (error) {
        console.error("Error processing localStorage data:", error);
      }
    }
  };

  return deleteGoal;
};
