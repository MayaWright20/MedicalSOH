import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { FONTS } from "../../constants/FONT_STYLING";
import { COLORS } from "../../constants/COLORS";
import SearchBar from "../../components/Search/SearchBar";
import RectagularTwoLineCard from "../../components/cards/RectagularTwoLineCard";
import Screen from "../../components/Layout/Screen";

const dummyCareersData = require('../../data/dummyData/dummyCareersData.json');

export default function CareersScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(dummyCareersData);
    }, [])

    const itemRendered = (item) => {
        return (
            <Pressable key={item.id} onPress={() => { Alert.alert('This is Fake, hire Maya!') }}>
                <RectagularTwoLineCard fontSize={20} title={item.jobTitle} description={`${item.department} - ${item.City}`} />
            </Pressable>
        )
    }

    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    const filterFunction = (query, data) => {
        if (query) {
            const lowerCaseQuery = query.toLowerCase();
            return data.filter(item =>
                item.jobTitle.toLowerCase().includes(lowerCaseQuery) ||
                item.department.toLowerCase().includes(lowerCaseQuery) ||
                item.City.toLowerCase().includes(lowerCaseQuery)
            );
        } else {
            return data;
        }
    };

    return (
        <Screen childBackgroundColor={COLORS.WHITE} header="Careers" backText={true} onBackBtnPress={() => navigation.navigate('HomeScreen')}>
            <View style={styles.summaryWrapper}>
                <Text style={[FONTS.TITLE, { fontSize: 21 }]}>
                    We're growing our team.
                </Text>
                <Text style={{ fontSize: 18, textAlign: 'center' }}>
                    We're always on the lookout for talent, so even if the job you're looking for is not listed below, feel free to drop us your CV. We may make a position for you, and reach out when we need help in your area of expertise!
                </Text>
            </View>
            <View style={[{ backgroundColor: COLORS.WHITE, flex: 1, paddingLeft: 10, paddingRight: 10 }]}>
                <SearchBar
                    data={data.jobs}
                    filterFunction={filterFunction}
                    itemRendered={itemRendered}
                    onChangeText={handleSearchChange}
                />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    summaryWrapper: {
        backgroundColor: COLORS.WHITE,
        padding: 15,
    }
});
