import { StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";

type IContentWrapperProps = {
  children: JSX.Element | JSX.Element[];
  title?: string;
  takeRestOfScreen?: boolean;
};

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: colors.black,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 8,
    marginBottom: 16,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
  },
  content: {
    marginTop: 8,
  },
});

function ContentWrapper({
  children,
  title,
  takeRestOfScreen = false,
}: IContentWrapperProps) {
  return (
    <View
      style={{
        ...styles.contentWrapper,
        flexGrow: takeRestOfScreen ? 1 : 0,
      }}
    >
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.content}>{children}</View>
    </View>
  );
}

export default ContentWrapper;
