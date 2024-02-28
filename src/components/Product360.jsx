import { useState, useRef } from "react";

export default function Product360() {
  const [currentView, setCurrentView] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dir = "products_images/15/360/";

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (!isDragging) {
      return;
    }
    const distance = e.clientX - dragStartX.current;
    const sensitivity = 15; // Adjust sensitivity as needed
    if (Math.abs(distance) >= sensitivity) {
      if (distance < 0) {
        moveRight();
      } else {
        moveLeft();
      }
      dragStartX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const moveLeft = () => {
    setCurrentView((prev) => (prev === 0 ? 15 : prev - 1));
  };

  const moveRight = () => {
    setCurrentView((prev) => (prev === 15 ? 0 : prev + 1));
  };

  return (
    <div style={{ position: "relative" }}>
      <img
        src="other_images/360.png"
        style={{ position: "absolute", width: "60px", right: "30px" }}
      />
      <div onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <div onMouseDown={handleMouseDown}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (imgName, index) => (
              <img
                key={index}
                src={dir + imgName + ".jpg"}
                style={{ height: "450px" }}
                hidden={index !== currentView}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}