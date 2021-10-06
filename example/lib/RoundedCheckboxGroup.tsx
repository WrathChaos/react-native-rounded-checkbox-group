import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";

import {
  PureRoundedCheckbox,
  IRoundedCheckboxProps,
} from "react-native-rounded-checkbox";

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
  data: ICheckboxButton[];
  onChange: (selectedItem: ICheckboxButton) => void;
}

const RoundedCheckboxGroup: React.FC<IRoundedCheckboxGroupProps> = ({
  style,
  data,
  initial,
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
            />
          );
        })}
    </View>
  );
};

export default RoundedCheckboxGroup;
