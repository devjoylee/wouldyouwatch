import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Movie } from '@/types';

export const MovieBannerItem = ({ item }: { item: Movie }) => {
  return (
    <ImageBackground
      style={styles.bannerContainer}
      resizeMode='cover'
      source={{
        uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
      }}
    >
      <LinearGradient colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0,7)']} style={styles.buttonContainer}>
        <Text style={styles.text}>My List</Text>

        <TouchableOpacity
          onPress={() => {
            console.log('Clicked Play Button');
          }}
          activeOpacity={0.8}
          style={styles.button}
        >
          <Ionicons size={28} name='play' color='#000' />
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Info</Text>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    width: responsiveWidth(100),
    height: '100%',
    justifyContent: 'flex-end',
    opacity: 0.9,
  },
  buttonContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingBottom: 10,
  },
  text: {
    fontSize: responsiveFontSize(2.3),
    color: 'white',
    fontWeight: '500',
  },
  button: {
    backgroundColor: 'white',
    width: 100,
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  buttonText: {
    fontSize: responsiveFontSize(2.2),
    color: 'black',
    fontWeight: '700',
  },
});
