import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
            this.movies = responseJson.movies;
        })
        .catch((error) => {
            console.error(error);
        });
    }
    render() {
        const {movies} = this.movies;
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <TextInput underlineColorAndroid='transparent' style={styles.textInput} placeholder='Try "Shima" '/>
                </View>
                <View style={styles.body}>
                    <Text style={styles.sectionHeader}>Near You</Text>
                    <View style={styles.listContainer}>
                        <FlatList
                            horizontal
                            data={[{key: 'a0'},{key: 'ba'}]}
                            renderItem={({ item }) => 
                                console.log(movies)
                            // <View style={styles.listItem}>
                            //         <Text>{item}</Text>
                            //     </View>
                            }
                            keyExtractor={item => item.title}
                        />
                    </View>
                </View>
                <View style={styles.tabBar}>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name='comment' size={32} color="#000" />
                        <Text style={styles.tabTitle}>Menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name='search' size={32} color="#000" />
                        <Text style={styles.tabTitle}>Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name='heart' size={32} color="#000" />
                        <Text style={styles.tabTitle}>Saved</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name='trash' size={32} color="#000" />
                        <Text style={styles.tabTitle}>Trash</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name='bell' size={32} color="#000" />
                        <Text style={styles.tabTitle}>Notifications</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navbar: {
        height: 125,
        elevation: 3,
        backgroundColor: '#fffdfb',
        flexDirection: 'row',
        paddingHorizontal: 25,
        alignItems: 'center',
    },
    textInput: {
        elevation: 1,
        borderBottomWidth: 0,
        height: 50,
        width: '100%',
        paddingHorizontal: 15,
        borderRadius: 3,
    },
    body: {
        flex: 1,
    },
    tabBar: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
        elevation: 3
    },
    tabTitle: {
        fontSize: 11,
        color: '#3c3c3c'
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionHeader: {
        fontSize: 26,
        fontWeight: '700',
        color: '#3c3c3c',
        padding: 25
    },
    listContainer: {
        height: 150,
        paddingLeft: 25,
    },
    list: {
        backgroundColor: 'black',
        opacity: 0.5
    },
    listItem: {
        height: 125,
        width: 125,
        backgroundColor: 'white',
        marginRight: 15,
        marginTop: 5,
        elevation: 5,
        borderRadius: 3
    }
});
