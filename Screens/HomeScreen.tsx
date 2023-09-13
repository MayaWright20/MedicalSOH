import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withDelay,
    withSpring,
    withSequence
} from 'react-native-reanimated';

import Screen from '../components/Layout/Screen';
import SimpleOnlinePharmacySVG from "../assets/logos/simple_online_pharmacy.svg";
import SimpleOnlineDocotorSVG from "../assets/logos/simple_online_doctor.svg";
import DrFelix from "../assets/logos/dr_felix.svg";
import Kapsel from "../assets/logos/kapsel.svg";
import RectagularTwoLineCard from '../components/cards/RectagularTwoLineCard';
import HealthcareCard from '../components/cards/healthcareCard';
import TeamCards from '../components/cards/teamCards';
import GreenHaze from '../components/Background/GreenHaze';
import ActionButton from '../components/Buttons/ActionButton';

import Circle from '../components/Shapes/Circle';
import Square from '../components/Shapes/Square';

import { APP_STYLING } from "../constants/APP_STYLING";
import { FONTS } from '../constants/FONT_STYLING';
import { COLORS } from '../constants/COLORS';
import { WINDOW_WIDTH } from '../constants/DIMENSIONS';


const useAnimatedStyleWithDelay = (delay, position) => {
    const sharedValue = useSharedValue(position);

    useEffect(() => {
        sharedValue.value = withSequence(
            withDelay(delay, withTiming(25, { duration: 2000 })),
            withSpring(-1)
        );
    }, []);

    

    const animatedStyle = useAnimatedStyle(() => {
        return { transform: [{ translateY: sharedValue.value }] };
    });

    return animatedStyle;
}

