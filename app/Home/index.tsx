import { Text, View, Image } from "react-native";

import { styles } from "./styles";
import { Rating } from "@/components/Rating";
import { Button } from "@/components/Button";

export function Home() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image
					source={require("../../assets/images/f1.png")}
					style={styles.img}
					resizeMode="contain"
				/>
			</View>

			<View style={styles.content}>
				<Text style={styles.title}>Rate the product</Text>

				<Text style={styles.description}>
					How do you rate the product{"\n"}
					<Text style={styles.product}>Ferrari</Text>?
				</Text>

				<View style={styles.rating}>
					<Rating max={5} value={3} />
				</View>

				<Button title="Confirm" />
			</View>
		</View>
	);
}
