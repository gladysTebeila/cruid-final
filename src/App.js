import "antd/dist/antd.css";
import './App.css';
import {Button, Table, Modal, Input} from "antd"
import {useState} from 'react'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import AddEmployee from "./addEmployee";

function App() {

  const [isEditing, setIsEditing] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [dataSource, setdataSource] = useState([
    
    {
      key: '4',
      id:12,
      name: 'Gladys',
      surname: '1 Falcon Street',
      email: 'gladys@email.com'
    },
  ]);
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Last Name',
      dataIndex: 'surname',
      key: 'surname',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      key: 'action',
      title: 'Action',
      render: (record) => {
        return (
          <>
          <EditOutlined onClick={()=>{
            onEditEmployee(record)
          }}/>
          <DeleteOutlined onClick={()=>{
              onDeleteStudent(record)
          }} style={{color: 'red', marginLeft: 12}}/>
          </>
        )
      }
    }
  ]

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure you want to delete "+record.name+" "+record.surname+"?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () =>{
        setdataSource(pre => {
          return pre.filter((employee) => employee.id !== record.id)
        });
      }
    })
    
  };

  


  const onEditEmployee = (record) => {
    setIsEditing(true);
    setEditingEmployee({...record});
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingEmployee(null)
  }

  //A function to add employee

  const addEmployee=((id, name, surname, email)=>{
    setdataSource((items)=>[...items, {
      id:id,
      name:name,
      surname:surname,
      email:email
    }])
  })
  return (
    <div className="App">
      <div className="adding">
        <AddEmployee list={dataSource} add={addEmployee} />
      </div>
      <header className="App-header">
      <Table dataSource={dataSource} columns={columns} />
      <Modal
        title="Edit Employee"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing()
        }}
        onOk={() => {
          setdataSource(pre=>{
            return pre.map(employee=>{
              if(employee.id === editingEmployee.id){
                return editingEmployee;
              }else{
                return employee;
              }
            })
          })
          resetEditing()
        }}
      >
        <Input value={editingEmployee?.name} onChange={(e) => {
          setEditingEmployee((pre)=>{
            return {...pre, name: e.target.value}
          })
        }}/>
        <Input value={editingEmployee?.surname} onChange={(e) => {
          setEditingEmployee((pre)=>{
            return {...pre, surname:e.target.value}
          })
        }}/>
        <Input value={editingEmployee?.email} onChange={(e) => {
          setEditingEmployee((pre)=>{
            return {...pre, email:e.target.value}
          })
        }}/>

      </Modal>
      </header>
    </div>
  );
}

export default App;