export default function HomeScreen({ navigation }) {

    const square1 = useAnimatedStyleWithDelay(0, 0);
    const circle1 = useAnimatedStyleWithDelay(250, 0);
    const circle2 = useAnimatedStyleWithDelay(500, 0);
    const square2 = useAnimatedStyleWithDelay(750, 0);

    return (
        <Screen childBackgroundColor={COLORS.DARK_PURPLE} header={undefined} backText={null} onBackBtnPress={null}>
            <ScrollView style={{ paddingBottom: 5 }}>
                <View style={styles.headerContainer}>
                    <Text style={[FONTS.TITLE, { color: 'white', fontSize: 30 }]}>
                        Join us on our journey to create affordable health solutions.
                    </Text>
                </View>
                <View style={styles.summaryWrapper}>

                    <View style={[styles.shapesContainer]}>
                        <Animated.View style={[styles.animatedShape, square1]}>
                            <Square width={WINDOW_WIDTH / 8} height={WINDOW_WIDTH / 8} backgroundColor={COLORS.PURPLE} />
                        </Animated.View >
                        <Animated.View style={[styles.animatedShape, circle1]}>
                            <Circle width={WINDOW_WIDTH / 8} height={WINDOW_WIDTH / 8} backgroundColor={COLORS.GREEN} />
                        </Animated.View>
                        <Animated.View style={[styles.animatedShape, circle2]}>
                            <Circle width={WINDOW_WIDTH / 8} height={WINDOW_WIDTH / 8} backgroundColor={COLORS.PURPLE} />
                        </Animated.View>
                        <Animated.View style={[styles.animatedShape, square2]}>
                            <Square width={WINDOW_WIDTH / 8} height={WINDOW_WIDTH / 8} backgroundColor={COLORS.GREEN} />
                        </Animated.View>
                    </View>






                    <Text style={[FONTS.TITLE, { fontSize: 21, paddingBottom: 5 }]}>
                        We started off as a pharmacy with big dreams.
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: 'center', paddingBottom: APP_STYLING.PADDING.paddingBottom }}>
                        Founded in 2015, Simple Online Healthcare began life providing over the counter treatments to patients across the UK. This quickly expanded into private online GP clinics, and NHS prescriptions. Today, we are trusted by over 1000 patients per day, to make sure they receive their medication safely and on time.
                    </Text>
                    <View>
                        <RectagularTwoLineCard fontSize={40} title="500,000+" description="Patients served annually" />
                        <RectagularTwoLineCard fontSize={40} title="3" description="Countries serviced" />
                        <RectagularTwoLineCard fontSize={40} title="65+" description="Team Members" />
                    </View>
                </View>
                <View style={[styles.summaryWrapper, { backgroundColor: COLORS.LIGHT_PURPLE }]}>
                    <Text style={[FONTS.TITLE, { fontSize: 21, paddingBottom: 5 }]}>
                        Our growing family
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: 'center', paddingBottom: APP_STYLING.PADDING.paddingBottom }}>
                        From our beginnings in local community pharmacy, Simple Online Healthcare has grown to now have digital health services in the UK, Australia and Germany.
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: 'center', paddingBottom: APP_STYLING.PADDING.paddingBottom }}>
                        The aim of each service is to make healthcare easily, accessible and simple for our patients.
                    </Text>
                    <HealthcareCard text={`Simple Online Pharmacy launched in 2015, our UK registered pharmacy and doctor service provides both NHS and private services.\n\nOur convenient NHS prescription pouch service is helping patients across the UK keep their medication organised, and improve compliance.\n\nOur private GP services give patients the chance to obtain treatment for a number of common conditions from the convenience of their own home.`}>
                        <SimpleOnlinePharmacySVG width={300} />
                    </HealthcareCard>
                    <HealthcareCard text={`\nOur Australian digital health service was launched in 2016, and provides easy access to basic healthcare online.\n\nSimple Online Doctor has serviced patients from the major population centres on the coast, to tiny outback towns.`}>
                        <SimpleOnlineDocotorSVG width={300} />
                    </HealthcareCard>
                    <HealthcareCard text={`\nDr Felix, founded in 2013, is an online clinic offering GP consultations, home test kits and prescription medication delivered, all from the comfort of your home.\n\nIt was one of the earlier online doctor and pharmacy brands in the UK with a focus on transparent pricing and making treatments more accessible and affordable. It will be our second UK online doctor brand.`}>
                        <DrFelix width={300} />
                    </HealthcareCard>
                    <HealthcareCard text={`\nKapsel will be our direct to consumer German telehealth brand. It was created to fulfil the growing need for German patients seeking affordable and convenient care.\n\nThe telehealth landscape in Germany is rapidly shifting and Kapsel is strategically positioned to satisfy this demand.\n\nKapsel does not currently work with insurance and is only available in Germany.`}>
                        <Kapsel width={300} />
                    </HealthcareCard>
                </View>
                <View style={[{ paddingTop: 20, backgroundColor: COLORS.WHITE }]}>
                    <Text style={[FONTS.TITLE, { fontSize: 21, paddingBottom: 5 }]}>
                        Meet the team
                    </Text>
                </View>
                <View style={{ backgroundColor: COLORS.WHITE }}>
                    <TeamCards />
                </View>
                <GreenHaze>
                    <View style={{ backgroundColor: COLORS.WHITE, borderRadius: 15, margin: 25, padding: 10, alignItems: 'center' }}>
                        <Text style={[FONTS.TITLE, { fontSize: 21, paddingBottom: 5 }]}>
                            Join our team
                        </Text>
                        <Text style={{ fontSize: 18, textAlign: 'center', paddingBottom: APP_STYLING.PADDING.paddingBottom }}>
                            We're always on the lookout for talent. If you're passionate about helping make lives easier, we'd love to hear from you.
                        </Text>
                        <ActionButton underlayColor={COLORS.DARK_PURPLE} color={COLORS.WHITE} backgroundColor={COLORS.PURPLE} title="VIEW OPEN POSITIONS" onPress={() => navigation.navigate('CareersScreen')} />
                    </View>
                </GreenHaze>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.DARK_PURPLE,
    },
    logo: {
        alignItems: 'center'
    },
    headerContainer: {
        backgroundColor: COLORS.DARK_PURPLE,
        width: WINDOW_WIDTH,
        alignItems: 'center',
        paddingBottom: APP_STYLING.PADDING.paddingBottom,
        paddingHorizontal: '1%'
    },
    shapesContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: WINDOW_WIDTH / 8,
        marginLeft: WINDOW_WIDTH / 8,
        marginRight: WINDOW_WIDTH / 8,
        marginTop: WINDOW_WIDTH / 25,
        marginBottom: WINDOW_WIDTH / 12,
        justifyContent: 'space-between',
    },
    animatedShape: {

    },
    summaryWrapper: {
        backgroundColor: COLORS.WHITE,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10
    }
});