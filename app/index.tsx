import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}> {/* coloca "style=" para aplicar o estilo criado na linha 11. */}
      <Text>Gabriel Silva</Text>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
    }
  }
)
