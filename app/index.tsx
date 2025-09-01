import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}> {/* coloca "style=" para aplicar o estilo criado na linha 11. */}
      <Image source={require("./imgs/foco.png")} />
      <View style={styles.actions}>
        <Text style={styles.timer}>25:00</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais. Desenvolvido por Aluno.
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
  },
  actions: {
    padding: 24,
    backgroundColor: '#144480',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    alignItems: "center",
    justifyContent: "center",
    width: '80%',
    height: '30%'
  },
  button: {

  },
  buttonText: {

  },
  timer: {

  },
  footer: {

  },
  footerText: {

  }
})
