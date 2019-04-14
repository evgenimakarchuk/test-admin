import React, { useEffect } from 'react';
import './UserList.css';
import { useUserDataState } from '../../providers/UserDataProvider/UserDataProvider';

export default () => {
    const { data: { items, total } } = useUserDataState();
      
    return (        
        <div>                
            <table> 
                <thead>              
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody> 
                    {items.map(user => (         
                    <tr key={user.name}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                    ))}
                </tbody>                     
            </table>               
        </div>     
    )
}; 