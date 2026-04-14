import styles from "./Rooms.module.css";

const roomData = [
  {
    id: 1,
    title: "Quarto 1",
    description: "1 cama de casal, 1 beliche",
    image: "/room_master2.jpg"
  },
  {
    id: 2,
    title: "Quarto 2",
    description: "1 cama de casal",
    image: "/gallery3.jpg"
  }
];

function Rooms() {
  return (
    <section className={styles.section} id="rooms">
      <div className="container">
        <h2 className={styles.mainTitle}>Onde você vai dormir</h2>
        
        <div className={styles.grid}>
          {roomData.map((room) => (
            <div key={room.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={room.image} alt={room.title} className={styles.image} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.roomTitle}>{room.title}</h3>
                <p className={styles.description}>{room.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
