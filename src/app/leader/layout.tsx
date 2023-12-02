import 'bootstrap/dist/css/bootstrap.min.css';

export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
    return (
        <section>
            <nav>
                {children}
            </nav>
        </section>
    )
}