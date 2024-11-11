import { useEffect, useState } from "react";
import { Image, Text, View, ScrollView } from "react-native";
import { getDataApi, postDataApi } from "../utils/fetchData";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getBikes } from "../redux/action";

const mappingImage = {
    "../assets/bione-removebg-preview.png": require("../assets/bione-removebg-preview.png"),
    "../assets/bike2.png": require("../assets/bike2.png"),
    "../assets/bike3.png": require("../assets/bike3.png")
};

function Bike() {
    const dispatch = useDispatch();
    const bikeState = useSelector((state) => state);
    const bikeList = bikeState?.bikeList || [];
    const bikeType = ["All", "Roadbike", "Mountain"];

    useEffect(() => {
        dispatch(getBikes());
    }, []);

    return (
        <View style={{ height: "100%", width: "100%" }}>
            <View style={{ padding: 30 }}>
                <Text style={{ fontWeight: 700, fontSize: 25, color: "red" }}>The world's Best Bike</Text>
            </View>

            <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", color: "#333" }}>
                {bikeType.map((item, index) => (
                    <TouchableOpacity>
                        <View
                            style={{
                                borderWidth: 1,
                                padding: 10,
                                borderRadius: 10,
                                minWidth: 120,
                                fontWeight: "bold",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            {item}
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView>
                <View style={{ width: "100%", height: "100%", flexDirection: "row", flexWrap: "wrap" }}>
                    {bikeList.length > 0 &&
                        bikeList.map((bike, index) => (
                            <View
                                style={{
                                    width: "43%",
                                    margin: 10,
                                    backgroundColor: "#cccc",
                                    borderRadius: 25,
                                    height: 250,
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: 10,
                                    borderWidth: 2,
                                    borderColor: "gray"
                                }}
                            >
                                <Image
                                    source={mappingImage[bike.image]}
                                    style={{ width: "50%", resizeMode: "contain" }}
                                />
                                <Text style={{ fontWeight: "bold", color: "gray" }}>{bike?.name}</Text>
                                <Text style={{ fontWeight: "bold", color: "#333" }}>${bike?.price}</Text>
                            </View>
                        ))}
                </View>
            </ScrollView>
        </View>
    );
}

export default Bike;
