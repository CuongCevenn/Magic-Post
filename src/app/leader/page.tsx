'use client'

import styles from './styles.module.css'
import { Button } from 'react-bootstrap'

export default function Page() {
    return (
        <>
            <h1>This page is for leader.</h1>
            <div className={styles.user}>leader</div>
            <br />
            <br />
            <div className={styles.container}>
                <div className={styles.box}>
                    <span className={styles.text}>Transaction Point</span>
                    <br />
                    <Button variant="secondary" href="./leader/transaction">View details</Button>
                    <div className={styles.table_content}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th className={styles.th}>Id</th>
                                    <th className={styles.th}>City</th>
                                    <th className={styles.th}>Order</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.td}>1</td>
                                    <td className={styles.td}>Hà Nội</td>
                                    <td className={styles.td}>0</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>2</td>
                                    <td className={styles.td}>Hồ Chí Minh</td>
                                    <td className={styles.td}>0</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>3</td>
                                    <td className={styles.td}>Hải Phòng</td>
                                    <td className={styles.td}>0</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>4</td>
                                    <td className={styles.td}>Đà Nẵng</td>
                                    <td className={styles.td}>0</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>5</td>
                                    <td className={styles.td}>Cần Thơ</td>
                                    <td className={styles.td}>0</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>5</td>
                                    <td className={styles.td}>Cần Thơ</td>
                                    <td className={styles.td}>0</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>5</td>
                                    <td className={styles.td}>Cần Thơ</td>
                                    <td className={styles.td}>0</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>5</td>
                                    <td className={styles.td}>Cần Thơ</td>
                                    <td className={styles.td}>0</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>5</td>
                                    <td className={styles.td}>Cần Thơ</td>
                                    <td className={styles.td}>0</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>5</td>
                                    <td className={styles.td}>Cần Thơ</td>
                                    <td className={styles.td}>0</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>5</td>
                                    <td className={styles.td}>Cần Thơ</td>
                                    <td className={styles.td}>0</td>
                                </tr>
                                <tr>
                                    <td className={styles.td}>5</td>
                                    <td className={styles.td}>Cần Thơ</td>
                                    <td className={styles.td}>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.box}>
                    <span className={styles.text}>Gathering Point</span>
                    <br />
                    <Button variant="secondary">View details</Button>
                </div>
                <div className={styles.box}>
                    <span className={styles.text}>Statistic</span>
                    <br />
                    <Button variant="secondary">View details</Button>
                </div>
            </div>
        </>
    )
}