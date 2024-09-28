import { MovieBanner, MovieBody } from '@/components/movies';
import { StyleSheet, View, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <MovieBanner />
        <MovieBody />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});
