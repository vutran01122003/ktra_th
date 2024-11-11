import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { addBike } from "../redux/action";
import { TouchableOpacity } from "react-native";

function CreateBike({ navigation }) {
    const dispatch = useDispatch();
    const [bikeName, setBikeName] = useState("");
    const [bikePrice, setBikePrice] = useState("");

    console.log(bikeName);
    const onAddBike = async () => {
        if (!bikeName || !bikePrice) return;
        console.log("ok");
        await dispatch(
            addBike({
                type: 1,
                name: bikeName,
                price: bikePrice
            })
        );
    };

    return (
        <View style={{ width: "100%", height: "100%", alignItems: "center", gap: 10 }}>
            <TextInput
                placeholder="Enter bike name"
                onChangeText={setBikeName}
                style={{ width: "80%", height: 48, borderWidth: 1, borderRadius: 10, padding: 10 }}
            />

            <TextInput
                placeholder="Enter bike price"
                onChangeText={setBikePrice}
                style={{ width: "80%", height: 48, borderWidth: 1, borderRadius: 10, padding: 10 }}
            />

            <label
                style={{
                    display: "block",
                    width: "80%",
                    height: 48,
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    borderColor: "black"
                }}
                for="image"
            >
                Chọn ảnh
            </label>
            <input hidden id="image" type="file" />

            <TouchableOpacity
                onPress={async () => {
                    await onAddBike();
                    navigation.navigate("Bike");
                }}
            >
                <View
                    style={{
                        height: 48,
                        borderWidth: 1,
                        borderRadius: 10,
                        padding: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "pink"
                    }}
                >
                    <Text style={{ fontWeight: "bold" }}>Add bike</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default CreateBike;
