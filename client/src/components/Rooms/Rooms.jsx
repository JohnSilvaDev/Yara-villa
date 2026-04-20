import { useTranslation } from "react-i18next";
import styles from "./Rooms.module.css";

function Rooms() {
  const { t } = useTranslation();

  const roomData = [
    {
      id: 1,
      title: t("room1_title"),
      description: t("room1_desc"),
      image: "/room_master2.JPG"
    },
    {
      id: 2,
      title: t("room2_title"),
      description: t("room2_desc"),
      image: "/gallery3.JPG"
    }
  ];

  return (
    <section className={styles.section} id="rooms">
      <div className="container">
        <h2 className={styles.mainTitle}>{t("rooms_title")}</h2>
        
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
