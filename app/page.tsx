import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex justify-between content-center">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
