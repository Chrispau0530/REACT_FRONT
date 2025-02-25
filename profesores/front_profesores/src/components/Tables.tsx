
export const Tables = () => {
    return (
        <>
            <table className="table table-primary table-striped">

                <th>Matrcula</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Grado</th>
                <th>Grupo</th>
                <th>Promedio</th>
                <th colSpan={2}>Operaciones</th>

                <tbody>
                    <tr>
                        <td>230574</td>
                        <td>Guadalupe</td>
                        <td>Vargas Galindo</td>
                        <td>5</td>
                        <td>B</td>
                        <td>9.8</td>
                        <td>
                            <a href="#" className="btn btn-success">
                                Editar
                            </a>
                        </td>

                        <td>
                            <a href="#" className="btn btn-stop">Eliminar </a>
                        </td>

                    </tr>


                </tbody>
            </table>


        </>
    )
}
