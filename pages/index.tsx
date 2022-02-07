import Head from 'next/head'
import styles from '@styles/Home.module.css'
import { DatePicker, Row, Col} from 'antd'
import CalcuquoteForm from 'components/FormComponent'
import {Layout} from 'antd'
import { Header } from 'antd/lib/layout/layout'
const Home: React.FC = () => {
  return(
    <div className={styles.container}>
    <Row>
      <Col span={12} offset={6}>
      <CalcuquoteForm/>
      </Col>
    </Row> 
    </div>
  )
}

export default Home