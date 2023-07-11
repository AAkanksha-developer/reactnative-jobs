
import { useState } from 'react';
import {View, ScrollView,SafeAreaView,Text} from 'react-native';
import { Stack,useRouter } from 'expo-router';
import { COLORS,icons,images,SIZES } from '../constants';

import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn';
import Welcome from '../components/home/welcome/Welcome';
import PopularJobs from '../components/home/popular/PopularJobs';
import NearbyJobs from '../components/home/nearby/NearbyJobs';





const Home=()=>{
    const router= useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <SafeAreaView style={{ flex:1,backgroundColor:COLORS.lightWhite
        }}>
            <Stack.Screen
            options={{headerStyle:{backgroundColor:COLORS.lightWhite},
        headerShadowVisible:false,
        headerLeft:()=>{ return (
           <ScreenHeaderBtn iconURL={icons.menu} dimension='60%'/>)
        },
        headerRight:()=>{ return(
            <ScreenHeaderBtn iconURL={images.profile} dimension='60%'/>);
        },
        headerTitle:""
        
}}
            />
           <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{
                flex:1,
                padding:SIZES.medium
            }}>
            <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
            
            />
            <PopularJobs/>
             <NearbyJobs/>
            </View>
           </ScrollView>
        </SafeAreaView>);
}

export default Home;