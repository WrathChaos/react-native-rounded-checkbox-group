import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import RoundedCheckboxGroup, {
  ICheckboxButton,
} from "./lib/RoundedCheckboxGroup";

const styles = {
  outerStyle: { height: 75, width: 75, borderRadius: 75 },
  innerStyle: { height: 60, width: 60, borderRadius: 75 },
};

const staticData: ICheckboxButton[] = [
  {
    id: 0,
    checkedColor: "red",
    outerStyle: styles.outerStyle,
    innerStyle: styles.innerStyle,
  },
  { id: 1 },
  { id: 2 },
  { id: 3 },
];

const App = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <RoundedCheckboxGroup
        data={staticData}
        initial={2}
        onChange={(selectedItem: ICheckboxButton) => {
          console.log(JSON.stringify(selectedItem));
        }}
      />
    </SafeAreaView>
  );
};

export default App;
