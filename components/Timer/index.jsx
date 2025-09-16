import { StyleSheet, Text } from "react-native";

export const Timer = ( { timerType, timer } ) => {
    <Text style={timer}>
        {new Date(timerType * 1000).toLocaleTimeString("pt-BR", {minute: "2-digit"})}
    </Text>
}

const styles = StyleSheet.create({
    timer: {
    fontSize: 54,
    color: '#FFFFFF',
    fontWeight: "bold",
    textAlign: "center",
  },
})