import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import InstaGitHubCad from './Card';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      < ScrollView>
        {
          [
            'joaovrmoraes',
            'omariosouto',
            'vweberfroes',
            'gabrielfroes',
            'peas',
          ].map((githubUser) =>
            < InstaGitHubCad key={githubUser} githubUser={githubUser} />
          )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
