import { StyleSheet, Text } from "react-native";

export function Timer( { totalSeconds } ) {
  /*totalSeconds é uma props que deverá 
    ser informada no momento que o componente for usado*/
    
  const date = new Date(totalSeconds * 1000);
  const options = { minute: "2-digit", second: "2-digit" };

  return (
    <Text style={styles.timer}>
      {date.toLocaleTimeString("pt-BR", options)}
    </Text>
  );
}

const styles = StyleSheet.create({
  timer: {
    color: '#fff',
    fontSize: 54,
    fontWeight: "bold",
    textAlign: "center"
  },
});
