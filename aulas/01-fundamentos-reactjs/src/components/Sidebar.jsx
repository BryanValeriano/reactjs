import styles from './Sidebar.module.css'
import { PencilLine } from "@phosphor-icons/react";


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
      />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/BryanValeriano.png" alt="avatar picture" />
        <strong> Bryan Valeriano </strong>
        <span> Mago </span>
      </div>
      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside >
  );
}
