import React , {ReactElement , useRef , useState} from "react";
import { Checkbox, Pagination} from 'antd';

function Number():ReactElement{

    const number = useRef(null);

    function numberChange(){
        console.log(number.current);
    }

    function actionChange(e:any){
        // setValue(e.targat.value);
    }

    function onChange(e:any) {
        console.log(`checked = ${e.target.checked}`);
    }

    return(
        <div className={`Number`}>
            <div className={`bar`}>
                <h3 className={`title`}>
                    เบอร์ผู้รับทั้งหมด
                </h3>
                <form onChange={numberChange}>
                <input
                    name="number"
                    type="text"
                    placeholder="ค้นหาเบอร์ผู้รับ"
                    // ref={number}
                />
                </form>
            </div>
            <div className={`select`}>
                <div className={`action`}>
                    <select name="action" id="action" onChange={actionChange}>
                        <option value="" selected disabled hidden>เลือก action</option>
                        <option value="a">a</option>
                        <option value="b">b</option>
                    </select>
                    <button type="submit">Apply</button>
                    <span>เลือกจำนวน 50 เบอร์</span>
                </div>
                <div className={`status`}>
                    <span>สถานะการส่ง </span>
                    <select name="send" id="send">
                        <option value="" selected>ทั้งหมด</option>
                        <option value="c">c</option>
                        <option value="d">d</option>
                    </select>
                    <span>สถานะการคลิก</span>
                    <select name="click" id="click">
                        <option value="" selected>ทั้งหมด</option>
                        <option value="e">e</option>
                        <option value="f">f</option>
                    </select>
                </div>
            </div>
            <div className={`table`}>

        {/* <Table
            rowSelection={{
            type: selectionType,
          ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
        /> */}
                <table>
                    <thead>
                        <tr>
                            <th><Checkbox onChange={onChange}></Checkbox></th>
                            <th>เบอร์ผู้รับ</th>
                            <th>สถานะการส่ง</th>
                            <th>สถานะการคลิก</th>
                            <th>เครดิตที่ใช้</th>
                            <th>ผู้รับคลิกเมื่อ</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Checkbox onChange={onChange}></Checkbox></td>
                            <td>0987698237</td>
                            <td>
                                <div className={`receive`}>received</div>  
                            </td>
                            <td>
                            <div className={`click`}>clicked</div> 
                            </td>
                            <td>2 <span className={`coin`}>C</span></td>
                            <td>                                
                                <span className={`date`}>25 Dec 2020</span>
                                <span className={`time`}>15:28</span>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><Checkbox onChange={onChange} className={`checkbox`}></Checkbox></td>
                            <td>0987698237</td>
                            <td>
                                <div className={`receive`}>received</div> 
                            </td>
                            <td>
                                <div className={`click`}>clicked</div> 
                            </td>
                            <td>2 <span className={`coin`}>C</span></td>
                            <td>
                                <span className={`date`}>25 Dec 2020</span>
                                <span className={`time`}>15:28</span>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={`pagechange`}>
                <Pagination
                    total={50}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    defaultPageSize={10}
                    defaultCurrent={1}
                    showSizeChanger
                />
            </div>
        </div>
    )
}

export default Number;