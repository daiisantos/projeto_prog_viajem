import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

export default function FavoritosScreen({ route }) {

  const navigation = useNavigation();

  const { name, capital, flag } = route.params || {};

  return (

    <View style={{
      flex:1,
      backgroundColor:'#F3F6FB',
      padding:20
    }}>

      {/* VOLTAR */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginTop:40,
          marginBottom:20
        }}
      >
        <AntDesign
          name="left"
          size={24}
          color="#2F6FDB"
        />
      </TouchableOpacity>

      <Text style={{
        fontSize:28,
        fontWeight:'bold',
        marginBottom:25
      }}>
        Favoritos
      </Text>

      {name ? (

        <View style={{
          backgroundColor:'#fff',
          borderRadius:18,
          padding:15,
          flexDirection:'row',
          alignItems:'center',
          elevation:3
        }}>

          <Image
            source={{
              uri: flag
            }}
            style={{
              width:60,
              height:40,
              borderRadius:5
            }}
          />

          <View style={{
            marginLeft:15
          }}>

            <Text style={{
              fontSize:18,
              fontWeight:'bold'
            }}>
              {name}
            </Text>

            <Text style={{
              color:'gray'
            }}>
              Capital: {capital || 'Sem capital'}
            </Text>

          </View>

        </View>

      ) : (

        <Text style={{
          color:'gray'
        }}>
          Nenhum favorito ainda
        </Text>

      )}

    </View>
  );
}