import Image from "next/image";
import MenuItem from "@/components/menu-item";

export default function Home() {
  return (
    <div className="bg-white min-h-screen"><MenuItem title="Pizza Pepperoni" description="Handcrafted with the freshest ingredients, our pizza boasts a generous layer of spicy, crispy pepperoni atop a rich tomato sauce and melted mozzarella cheese." price={50} ></MenuItem></div>
  );
}
