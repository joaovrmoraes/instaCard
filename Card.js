import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

function InstaGitHubCad({ githubUser }) {
    const [liked, setLikeState] = useState(false);
    return (
        <>
            <View style={styles.instaCardHeader}>
                <Image
                    style={styles.cardHeaderImg}
                    source={{
                        uri: `https://github.com/${githubUser}.png`
                    }}
                />
                <Text style={{ fontWeight: 'bold' }} >@{githubUser}</Text>
            </View>
            <Image
                style={{
                    width: '100%',
                    height: 350,
                }}
                source={{
                    uri: `https://github.com/${githubUser}.png`
                }}
            />
            <View style={styles.instaCardHeader}>
                <TouchableOpacity onPress={() => { setLikeState(!liked) }}>
                    {liked && <Ionicons name="ios-heart" size={24} color="red" />}
                    {!liked && <Ionicons name="ios-heart-outline" size={24} color="black" />}
                </TouchableOpacity>
            </View>
        </>
    )
}
export default InstaGitHubCad

const styles = StyleSheet.create({
    instaCardHeader: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },
    cardHeaderImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    }
});