import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import { getAllPosts, getLatestPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'

const Bookmark = () => {
 
  

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () =>{
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }

 
  return (
    <SafeAreaView className="bg-primary border-2 h-full">
      <View className ="   justify-center items-center">
      <Text className=" text-4xl text-white font-bold text-center">Coming Soon</Text>

      </View>
    </SafeAreaView>
  )
}

export default Bookmark