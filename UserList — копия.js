import React, { useEffect } from 'react';
import { Table, Divider, Tag } from 'antd';
// import './UserList.css';
import {useUserDataState} from '../../providers/UserListDataProvider/UserListDataProvider';

export default () => {
    const {
        data: { items, total },
        params: {
            offset,
            limit,
        },
        loadData,
    } = useUserDataState();
      
    const columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
    }, {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    }, {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    }];
      
    return ( 
        <Table
            dataSource={items}
            columns={columns}
            rowKey='id'
            pagination={{
                pageSize: limit,
                total,
                current: offset / limit + 1,
                onChange: nextPage => loadData({ offset: (nextPage - 1) * limit })
            }}
        />        
    );
    
}; 