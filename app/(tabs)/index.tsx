import { useAuth } from "@/lib/auth-context";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
  const {signOut} = useAuth();
  return (
    <View
      style={styles.view}
    >
      <Button onPress={signOut} icon={"logout"}>
        Sign Out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginTop: 20,
  }
})