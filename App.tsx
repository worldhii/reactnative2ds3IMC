import{useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
 
export default function App() {
const[peso, setPeso] = useState('');
const[altura, setAltura] = useState('');
const[resultado, setResultado] = useState('');
 
  function calcularImc(){
    let mensagem =""
    let alturaEmmetro = parseFloat(altura) / 100;
    let result = parseFloat(peso)/(alturaEmmetro * alturaEmmetro);
   

    if ( result <18.5){
      mensagem= "Abaixo do peso"
    }
    else if(result <=24.99 ){
      mensagem=  "Peso ideal"
    }
    else if(result <=29.99 ){
      mensagem= "Levemente acima do peso"
    }  
    else if(result <=34.99 ){
      mensagem= "Obesidade grau I"
    }  
    else if(result <=39.99 ){
      mensagem= "Obesidade grau II (severa)"
    }  
    else if(result >=40){
      mensagem=  "Obesidade grau III (mórbida)"
    }  

    setResultado("Valor do IMC: "+result.toFixed(2)+ "\n" +mensagem );
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> IMC </Text>
     
      <View style={styles.bloco}>
          <Text style={styles.label}>Peso</Text>


          <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={peso}
            onChangeText={(valor)=>setPeso(valor)}
          />
      </View>
      <View style={styles.bloco}>
          <Text style={styles.label} >Altura</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={altura}
            onChangeText={(valor)=>setAltura(valor)}
           
          />
      </View>
      <View style={styles.bloco}>
          <TouchableOpacity style={styles.btn} onPress={calcularImc} >
              <Text style={styles.btnTxt}>Calcular</Text>
          </TouchableOpacity>
      </View>

       <Text style={styles.result}>{resultado}</Text>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  titulo:{
    textAlign:'center',
    fontSize:30,
    marginTop:80
  },
  bloco:{
    width:'100%',
    marginTop:20
  },
  label:{
    width:'80%',
    fontSize:20,
    marginLeft:'10%'
  },
  input:{
    width:'80%',
    fontSize:20,
    marginLeft:'10%',
    borderWidth:1,
    borderRadius:10
  },
  btn:{
    width:'80%',
    marginLeft:'10%',
    backgroundColor:'#000'
  },
  btnTxt:{
    fontSize:30,
    color:"#FFF",
    textAlign:'center'
  },
  result:{
    fontSize:25,
    textAlign:'center'
  }
});