import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import { getAllPosts, getLatestPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'

const Profile = () => {
 
  

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () =>{
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }

 
  return (
    <SafeAreaView className="bg-primary border-2 h-full">
      <FlatList 
        
        data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.title}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              
              <View className="mt-1.5">
              </View>
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode='contain'
                />
            </View>


            
            <View className ="   justify-center items-center">
              <View className="w-16 h-16 border border-secondary"> 

              <Image 
              source={images.profile}
              className="w-[100%] h-[62] rounded-lg  "
              resizeMode='cover'
              />
              </View>
              <Text></Text>
              <Text className=" text-sm text-gray-100 font-psemibold">User</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
          title="No Videos Found"
          subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  )
}

export default Profile