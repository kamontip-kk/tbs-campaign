import React, { ReactElement , useState} from 'react';
import Image from 'next/image';
import mysms from '../../public/assets/mysms.png'

const data = [
    {
        label: 'ส่งทั้งหมด',
        number: 1000,
      },
      {
        label: 'ส่งสำเร็จ',
        number: 800,
      },
      {
        label: 'ผู้รับได้รับ',
        number: 700,
      },
      {
        label: 'ผู้รับคลิก Link',
        number: 400,
      },
];


function Result():ReactElement{

    function findheight(n:number,index:any){
        const myarray = data.findIndex(current => current.number === n)
            if (myarray === -1 || myarray === data.length - 1) {
                return null  // no next order
            }
        return (n-data[index + 1].number)/6.5;
    }

    const Graph = data.map((list,index) => {

        // if (typeof window === "undefined") return null;

        // const showChart = () =>{
        //     if(!document.getElementById(`chart${index+1}`)){
        //         return null;
        //     }
        //     else{
        //         document.getElementById(`chart${index+1}`)?.classList.remove('inactive');
        //         document.getElementById(`chart${index+1}`)?.classList.add('active');
        //     }
        // }
        // const el = document.getElementsByClassName('inactive');
        // if(el.className === 'active')
        // {document.getElementById(`chart${index+1}`)?.style.visibility = 'visible'}
        // document.getElementById(`chart${index+1}`)?.classList.add('active');
    
        return (
            <div className={`chart`} key={index}>
                <h4 className={`label label${index+1}`}>{list.label}</h4>
                <div className={`box${index+1} box`}>
                    <div className={`cube${index+1} cube`}>
                        {list.number}
                    </div>
                    <div className={`side${index+1} side`}></div>
                </div>
    
                <style jsx>{`
                    .box${index+1}{
                        // height: ${list.number/3.3}px;
                    }
                    .cube${index+1}{
                        // transform: scaleY(${list.number}/3.3);
                        // transform-origin: bottom;
                        height: ${list.number/3.3}px;
                    }
                    .side${index+1} {
                        // transform: scaleY(${list.number}/3.3);
                        // transform-origin: bottom;
                        height: ${list.number/3.3}px;
                        border-top: ${findheight(list.number,index)}px solid transparent;
                        border-bottom: ${findheight(list.number,index)}px solid transparent;
                    }                  
                `}</style>
                {/* {showChart} */}
                {/* {setActive('active')} */}
                {/* {document.body.style.setProperty('--graph-show', 'visible')} */}
                {/* {document.getElementsByClassName(`cube${index+1}`)[index].setAttribute("visibility","visible")} */}
                {/* {document.getElementById(`cube${index+1}`)[index].style.visibility = 'visible'} */}
            </div>
        );
    });
    

    return(
        <div className={`Result`}>
            <div className={`bar`}>
                <h3 className={`title`}>
                    ผลแคมเปญ
                </h3>
                <span>
                    ข้อมูลถึง 25 Dec 2020 | 18:02:09
                </span>    
            </div>
            <div className={`content`}>
                <div>
                    <div className={`graph`}>
                        {Graph}
                    </div>
                    <div className={`credit`}>
                        <h4>
                            เครดิตที่ใช้ทั้งหมด 
                            <div className={`creditnumber`}>
                                803 <span className={`coin`}>C</span>
                            </div>
                        </h4>
                        <h4>
                            คิดเป็นงบโดยประมาณ
                            <div className={`creditnumber`}>
                                399 <span className={`small`}>บาท</span>
                            </div>
                        </h4>
                        <h4>
                            CTR
                            <div className={`creditnumber`}>
                                45.34%
                            </div>
                        </h4>
                        <h4>
                            CPC
                            <div className={`creditnumber`}>
                                0.88
                            </div>
                        </h4>
                    </div>
                </div>
                <Image src={mysms} alt="mysms" width={570}/>
            </div>         
        </div>
    )
}

export default Result;