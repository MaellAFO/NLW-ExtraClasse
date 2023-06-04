import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View , TouchableOpacity } from 'react-native';
import blurBg from './scr/assets/luz.png';
import {
  useFonts, Roboto_400Regular, Roboto_700Bold
} from '@expo-google-fonts/roboto';
import {
  BaiJamjuree_700Bold
} from '@expo-google-fonts/bai-jamjuree';
import Strips from './scr/assets/stripes.svg';
import NLWLogo from './scr/assets/nlwspacetime-logo.svg';

const StyleStripes = styled(Strips)
export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  })
  if(!hasLoadedFonts){
    return null
  }
  return (
    <ImageBackground source={blurBg} className="flex-1 items-center justify-center bg-gray-900"
    imageStyle={{position:'absolute', left:'-100%'}}
    >
      
      <Text className='text-5xl font-bold text-gray-50 font-title'>Open up App.js to start working on your app!</Text>
      <StyleStripes className='absolute left-2'/>
      <View className='flex-1 items-center justify-center gap-6'><View/>
      
      <NLWLogo/>
      <View className='spacey-2'>
        <Text className='text-center font-title text-2xl leading-licht text-gray-50'>
        Sua cápsula do tempo
        </Text>
        <Text className='text-center font-body text-base leading-relaxed text-gray-100 px-8'>
        Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
        </Text>
      </View>

      <TouchableOpacity activeOpacity={0.7} className='rounded-full bg-green-500 px-5 py-3'>
<Text className='font-alt text-sm uppercase text-black'>Cadastrar lembrança</Text>
      </TouchableOpacity>

      <Text className='text-center text-sm leading-relaxed font-title py-10 text-gray-200'>Feito com 💜 no NLW da Rocketseat</Text>

      <StatusBar style="light" translucent />
      
      </View>
      
    </ImageBackground>
  );
}

