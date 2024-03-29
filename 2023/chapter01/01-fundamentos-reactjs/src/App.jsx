import { Post } from './Post';
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import "./global.css"
import styles from "./App.module.css"

export function App() {
  return (
    <div>
      < Header />

      <div className={styles.wrapper}>
        < Sidebar />

        <main>
          < Post
            author="Byran"
            content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          />
          < Post
            author="Byran"
            content="What is Lorem Ipsum?"
          />
          < Post
            author="Byran"
            content="Where does it come from?"
          />
        </main>
      </div>
    </div >
  )
}
