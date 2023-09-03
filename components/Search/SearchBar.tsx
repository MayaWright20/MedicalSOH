import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { COLORS } from "../../constants/COLORS";
import { AntDesign } from '@expo/vector-icons';
import { WINDOW_HEIGHT } from "../../constants/DIMENSIONS";

export default function SearchBar({data, itemRendered, onChangeText, filterFunction}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(data);

    useEffect(() => {
        setFilteredDataSource(data);
    }, [data])

    function searchFilterFunction(text) {
        if (text) {
            const newData = filterFunction(text, data);
            setFilteredDataSource(newData);
            setSearchQuery(text);
        } else {
            setFilteredDataSource(data);
            setSearchQuery(text);
        }
    }

    const ItemView = ({ item }) => {
        return (
            <View>
                {itemRendered(item)}
            </View>
        );
    };

    return (
        <>
            <View style={[styles.searchBarContainer, {backgroundColor: COLORS.WHITE}]}>
                <TextInput
                    style={styles.textInput}
                    multiline={false}
                    value={searchQuery}
                    placeholder="Search Jobs"
                    onChangeText={searchFilterFunction}
                />
                <AntDesign name="search1" size={24} color={COLORS.DARK_PURPLE} />
            </View>
            
            <FlatList
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                renderItem={ItemView}
            />
        </>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        height: WINDOW_HEIGHT / 15,
        margin: 15,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: COLORS.DARK_PURPLE,
        display: 'flex',
        flexDirection: 'row',
        paddingRight: '10%',
        paddingLeft: '10%',
        backgroundColor: COLORS.WHITE
    },
    textInput: {
        backgroundColor: COLORS.WHITE,
        width: '100%',
        height: '100%',
    }
})
