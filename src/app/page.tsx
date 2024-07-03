import MenuItem from "@/components/menu-item";
import {MealCreateRequest} from "@/api/meal/request/meal-create-request";
import {CONSTANTS} from "@/api/constants";
import ByteArrayToImage from "@/utils/byte-array-to-image";

export default function Home() {
  let meal: MealCreateRequest = {
    title: "Pizza",
    description: "Handcrafted with the freshest ingredients, our pizza boasts a generous layer of spicy, crispy pepperoni atop a rich tomato sauce and melted mozzarella cheese.",
    calories: 15,
    price: 50,
    image: ByteArrayToImage(CONSTANTS.imageByteArray)
  };

  return (
    <div className="bg-white min-h-screen"><MenuItem title={meal.title} description={meal.description} price={meal.price}  calories={meal.calories} image={meal.image}></MenuItem></div>
  );
}
