import React from "react";
import { ViewStyle, SafeAreaView, Alert } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import RoundedCheckboxGroup, {
  ICheckboxButton,
} from "./lib/RoundedCheckboxGroup";

const styles = {
  innerStyle: { height: 45, width: 45, borderRadius: 75 },
};

const _outerStyle = (borderColor: string): ViewStyle => ({
  width: 55,
  height: 55,
  marginLeft: 16,
  borderRadius: 60,
  borderColor: borderColor,
});

const staticData: ICheckboxButton[] = [
  {
    id: 0,
    text: "",
    checkedColor: "#ff7473",
    uncheckedColor: "#fbbfbb",
    outerStyle: _outerStyle("#fbbfbb"),
    innerStyle: styles.innerStyle,
  },
  {
    id: 1,
    text: "",
    checkedColor: "#5567e9",
    uncheckedColor: "#afb5f5",
    outerStyle: _outerStyle("#afb5f5"),
    innerStyle: styles.innerStyle,
  },
  {
    id: 2,
    text: "",
    checkedColor: "#a98ae7",
    uncheckedColor: "#cab6f4",
    outerStyle: _outerStyle("#cab6f4"),
    innerStyle: styles.innerStyle,
  },
  {
    id: 3,
    text: "",
    checkedColor: "#fcb779",
    uncheckedColor: "#ffd1a7",
    outerStyle: _outerStyle("#ffd1a7"),
    innerStyle: styles.innerStyle,
  },
];

const App = () => {
  const [selectedItem, setSelectedItem] = React.useState<
    ICheckboxButton | undefined
  >(undefined);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <RoundedCheckboxGroup
        data={staticData}
        initial={2}
        onChange={(selectedItem: ICheckboxButton) => {
          setSelectedItem(selectedItem);
        }}
        component={(isActive: boolean) =>
          isActive && <Icon name="check" type="Entypo" color="#fff" />
        }
      />
    </SafeAreaView>
  );
};

export default App;
