import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import favoriteIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://avatars2.githubusercontent.com/u/37600134?s=460&u=3dc28ef99de0d7ec9742c12a3b804e5aa1aebfff&v=4'}}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Davyson Melo</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.{'\n'}{'\n'}
        Qui officia eum voluptatum nihil voluptates explicabo omnis minus!
        Dolore, voluptatem unde.
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'  '}
          <Text style={styles.priceValue}>R$ 80,00</Text>
        </Text>
        
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/*<Image source={favoriteIcon}/>*/}
            <Image source={unfavoriteIcon}/>
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem;