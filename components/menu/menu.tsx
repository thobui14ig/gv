'use client'
import React from 'react'
import './menu.scss'
import { useRouter } from 'next/navigation'
import { ShoppingCartOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons'


function Menu() {
  const router = useRouter()

  return (
    <div className="footer-menu">
        <div className="footer-menu-item" onClick={() => router.push('/')}>
          <span className='menu-notification'></span>
          <UnorderedListOutlined className='menu-icon'/>
          <span>Đơn mới</span>
        </div>
        <div className="footer-menu-item" onClick={() => router.push('danh-sach-don-hang')}>
          <span className='menu-notification'></span>
          <ShoppingCartOutlined className='menu-icon'/>
          <span>Đơn hàng</span>
        </div>
        <div className="footer-menu-item" onClick={() => router.push('tai-khoan')}>
          <UserOutlined className='menu-icon'/>
          <span>Tài khoản</span>

        </div>
    </div>
  )
}

export default Menu