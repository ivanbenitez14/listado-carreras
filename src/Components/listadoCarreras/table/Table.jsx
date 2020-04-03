import React, {useState, useEffect, useRef} from 'react';
import Carrera from './carrera/Carrera';
import Pagination from './pagination/Pagination';

const Table=(props) => {

    const listOfCarrera = props.rows.map((row, i) => {
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
			<Pagination
				paginationBrand={props.paginationBrand}
				pageSize={props.pageSize}
				page={props.page}
				pageTotal={props.pageTotal}>
			</Pagination>
		</div>
	);
    
}
export default Table;