import { View, Text, StyleSheet, Image } from "react-native";

function HeaderComponet() {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.userInfo}>
                <Image source={require("../assets/avatar.png")} />
                <View>
                    <Text style={styles.title}>{`Hi Vu Tran`}</Text>

                    <Text style={styles.content}>Have agrate day a head</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between"
    },

    userInfo: {
        flexDirection: "row",
        gap: 5
    },

    title: {
        fontWeight: "bold",
        fontSize: 20
    },

    content: {
        color: "gray",
        fontWeight: "bold"
    },

    goBackBtn: {
        marginTop: 10
    }
});

export default HeaderComponet;
