import { StyleSheet, View } from "react-native";
import Topo from "./components/Topo";
import Detalhe from "./components/Detalhe";
import carrinho from '../../mocks/carrinho';

export default function Carrinho() {
  return (
    <>
      <Topo titulo={carrinho.topo.titulo} />
      <View style={estilos.carrinho}>
        <Detalhe />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
