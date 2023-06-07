// components/Page.tsx
// import styles from "../styles/Page.module.css"
// import styles from '../../styles/Page.module.css';

// const Page = ({ children }) => <div className={styles.page}>{children}</div>

// export default Page
//
import styles from '../../styles/Page.module.css'

type Props = {
  children: React.ReactNode
}

const Page = ({ children }: Props) => <div className={styles.page}>{children}</div>

export default Page
