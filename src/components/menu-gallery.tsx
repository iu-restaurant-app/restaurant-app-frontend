import MenuItem, { MenuItemProps } from '@/components/menu-item';

interface MenuGalleryProps {
  items: MenuItemProps[];
}

export default function MenuGallery(props: MenuGalleryProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-[100px]">
      {props.items.map((item: MenuItemProps, index: number) => (
        <MenuItem
          key={index}
          title={item.title}
          description={item.description}
          price={item.price}
          calories={item.calories}
          image={item.image}
        />
      ))}
    </div>
  );
}
