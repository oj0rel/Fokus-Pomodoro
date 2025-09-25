import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ( { press, title } ) => { //esse press é basicamente um atributo que esse componente vai receber, no index pai
  return (
    <Pressable style={styles.button} onPress={press}>
      <Text style={styles.buttonText}>{ title }</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8,
  },
  buttonText: {
    textAlign: "center",
    color: '#021123',
    fontSize: 18,
  },
})
