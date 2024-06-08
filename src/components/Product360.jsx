import { useState, useRef, useEffect } from "react";

export default function Product360() {
  const [currentView, setCurrentView] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dir = "products_images/15/360/";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentView((prev) => (prev == 16 ? clear(interval) : prev + 1));
    }, 50);
    const clear = (interval) => {
      setCurrentView(0);
      clearInterval(interval);
    };
  }, []);

  const handleMouseDown = (e) => {
    if (!e.touches) {
      e.preventDefault();
    }
    setIsDragging(true);
    dragStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!e.touches) {
      e.preventDefault();
    }

    if (!isDragging) {
      return;
    }
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const distance = clientX - dragStartX.current;
    const sensitivity = 15; // Adjust sensitivity as needed
    if (Math.abs(distance) >= sensitivity) {
      if (distance < 0) {
        moveRight();
      } else {
        moveLeft();
      }
      dragStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
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
        style={{
          position: "absolute",
          width: "60px",
          right: "30px",
          top: "15px",
        }}
      />
      <div>
        <div>
          {Array.from({ length: 16 }).map((_, index) => (
            <img
              key={index}
              src={dir + (index + 1) + ".jpg"}
              style={{
                height: "auto",
                cursor: isDragging ? "grabbing" : "grab",
              }}
              hidden={index !== currentView}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseUp}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
