import React from "react";
import { Table } from "antd";
//Data
import provinceData from "../../Data/provincias.json";
import covidData from "../../Data/Datos Covid Ecuador 00.json";

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
  prov=provinceData;

  // filterData(data);

  columns = [
    {
      title: "Provincia",
      dataIndex: "provincia",
      key: "provincia",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Category 1",
          value: "Category 1",
        },
        {
          text: "Category 2",
          value: "Category 2",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.address.startsWith(value),
      width: "30%",
    },
    {
      title: "Confirmados",
      dataIndex: "casos",
      key: "casos",
    },
    {
      title: "Fallecidos",
      dataIndex: "muertes",
      key: "muertes",
    },
  ];

  componentDidMount() {
    var regiones = localStorage.getItem("region");
    for (const i in provinceData) {
      if(provinceData[i].region===regiones){
       //console.log('entro', provinceData[i])
       }
     // console.log(provinceData[i].region);
    }

  }

  render() {
    const personasNoDuplicadas = []
    var regiones = localStorage.getItem("region");
    for (const i in provinceData) {
      if(provinceData[i].region===regiones){
       
       personasNoDuplicadas.push(provinceData[i].provincia)
       console.log('entro', personasNoDuplicadas)
       }
     // console.log(provinceData[i].region);
    }
    const numberProvince = this.props.numberProvince;
    //console.log(this.props.region, 'region', numberProvince)

    //console.log('regiones',regiones)
   // console.log("data", this.prov);

    // const personasNoDuplicadas = [];

    // Vamos iterando por las personas
    // this.prov.forEach((p) => {
    //   if (
    //     personasNoDuplicadas.findIndex((pd) => pd.region === p.region) === -1
    //   ) {
    //     No existe; al detectar que no existe el mismo nombre, "la copiamos"
    //     personasNoDuplicadas.push(p);
    //   }
    // });

    // Este array será el que contenga las personas sin duplicados
    //console.log("Personas no duplicadas: ", personasNoDuplicadas);
    // let data = covidData
    return (
      <>
        <h1>Provincia: {regiones}</h1>
        <div className="container mt-5" id="contenedor">
            <table class="table">
            <thead>
    <tr>
    <th scope="col">id</th>
      <th scope="col">nombre</th>
      <th scope="col">imagen</th>
      <th scope="col">stock</th>
      <th scope="col">precio</th>
      <th scope="col">descripcion</th>
    </tr>
  </thead>
  <tbody>
  
            {
    
            personasNoDuplicadas.map((user, index) => {
              return (
                <tr>
                  <td>{user}</td>
                </tr>
              );
            })
            
            }
          
          </tbody>
           </table>
        </div>
        {/* <Table dataSource={this.data} columns={this.columns} /> */}
      </>
    );
  }
}

export default TableData;
