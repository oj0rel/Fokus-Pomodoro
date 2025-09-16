import { ActionButton } from "@/components/ActionButton";
import { FokusButton } from "@/components/FokusButton";
import { Timer } from "@/components/Timer";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25,
    image: require("./imgs/foco.png"),
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 5,
    image: require("./imgs/descanso_curto.png"),
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 15,
    image: require("./imgs/descanso_longo.png"),
    display: "Pausa longa",
  },
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0])

  return (
    <View style={styles.container}>
      <Image source={timerType.image} />

      <View style={styles.actions}>
        <View style={styles.context}>
          
          {pomodoro.map(p =>
            <ActionButton 
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => setTimerType(p)}
              display={p.display}             
            />
          )}

        </View>

        <Text style={styles.timer}>
          {/* {timerType.initialValue} */}
          {new Date(timerType.initialValue * 1000).toLocaleTimeString("pt-BR", {
            minute: "2-digit", second: "2-digit"
          })}
        </Text>
        
        <Timer />
        <FokusButton />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Gabriel Santos.
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40,
  },
  actions: {
    padding: 24,
    backgroundColor: '#14448080',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    width: '80%',
    gap: 32,
  },
  context: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  footer: {
    width: '80%',

  },
  footerText: {
    color: '#98A0A8',
    fontSize: 12.5,
    textAlign: "center",
  },
})
