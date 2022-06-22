import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { Avatar, Badge } from 'react-native-elements';
import { Socials } from '../../Components';

const DoctorProfile = () => {

    const options = [
        { label: "About ", value: "About" },
        { label: "Qualification", value: "Qualification" },
        { label: "Specialization", value: "Specialization" },
        { label: "Contact", value: "Contact" }
    ];
    const [About, setAbout] = React.useState(true);
    const [Qalification, setQualification] = React.useState(false);
    const [Specialization, setSpecialization] = React.useState(false);
    const [Contact, setContact] = React.useState(false);

    const check = ((value) => {

        if (value == 'About') {
            setAbout(true)
            setQualification(false)
            setSpecialization(false)
            setContact(false)
        }

        if (value == 'Qualification') {
            setQualification(true)
            setAbout(false)
            setSpecialization(false)
            setContact(false)
        }

        if (value == 'Specialization') {
            setSpecialization(true)
            setAbout(false)
            setQualification(false)
            setContact(false)
        }

        if (value == 'Contact') {
            setContact(true)
            setAbout(false)
            setQualification(false)
            setSpecialization(false)

        }

    })

    return (
        <>
            <View>
                <View style={styles.container}>
                    <View style={{ marginTop: 50, marginLeft: 10 }}>
                        <Avatar style={styles.avatar}
                            rounded
                            source={{
                                uri: 'https://randomuser.me/api/portraits/men/44.jpg',
                            }}
                            size="large"
                        />
                        <Badge
                            status="success"
                            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                        />
                    </View>
                    <Text style={styles.textTitle}>Dr Sighn</Text>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Socials text="Following" number="15" />
                    <View style={styles.pole} />
                    <Socials text="Followers" number="3000K" />
                    <View style={styles.pole} />
                    <Socials text="Likes" number="3.1M" />
                </View>

                <View>
                    <SwitchSelector
                        options={options}
                        initial={0}
                        style={styles.tab}
                        onPress={value => check(value)}
                        testID="gender-switch-selector"
                        accessibilityLabel="gender-switch-selector"
                        hasPadding
                    />
                </View>
            </View>
            {About ? <View style={styles.words}>
                <Text style={styles.textTitle2}>
                    Hi I am Dr Sighn , I have a major in neurosurgery.
                    To become a nuerosurgent you have to study for 7to8 years in residency to optain a degree in Doctor of medicine(M.D).
                    I really love the work I do , I'm a very determined person and devoted to being a Dr.
                </Text>
            </View> : <View></View>}
            {Qalification ? <View style={styles.words}>
                <Text style={styles.textTitle2}>
                    Becoming a doctor isn’t just a career move. Medicine is something that you devote your life to studying and practising
                    After all, you will be making decisions that directly impact patients’ lives.
                    It’s therefore essential that you understand the intricacies of the human body and have undergone the highest level of training.
                    As such, a career in medicine is academically rigorous.
                </Text>
            </View> : <View></View>}
            {Specialization ? <View style={styles.words}>
                <Text style={styles.textTitle2}>
                    Neurologists
                    These are specialists in the nervous system, which includes the brain, spinal cord, and nerves.
                    They treat strokes, brain and spinal tumors, epilepsy, Parkinson's disease, and Alzheimer's disease.
                </Text>
            </View> : <View></View>}
            {Contact ? <View style={styles.words}>
                <Text style={styles.textTitle2}>
                    Mr Sighn@gmail.com
                    0730772725
                </Text>
            </View> : <View></View>}

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 15,

    },

    textTitle: {
        color: 'red',
        fontSize: 25,
        marginTop: 5,

    },

    textTitle2: {
        fontSize: 15,
        marginTop: 20,
        marginLeft: 5,

    },

    box: {
        flexDirection: "row",

    },

    tab: {
        paddingLeft: 10

    },

    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
        margingTop: 80,
        borderBottomWidth: 3,
        borderColor: 'turquoise',
        shadowColor: 'grey',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        elevation: 1,

    },

    words: {
        width: 250,
        marginLeft: 20,

    },
    pole: {
        borderLeftWidth: 1,
        borderLeftColor: 'grey',
        height: 40,
        alignSelf: 'center',
        marginRight: 10,
        marginLeft: 0
    }

})
export default DoctorProfile;