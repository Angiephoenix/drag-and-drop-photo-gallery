import React from "react";
import { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styles from "../styles/Home.module.css";

import gallery1 from "../assets/gallery-1.jpeg";
import gallery2 from "../assets/gallery-2.jpeg";
import gallery3 from "../assets/gallery-3.jpeg";
import gallery4 from "../assets/gallery-4.jpeg";
import gallery5 from "../assets/gallery-5.jpeg";
import gallery6 from "../assets/gallery-6.jpeg";
import gallery7 from "../assets/gallery-7.jpeg";
import gallery8 from "../assets/gallery-8.jpeg";
import gallery9 from "../assets/gallery-9.jpeg";
import gallery10 from "../assets/gallery-10.jpeg";
import gallery11 from "../assets/gallery-11.jpeg";
import gallery12 from "../assets/gallery-12.jpeg";
import gallery13 from "../assets/gallery-13.jpeg";
import gallery14 from "../assets/gallery-14.jpeg";
import gallery15 from "../assets/gallery-15.jpeg";
import gallery16 from "../assets/gallery-16.jpeg";

const DATA = [
  {
    id: "01",
    image: gallery1,
    tags: "AfricanWoman1",
  },
  {
    id: "02",
    image: gallery2,
    tags: "AfricanWoman2",
  },
  {
    id: "03",
    image: gallery3,
    tags: "AfricanWoman3",
  },
  {
    id: "04",
    image: gallery4,
    tags: "AfricanWoman4",
  },
  {
    id: "05",
    image: gallery5,
    tags: "PrayingWoman",
  },
  {
    id: "06",
    image: gallery6,
    tags: "AfricanWoman5",
  },
  {
    id: "07",
    image: gallery16,
    tags: "AfricanDancer",
  },
  {
    id: "08",
    image: gallery8,
    tags: "DancingWomen",
  },
  {
    id: "09",
    image: gallery14,
    tags: "PregnantAndBeautiful",
  },
  {
    id: "10",
    image: gallery10,
    tags: "NursingMum",
  },
  {
    id: "11",
    image: gallery11,
    tags: "YoungLady",
  },
  {
    id: "12",
    image: gallery12,
    tags: "AfricanFashion",
  },
  {
    id: "13",
    image: gallery13,
    tags: "AfricanHeadgear",
  },
  {
    id: "14",
    image: gallery9,
    tags: "AfricanFashion2",
  },
  {
    id: "15",
    image: gallery15,
    tags: "AfricanWoman6",
  },
  {
    id: "16",
    image: gallery7,
    tags: "TwinAfricanWoman",
  },
  
];


// ... (your imports)

function Home() {
  const [images, setImages] = useState(DATA);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading time
    return () => clearTimeout(timer);
  }, []);

  const handleDragStart = () => {
    // No need to track draggedIndex
  };

  const handleDragEnd = (results) => {
    if (!results.destination) return;

    const reorderedImages = [...images];
    const [movedImage] = reorderedImages.splice(results.source.index, 1);
    reorderedImages.splice(results.destination.index, 0, movedImage);

    setImages(reorderedImages);
  };

  const filteredImages = images.filter((image) =>
    image.tags.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.layout_wrapper}>
      <div className={styles.card}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className={styles.header}>
            <h1>Image Gallery</h1>
            <input
              type="text"
              placeholder="Search by tags"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchBar}
            />
          </div>
          {loading ? (
            // Display a loading spinner or skeleton loader here
            <div className={styles.loading}>Loading...</div>
          ) : (
            <Droppable droppableId="ROOT" type="group">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={styles.grid}
                >
                  {filteredImages.map((image, index) => (
                    <Draggable
                      draggableId={image.id}
                      key={image.id}
                      index={index} // Use the original index, no adjustment
                      lockAspectRatio={true}
                      minimumDragDistance={5} // prevent the card from being dragged accidentally
                    >
                      {(provided, snapshot) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          className={`${styles.draggableItem} ${
                            snapshot.isDragging ? styles.draggingCard : ""
                          }`}
                          onDragStart={handleDragStart}
                        >
                          <img src={image.image} alt={`Image ${image.id}`} />
                          <div className={styles.tag}>{image.tags}</div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          )}
        </DragDropContext>
      </div>
    </div>
  );
}

export default Home;


