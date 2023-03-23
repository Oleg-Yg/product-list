import styles from "@/styles/Home.module.scss";
import { MainLayout } from "@/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.mainTitle}>
        <h1>Главная страница</h1>
      </div>
    </MainLayout>
  );
}
