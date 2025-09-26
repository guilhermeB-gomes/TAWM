import React from 'react';
import { Pressable, View, Text } from 'react-native';

import { styles } from './GalleryStyle';

export function Gallery({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>GALLERY</Text>
      <Pressable style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar para Home</Text>
      </Pressable>
    </View>
  );
}