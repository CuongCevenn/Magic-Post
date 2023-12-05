'use client'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import styles from './styles.module.css'
import CreateModal from '../../../components/create.modal'
import { useState } from 'react';

export default function Page() {
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    return (
        <>
            <div className={styles.div_top} style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant='secondary' href='../leader'>Back</Button>
                <Button variant='danger' className={styles.button_add_new}
                    onClick={() => setShowModalCreate(true)}
                >Add new</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>City</th>
                        <th>Order</th>
                        <th>Manager</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Hà Nội</td>
                        <td>0</td>
                        <td>James
                            <Button variant='info' className={styles.button_transaction}>View</Button>
                            <Button variant='primary' className={styles.button_manager}>Account</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Hồ Chí Minh</td>
                        <td>0</td>
                        <td>James
                            <Button variant='info' className={styles.button_transaction}>View</Button>
                            <Button variant='primary' className={styles.button_manager}>Account</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Hải Phòng</td>
                        <td>0</td>
                        <td>James
                            <Button variant='info' className={styles.button_transaction}>View</Button>
                            <Button variant='primary' className={styles.button_manager}>Account</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Đà Nẵng</td>
                        <td>0</td>
                        <td>James
                            <Button variant='info' className={styles.button_transaction}>View</Button>
                            <Button variant='primary' className={styles.button_manager}>Account</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Cần Thơ</td>
                        <td>0</td>
                        <td>James
                            <Button variant='info' className={styles.button_transaction}>View</Button>
                            <Button variant='primary' className={styles.button_manager}>Account</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Cần Thơ</td>
                        <td>0</td>
                        <td>James
                            <Button variant='info' className={styles.button_transaction}>View</Button>
                            <Button variant='primary' className={styles.button_manager}>Account</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Cần Thơ</td>
                        <td>0</td>
                        <td>James
                            <Button variant='info' className={styles.button_transaction}>View</Button>
                            <Button variant='primary' className={styles.button_manager}>Account</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Cần Thơ</td>
                        <td>0</td>
                        <td>James
                            <Button variant='info' className={styles.button_transaction}>View</Button>
                            <Button variant='primary' className={styles.button_manager}>Account</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Cần Thơ</td>
                        <td>0</td>
                        <td>James
                            <Button variant='info' className={styles.button_transaction}>View</Button>
                            <Button variant='primary' className={styles.button_manager}>Account</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Cần Thơ</td>
                        <td>0</td>
                        <td>James
                            <Button variant='info' className={styles.button_transaction}>View</Button>
                            <Button variant='primary' className={styles.button_manager}>Account</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Cần Thơ</td>
                        <td>0</td>
                        <td>James
                            <Button variant='info' className={styles.button_transaction}>View</Button>
                            <Button variant='primary' className={styles.button_manager}>Account</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Cần Thơ</td>
                        <td>0</td>
                        <td>James
                            <Button variant='info' className={styles.button_transaction}>View</Button>
                            <Button variant='primary' className={styles.button_manager}>Account</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <CreateModal
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
            ></CreateModal>
        </>
    );
}