import React, { ReactElement } from 'react';
import Link from 'next/link';

function Report():ReactElement{
    return(
        <div className={`Report`}>
            <h3 className={`title`}>
                Christmas Sale
            </h3>
            <span>
                ทำรายการส่งเมื่อ 25 Dec 2020 | 18:02:09
                <Link href='/'>
                    <a className={`button`}>
                        ดาวน์โหลดรายงาน
                    </a>
                </Link>
            </span>
        </div>
    )
}

export default Report;