import React, {useState} from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Zakupy from "./components/Zakupy";

export default function App() {
  const [produkt, setProdukt] = useState();
  const [produktyDoKupienia, setproduktyDoKupienia] = useState([]);

  const dodajProdukt = () => {
    Keyboard.dismiss();
    setproduktyDoKupienia([...produktyDoKupienia, produkt])
    setProdukt(null);
    }

    const produktKupiony = (index) => {
      let produktKupiony = [...produktyDoKupienia];
      produktKupiony.splice(index, 1);
      setproduktyDoKupienia(produktKupiony);
    }

  return (
    <View style={styles.container}>
      
    {/*Dzisiejsze zakupy*/}
    <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Dzisiejsze zakupy:</Text>

      <View style={styles.items}>
        {/*Tu będą zakupy*/}
        {
          produktyDoKupienia.map((produkt, index) => {
            return (
              <TouchableOpacity key={index} onPress={() =>produktKupiony(index) }>
                <Zakupy text={produkt} />
              </TouchableOpacity>
            )
            
          })
        }
      </View>

    </View>


    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
    >
      <TextInput style={styles.input} placeholder={"Dodaj produkt do listy"} valeu={produkt} onChangeText={text => setProdukt(text)}/>

      <TouchableOpacity onPress={() => dodajProdukt()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'E8EAED',
    
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addText: {

  },
});
