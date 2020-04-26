import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as Font from 'expo-font';
import Einstein from './components/Einstein';
import Stars from './components/Stars';
import { AppLoading } from 'expo';
import AsparagusText from './components/AsparagusText';
import Question from './components/Question';
import Modal from './components/Modal';
import { fetchQuestions } from './api/index';
import { colors } from './constants/colors';

const loadFonts = async () => {
  await Font.loadAsync({
    'asparagus-regular': require('./assets/fonts/asparagus-sprouts-regular.ttf'),
  });
};

export default function App() {
  const [ready, setReady] = useState<boolean>(false);
  const [questions, setQuestions] = useState<string[]>([]);
  const [url, setUrl] = useState<string>('http://localhost:3000/');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  useEffect(() => {
    if (!questions.length && url !== null && !modalOpen) {
      try {
        fetchQuestions(url).then((q) => {
          console.log('fetched questions...', q);
          setQuestions(q.questions);
        });
      } catch {
        Alert.alert('There was a problem fetching questions!');
      }
    }
  });
  if (!ready) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setReady(true)} />
    );
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/images/einstein/bg.jpg')}
        style={{
          flex: 0.6,
          width: '100%',
          paddingTop: 15,
          position: 'relative',
        }}
      >
        <View style={styles.backContainerOuter}>
          <TouchableOpacity style={styles.backContainerInner}>
            <Image
              style={{ height: '40%', width: '30%', marginRight: 5 }}
              source={require('./assets/images/back-icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.coinsContainer}
            onPress={() => setModalOpen(true)}
          >
            <AsparagusText style={styles.coinsText}>130</AsparagusText>
            <Image
              style={{ height: '50%', width: 30 }}
              source={require('./assets/images/coins.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.einsteinContainer}>
          <Einstein resizeMode="stretch" style={styles.einstein} />
        </View>
        <View style={styles.starsContainer}>
          <Stars />
        </View>
        <View style={styles.energyContainer}>
          <Image
            resizeMode="contain"
            style={{ height: 100, width: 30 }}
            source={require('./assets/images/energy-full.png')}
          />
        </View>
      </ImageBackground>
      <View style={{ flex: 0.4, width: '100%' }}>
        <View style={{ marginTop: 'auto', marginBottom: 20 }}>
          {questions.map((q) => (
            <View style={styles.questionContainer}>
              <Question>{q}</Question>
            </View>
          ))}
        </View>
      </View>
      <Modal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        inputValue={url || ''}
        onChange={setUrl}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  einsteinContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  einstein: {
    width: '90%',
    height: '90%',
  },
  energyContainer: {
    position: 'absolute',
    bottom: 5,
    right: 10,
  },
  backContainerOuter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    height: 45,
    zIndex: 33,
  },
  backContainerInner: {
    backgroundColor: colors.PINK,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    width: 40,
    borderBottomRightRadius: 5,
  },
  coinsText: {
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 26,
  },
  coinsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.PINK,
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    width: 90,
  },
  starsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  questionContainer: {
    borderTopColor: 'black',
    borderTopWidth: 0.3,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
