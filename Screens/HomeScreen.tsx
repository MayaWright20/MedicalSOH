import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

import Logo from "../assets/logos/soh_light.svg";
import SimpleOnlinePharmacySVG from "../assets/logos/simple_online_pharmacy.svg";
import SimpleOnlineDocotorSVG from "../assets/logos/simple_online_doctor.svg";
import DrFelix from "../assets/logos/dr_felix.svg";
import Kapsel from "../assets/logos/kapsel.svg";
import StatisticsBox from '../components/Background/StatisticsBox';
import HealthcareCard from '../components/cards/healthcareCard';
import TeamCards from '../components/cards/teamCards';
import GreenHaze from '../components/Background/GreenHaze';
import ActionButton from '../components/Buttons/ActionButton';

import { APP_STYLING } from "../constants/APP_STYLING";
import { FONTS } from '../constants/FONT_STYLING';
import { COLORS } from '../constants/COLORS';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../constants/DIMENSIONS';

export default function HomeScreen() {
    return (
        <View style={[styles.container]}>
            <StatusBar style="auto" />
            <SafeAreaView>
                <View style={styles.logo}>
                    <Logo width={200} />
                </View>
                <ScrollView>
                    <View style={styles.headerContainer}>
                        <Text style={[FONTS.TITLE, { color: 'white', fontSize: 30 }]}>
                            Join us on our journey to create affordable health solutions.
                        </Text>
                    </View>
                    <View style={styles.summaryWrapper}>
                        <Text style={[FONTS.TITLE, { fontSize: 21, paddingBottom: 5 }]}>
                            We started off as a pharmacy with big dreams.
                        </Text>
                        <Text style={{ fontSize: 18, textAlign: 'center', paddingBottom: APP_STYLING.PADDING.paddingBottom }}>
                            Founded in 2015, Simple Online Healthcare began life providing over the counter treatments to patients across the UK. This quickly expanded into private online GP clinics, and NHS prescriptions. Today, we are trusted by over 1000 patients per day, to make sure they receive their medication safely and on time.
                        </Text>
                        <ScrollView>
                            <StatisticsBox title="500,000+" description="Patients served annually" />
                            <StatisticsBox title="3" description="Countries serviced" />
                            <StatisticsBox title="65+" description="Team Members" />
                        </ScrollView>
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
                            <ActionButton color={COLORS.WHITE} backgroundColor={COLORS.PURPLE} title="VIEW OPEN POSITIONS" onPress={undefined} />
                        </View>
                    </GreenHaze>
                </ScrollView>
            </SafeAreaView>
        </View>
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
    summaryWrapper: {
        backgroundColor: COLORS.WHITE,
        padding: 10,
    }
});