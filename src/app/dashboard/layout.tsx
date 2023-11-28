import styles from './styles.module.css'

export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
    return (
        <section>
            <header className={styles.header}>
                <span>Magic Post Company</span>
            </header>
            <nav>
                {children}
            </nav>
        </section>
    )
}