import React from 'react';
const Carrera = (props) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

	return(
		<tr>
			<td>{props.row.id}</td>
			<td>{props.row.title}</td>
            <td>{new Date(props.row.raceStartDate).toLocaleDateString("es-ES", options)}</td>
            <td>{props.row.category}</td>
            <td>{props.row.arrivalTime}</td>
		</tr>
	);
}
export default Carrera;