import React, { useState } from "react";
import '../../styles/App.css'

class TableData extends React.Component {


    render() {
        return (
            <>
                <h1>Power BI</h1>
                <iframe title="graficos" width="1050" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=d5aece3e-0c73-48ac-921b-6de9bbb31a6b&autoAuth=true&ctid=d6438082-eb98-4c3f-8397-5dbdfe4036fd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWNlbnRyYWwtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>
            </>
        );
    }
}

export default TableData;