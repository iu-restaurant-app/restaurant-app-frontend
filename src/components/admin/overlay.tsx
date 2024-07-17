interface OverlayProps {
  onClick?: () => void;
}

export default function Overlay(props: OverlayProps) {
  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 z-30 overflow-hidden"
      onClick={props.onClick}
    ></div>
  );
}
