import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { PureRoundedCheckbox } from "react-native-rounded-checkbox";
import { IRoundedCheckboxProps } from "react-native-rounded-checkbox/build/dist/functional/RoundedCheckbox";
/**
 * ? Local Imports
 */
import styles from "./RoundedCheckboxGroup.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

export interface ICheckboxButton extends IRoundedCheckboxProps {
  id: number;
}

export interface IRoundedCheckboxGroupProps {
  style?: CustomStyleProp;
  initial?: number;
  children?: React.ReactNode;
  data: ICheckboxButton[];
  component?: (isActive: boolean) => React.ReactNode;
  onChange: (selectedItem: ICheckboxButton) => void;
}

const RoundedCheckboxGroup: React.FC<IRoundedCheckboxGroupProps> = ({
  style,
  data,
  initial,
  children,
  component,
  onChange,
}) => {
  const [selectedItem, setSelectedItem] = React.useState<
    ICheckboxButton | undefined
  >(undefined);

  React.useEffect(() => {
    onChange && onChange(selectedItem!);
  }, [selectedItem]);

  const handleItemPress = (item: ICheckboxButton) => {
    setSelectedItem(item);
  };

  return (
    <View style={[styles.container, style]}>
      {data &&
        data.map((item: ICheckboxButton) => {
          const isActive =
            item.id === (selectedItem ? selectedItem?.id : initial);
          return (
            <PureRoundedCheckbox
              {...item}
              key={item.id}
              active={isActive}
              onPress={() => handleItemPress(item)}
            >
              {component ? component(isActive) : children}
            </PureRoundedCheckbox>
          );
        })}
    </View>
  );
};

export default RoundedCheckboxGroup;
