import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

import logo from "../../../../assets/logo.png";

export default function Detalhe() {
  return (
    <>
        <Text style={estilos.titulocarrinho}>Carrinho de compras</Text>

        <View style={estilos.fazenda}>
          <Image style={estilos.imagemFazenda} source={logo} />
          <Text style={estilos.nomefazenda}>Fazenda Etec Cidade do Livro</Text>
        </View>

        <Text style={estilos.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para a sua cozinha
        </Text>

        <Text style={estilos.preco}>R$ 40,00</Text>
    </>
  );
}

const estilos = StyleSheet.create({
    
    titulocarrinho: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646"
      },
    
      nomefazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
      },
    
      imagemFazenda: {
        width: 32,
        height: 32
      },
    
      fazenda: {
        flexDirection: "row",
        paddingVertical: 12
      },
      
      descricao: {
        color: "#a3a3a3",
        fontStyle: "italic"
      },
    
      preco: {
        fontSize: 26,
        lineHeight: 42,
        color: "#2a9f85",
        marginTop: 8
      }
  });
