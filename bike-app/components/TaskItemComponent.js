import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { deleteTasks } from "../redux/action";

function TaskItemComponent({ taskId, content, navigation }) {
    const dispatch = useDispatch();

    const ondeleteTask = async () => {
        dispatch(deleteTasks({ taskId }));
    };

    return (
        <View style={styles.taskContainer}>
            <View style={{ flexDirection: "row", gap: 10 }}>
                <Image source={require("../assets/task_icon.png")} />
                <Text style={styles.content}>{content}</Text>
            </View>
            <View style={styles.iconGroup}>
                <TouchableOpacity onPress={ondeleteTask}>
                    <Image style={styles.pointer} source={require("../assets/remove.png")} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Task", {
                            taskData: {
                                taskId,
                                content
                            }
                        });
                    }}
                >
                    <Image style={styles.pointer} source={require("../assets/edit.png")} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    taskContainer: {
        width: 335,
        height: 48,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#ccc",
        borderRadius: 25,
        marginTop: 10
    },

    iconGroup: {
        flexDirection: "row",
        gap: 10
    },

    content: {
        fontWeight: "bold"
    },

    pointer: {
        cursor: "pointer"
    }
});

export default TaskItemComponent;
