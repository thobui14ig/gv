'use client';
import React, { useEffect, useState } from 'react'
import './latest-order.scss'
import { Button } from 'antd';
import { Socket } from '../socket/socket';


function LatestOrders() {
  const [posts, setPosts] = useState<any>([]);
  const [dataSocket, setDataSocket] = useState([]);


  const socket = Socket

  useEffect(() => {
    if (socket) {
      socket?.on(
        'nhandon',
        (data) => {
          setDataSocket(data)

        },
      );
    }
  }, []);

  useEffect(() => {
    const newPosts = getPosts(posts, dataSocket)
    setPosts(newPosts)
  }, [dataSocket]); // Theo dõi sự thay đổi của biến posts

  const getPosts = (array1: any[], dataSocket: any[]) => {
    const uniqueIds = new Set(array1.map((item: any) => item.id));
    const postNews = dataSocket.filter((item: any) => !uniqueIds.has(item.id)).map((item: any) => {
      return {
        ...item,
        isNew: true
      }
    })

    const postOlds = posts.map((item: any) => {
      return {
        ...item,
        isNew: false
      }
    })
    console.log(111, postNews)
    const combinedArray = [...postOlds, ...postNews]

    combinedArray.sort(function(a: any, b: any) {
        var dateA = new Date(a.created_time).getTime();
        var dateB = new Date(b.created_time).getTime();
        return dateB - dateA;
    }).slice(0, 20);


    return combinedArray
  }

  return (
    <div className='latest-order'>
      {posts?.length > 0 && posts?.map((post: any, i: number) => {
          return (
          <div key={i} className={`latest-order-item ${post?.isNew ? 'new' : 'old'}`}>
            <span className='name item-m3'>{post?.from?.name}({post?.groupId})</span>
            <span className='item-m3'>Time: {post?.created_time}</span>
            <span className='item-m3'>Nội dung: {post?.message}</span>
            <div className='press-order'>
              <Button type="primary">Nhận ngay</Button>
            </div>
          </div>
          )
      })}



    </div>
  )
}

export default LatestOrders