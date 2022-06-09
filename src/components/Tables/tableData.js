import React from 'react'
import { Table } from 'antd'
//Data
import provinceData from '../../Data/provincias.json'
import covidData from '../../Data/Datos Covid Ecuador 00.json'

// function filterData(data){
//     let newData = []
//     var i = 1
//     for( item in data ){
//       newData[i] = item.provincia
//       i++
//     }
//     return newData
// }

class TableData extends React.Component {

  // constructor(props){
  //   super(props)
  // }

  data = covidData;

  // filterData(data);

  columns = [
      {
        title: 'Provincia',
        dataIndex: 'provincia',
        key: 'provincia',
        filters: [
          {
            text: 'Joe',
            value: 'Joe',
          },
          {
            text: 'Category 1',
            value: 'Category 1',
          },
          {
            text: 'Category 2',
            value: 'Category 2',
          },
        ],
        filterMode: 'tree',
        filterSearch: true,
        onFilter: (value, record) => record.address.startsWith(value),
        width: '30%',
      },
      {
        title: 'Confirmados',
        dataIndex: 'casos',
        key: 'casos',
      },
      {
        title: 'Fallecidos',
        dataIndex: 'muertes',
        key: 'muertes',
      }
    ];

  componentDidMount(){
      console.log(provinceData[20].provincia)
      console.log(covidData)
  }

  render () {
    const numberProvince = this.props.numberProvince
    // let data = covidData
      return (
        <>
          <h1>
            Provincia: {provinceData[numberProvince].provincia} - 
            {" "+numberProvince} 
          </h1>
          <Table dataSource={this.data} columns={this.columns}/>
        </>
      )
  }
}

export default TableData;