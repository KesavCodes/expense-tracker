import { StyleSheet, Text, View } from "react-native"

const ShowTotal = ({expenseData}) => {
  const expenseTotal = expenseData.reduce((acc, curr)=> acc + curr.amount,0).toFixed(2)
  return (
    <View style={styles.amountContainer}>
        <Text style={styles.amountText}>Total</Text>
        <Text style={styles.amountValue}>${expenseTotal}</Text>
    </View>
  )
}

export default ShowTotal;

const styles = StyleSheet.create({
    amountContainer: {
        backgroundColor: "#D45D79",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    amountText: {
        fontSize: 16,
        fontWeight: "500"
    },
    amountValue: {
        fontSize: 16,
        fontWeight: "bold"
    }
})