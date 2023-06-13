import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
      />

      <div className={styles.profile}>
        <strong> Bryan Valeriano </strong>
        <span> Mago </span>
      </div>


      <footer>
        <a href='#'>
          Editar seu pefil
        </a>
      </footer>

    </aside >
  );
}
