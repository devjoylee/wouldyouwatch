import { SeriesBanner, SeriesBody } from '@/components/series';
import { StyleSheet, View, ScrollView } from 'react-native';

export default function SeriesScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <SeriesBanner />
        <SeriesBody />
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
