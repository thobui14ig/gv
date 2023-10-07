'use client';
import React, { useState } from 'react'
import './latest-order.scss'
import { Button } from 'antd';

function LatestOrders() {
  const [value, setValue] = useState(1);

  return (
    <div className='latest-order'>
      <div className='latest-order-item'>
        <span className='name item-m3'>Hiền Nguyễn</span>
        <span className='item-m3'>Địa chỉ: Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng</span>
        <span className='item-m3'>Nội dung: Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng</span>
        <span className='item-m3'>Tiền trả: 200000vnđ</span>
        <div className='press-order'>
          <Button type="primary">Nhận ngay</Button>
        </div>
      </div>

      <div className='latest-order-item'>
        <span className='name item-m3'>Hiền Nguyễn</span>
        <span className='item-m3'>Địa chỉ: Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng</span>
        <span className='item-m3'>Nội dung: Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng</span>
        <span className='item-m3'>Tiền trả: 200000vnđ</span>
        <div className='press-order'>
          <Button type="primary">Nhận ngay</Button>
        </div>
      </div>
      <div className='latest-order-item'>
        <span className='name item-m3'>Hiền Nguyễn</span>
        <span className='item-m3'>Địa chỉ: Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng</span>
        <span className='item-m3'>Nội dung: Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng</span>
        <span className='item-m3'>Tiền trả: 200000vnđ</span>
        <div className='press-order'>
          <Button type="primary">Nhận ngay</Button>
        </div>
      </div>
      <div className='latest-order-item'>
        <span className='name item-m3'>Hiền Nguyễn</span>
        <span className='item-m3'>Địa chỉ: Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng</span>
        <span className='item-m3'>Nội dung: Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng</span>
        <span className='item-m3'>Tiền trả: 200000vnđ</span>
        <div className='press-order'>
          <Button type="primary">Nhận ngay</Button>
        </div>
      </div>
      <div className='latest-order-item'>
        <span className='name item-m3'>Hiền Nguyễn</span>
        <span className='item-m3'>Địa chỉ: Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng</span>
        <span className='item-m3'>Nội dung: Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng</span>
        <span className='item-m3'>Tiền trả: 200000vnđ</span>
        <div className='press-order'>
          <Button type="primary">Nhận ngay</Button>
        </div>
      </div>
      <div className='latest-order-item'>
        <span className='name item-m3'>Hiền Nguyễn</span>
        <span className='item-m3'>Địa chỉ: Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng</span>
        <span className='item-m3'>Nội dung: Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng Nguyễn Văn Linh Đà Nẵng</span>
        <span className='item-m3'>Tiền trả: 200000vnđ</span>
        <div className='press-order'>
          <Button type="primary">Nhận ngay</Button>
        </div>
      </div>

    </div>
  )
}

export default LatestOrders