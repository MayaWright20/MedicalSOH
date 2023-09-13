import React from 'react';
import {
    FlatList,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import { COLORS } from '../../constants/COLORS';
import { WINDOW_WIDTH } from '../../constants/DIMENSIONS';

type ItemData = {
    id: string;
    name: string;
    title: string;
    uri: string;
};

const DATA: ItemData[] = [
    {
        id: '1',
        uri: 'https://uploads-ssl.webflow.com/620bb161f1de86f40df17bfe/625f8a129c7b7c29951a290f_1-p-500.png',
        name: 'Aamina Rafiq',
        title: 'Pharmacy Manager',
    },
    {
        id: '2',
        uri: 'https://uploads-ssl.webflow.com/620bb161f1de86f40df17bfe/625f8a42bc19ad2030678187_19-p-500.png',
        name: 'Abdal Alvi',
        title: 'Superintendent Pharmacist',
    },
    {
        id: '3',
        uri: 'https://uploads-ssl.webflow.com/620bb161f1de86f40df17bfe/62a80c324f96052ec4af0dc3_21-p-500.png',
        name: 'Ali Bashir',
        title: 'Area Manager',
    },
    {
        id: '4',
        uri: 'https://uploads-ssl.webflow.com/620bb161f1de86f40df17bfe/62a80c8f118b55525d7618bf_14-p-500.png',
        name: 'Claire Thompson',
        title: 'Buyer',
    },
    {
        id: '5',
        uri: 'https://uploads-ssl.webflow.com/620bb161f1de86f40df17bfe/62a80caa77df885269ab7f25_5-p-500.png',
        name: 'Heather Bowman',
        title: 'Accounts Lead',
    },
    {
        id: '6',
        uri: 'https://uploads-ssl.webflow.com/620bb161f1de86f40df17bfe/62a80cdfbb8180322d4242d0_17-p-500.png',
        name: 'Joanne Robertson',
        title: 'Lead Dispenser',
    },
    {
        id: '7',
        uri: 'https://uploads-ssl.webflow.com/620bb161f1de86f40df17bfe/62a80da28062fa5e5adb54c1_6-p-500.png',
        name: 'Martin  McDonald',
        title: 'Patient Care Team',
    },
    {
        id: '8',
        uri: 'https://uploads-ssl.webflow.com/620bb161f1de86f40df17bfe/62a80dc1f125cfa2c764f39a_4-p-500.png',
        name: 'Michael Hope',
        title: 'Head of Finance',
    },
    {
        id: '9',
        uri: 'https://uploads-ssl.webflow.com/620bb161f1de86f40df17bfe/625f8a242ac04b975abac62c_12-p-500.png',
        name: 'Paul Milne',
        title: 'Patient Care Team Lead',
    },
    {
        id: '10',
        uri: 'https://uploads-ssl.webflow.com/620bb161f1de86f40df17bfe/62a80e2f2bce0c0aa2cec6b1_18-p-500.png',
        name: 'Ryan McGill',
        title: 'Accounts Assistant',
    },
    {
        id: '11',
        uri: 'https://uploads-ssl.webflow.com/620bb161f1de86f40df17bfe/62a80e743b9295bac7fd69eb_7-p-500.png',
        name: 'Scott Lawrie',
        title: 'Digital Marketing Lead',
    },
];

type ItemProps = {
    item: ItemData;
    backgroundColor: string;
    textColor: string;
    uri: string;
};

const Item = ({ item, backgroundColor, textColor, uri }: ItemProps) => (
    <View style={[styles.item, { backgroundColor }]}>
        <Image style={styles.image} width={120} height={150} source={{uri: uri}}/>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.title}>{item.title}</Text>
    </View>
);

const TeamCards = () => {

    const renderItem = ({ item, index }: { item: ItemData, index: number }) => {
        let backgroundColor;
        index % 2 === 0 ? backgroundColor = COLORS.LIGHT_GREEN : backgroundColor = COLORS.LIGHT_PURPLE;
        

        return (
            <Item
                item={item}
                backgroundColor={backgroundColor}
                uri={item.uri}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                initialNumToRender={11}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
        width: WINDOW_WIDTH / 2,
        height: WINDOW_WIDTH / 1.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    image:{
        borderBottomRightRadius: 70,
        borderBottomLeftRadius: 30
    },
    name:{
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    title: {
        fontSize: 18,
        textAlign: 'center'
    },
});

export default TeamCards;