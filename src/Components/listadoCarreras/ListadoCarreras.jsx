import React, {useState, useEffect, useRef} from 'react';
import Carrera from './carrera/Carrera';
import Pagination from './pagination/Pagination';

const ListadoCarreras=(props) => {

    const _state = {
        carreras: [
            {id: 1, title: "Miss Bolivia", raceStartDate: "2020-04-02", category: "21 K", arrivalTime: "02:00:00"}, 
            {id: 1, title: "Maratón Bolivia", raceStartDate: "2020-04-02", category: "21 K", arrivalTime: "02:00:00"},
            {id: 1, title: "Maratón Bolivia", raceStartDate: "2020-04-02", category: "21 K", arrivalTime: "02:00:00"},
            {id: 1, title: "Maratón Bolivia", raceStartDate: "2020-04-02", category: "21 K", arrivalTime: "02:00:00"}
        ], 
        pagination: {page: 0, pageSize: 5, pageTotal: 1}
    };
    const [state, setState]= useState(_state); 

    const listOfCarrera = state.carreras.map((row, i) => {
		return <Carrera row={row} key={i} id={i}></Carrera>
	});

    return(
		<div className='rounded border border-light shadow'>
			<table className="table table-striped bg-white">
				<thead>
					<tr>
                        <th>Id</th>
						<th>Maratón</th>
                        <th>Día carrera</th>
                        <th>Categoría</th>
                        <th>Llegada</th>
					</tr>
				</thead>
				<tbody>
					{ listOfCarrera }
				</tbody>
			</table>
		</div>
	);
    
}
export default ListadoCarreras;