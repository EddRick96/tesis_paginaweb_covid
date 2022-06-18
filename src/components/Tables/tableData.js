import React, { useState } from "react";
import { Table } from "antd";
//Data
import provinceData from "../../Data/provincias.json";
import covidData from "../../Data/Datos Covid Ecuador 00.json";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

class TableData extends React.Component {
  // constructor(props){
  //   super(props)
  // }

  data = covidData;
  prov = provinceData;

  // filterData(data);

  columns = [
    {
      title: "Provincia",
      dataIndex: "provincia",
      key: "provincia",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <Input
            autoFocus
            placeholder="Type text here"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({closeDropdown:false})
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          ></Input>
        );
      },
      filterIcon: () => {
        return <SearchOutlined></SearchOutlined>;
      },
      onFilter: (value, record) => {
        return record.provincia.toLowerCase().includes(value.toLowerCase());
      },

      filterMode: "tree",
      filterSearch: true,
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
  }

  render() {
    const personasNoDuplicadas = [];
    var regiones = localStorage.getItem("region");
    for (const i in provinceData) {
      if (provinceData[i].region === regiones) {
        personasNoDuplicadas.push(provinceData[i]);
        //console.log("entro", personasNoDuplicadas);
      }
    }
    const numberProvince = this.props.numberProvince;
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
        {/* <div className="container mt-5" id="contenedor">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Provincia</th>
                <th scope="col">Casos</th>
                <th scope="col">Muertes</th>
              </tr>
            </thead>
            <tbody>
              {personasNoDuplicadas.map((user, index) => {
                return (
                  <tr>
                    <td>{user.provincia}</td>
                    <td>{user.casos}</td>
                    <td>{user.muertes}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}
        <Table columns={this.columns} dataSource={personasNoDuplicadas} />
      </>
    );
  }
}

export default TableData;
