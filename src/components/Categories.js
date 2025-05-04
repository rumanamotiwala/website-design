import React, { useRef, useEffect } from "react";
// import "./Categories.css";

const categories = [
  { title: "Display", link: "#", image: "/images/display.png" },
  { title: "SSD", link: "#", image: "/images/ssd.png" },
  { title: "Charger", link: "#", image: "/images/charger.png" },
  { title: "Battery", link: "#", image: "/images/battery.png" },
  { title: "Laptop / Refurbished Laptop", link: "#", image: "/images/laptop.png" },
  { title: "Desktop / Refurbished Desktop", link: "#", image: "/images/desktop.png" },
  { title: "Accessories", link: "#", image: "/images/accessories.png" },
];


function Categories() {
  const scrollRef = useRef(null);
  let scrollAmount = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        scrollAmount += 220;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0; // reset to start
        }

        container.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 3000); // scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="categories" id="categories">
      <div className="container">
      <p>CATEGORIES</p>
        <h2 className="section-title">Trending Categories</h2>

        <div className="horizontal-slider" ref={scrollRef}>
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <h3>{category.title}</h3>
              <a href={category.link} className="btn">Shop Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
