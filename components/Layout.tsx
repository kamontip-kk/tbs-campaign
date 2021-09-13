import dynamic from 'next/dynamic'
import Link from 'next/dist/client/link';
import {Layout, Breadcrumb} from 'antd';
const Header = dynamic(()=> import('./Header'))
const Footer = dynamic(()=> import('./Footer'))

const {Content } = Layout;


const Layouts = (props:any) => {
    return(
        <div>
            <Header/>
            <Layout style={{ padding: '130px 70px 90px 190px' }}>
                <Breadcrumb style={{ margin: '16px 0', fontSize: '22px', color:'grey' }}>
                    <Breadcrumb.Item>
                        <Link href=""><a>หน้าแรก</a></Link>    
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link href=""><a>แคมเปญ</a></Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link href=""><a>รายงานแคมเปญ</a></Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                {props.children}
            </Layout>
            
            <Footer/>
        </div>
    )
}

export default Layouts;